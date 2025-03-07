const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const upload = multer({ storage: multer.memoryStorage() });
const app = express();

app.use(cors({ origin: 'http://localhost:3001' }));

app.use(express.json({ limit: '100mb' })); 
app.use(express.urlencoded({ limit: '100mb', extended: true }));


// Define the /save-beat route
app.post('/save-beat', upload.any(), async (req, res) => {
  console.log('Request received at /save-beat');
  console.log('Request Body:', req.body);
  console.log('Request Files:', req.files);

  try {
    const { userId, description } = req.body;
    if (!userId || !description) {
      return res.status(400).json({ error: "userId and description are required" });
    }

    const beatAudioFile = req.files.find(file => file.fieldname === 'beatAudio');
    const micAudioFile = req.files.find(file => file.fieldname === 'micAudio');

    if (!beatAudioFile || !micAudioFile) {
      return res.status(400).json({ error: "Both beatAudio and micAudio files are required" });
    }

    const beatAudio = beatAudioFile.buffer;
    const micAudio = micAudioFile.buffer;

    const savedBeat = await prisma.beat.create({
      data: {
        userId,
        description,
        beatAudio,
        micAudio,
      },
    });

    

    res.status(201).json({ success: true, beatId: savedBeat.id });
  } catch (error) {
    console.error('Error saving beat:', error);
    res.status(500).json({ error: "Failed to save beat", details: error.message });
  }
});

app.get('/vocal-chains/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    // Query the database to get vocal chains for the given user ID
    const vocalChains = await prisma.vocalChain.findMany({
      where: {
        userId: userId,
      },
      select: {
        id: true,
        vocalChainName: true,
      },
    });

    // Return the vocal chain names as a JSON response
    res.status(200).json({ success: true, vocalChains });
  } catch (error) {
    console.error('Error fetching vocal chains:', error);
    res.status(500).json({ error: "Failed to fetch vocal chains", details: error.message });
  }
});

app.post('/analyze-beat', async (req, res) => {
  try {
      const audioBlob = req.body.audioBlob; // Assuming the audio blob is sent as a base64-encoded string

      if (!audioBlob) {
          return res.status(400).json({ error: 'No audio blob provided' });
      }

      // Prepare the payload for the Dolby API
      const payload = {
          audio: audioBlob, // The base64-encoded audio data
          // Add any other parameters required by the Dolby API
      };

      const response = await axios.post(
          'https://api.dolby.com/media/analyze/music',
          payload,
          {
              headers: {
                  'accept': 'application/json',
                  'content-type': 'application/json',
                  'Authorization': `Bearer ${process.env.DOLBY_API_KEY}`
              }
          }
      );

      // Return the analysis results
      res.json(response.data);
  } catch (error) {
      console.error('Error analyzing beat:', error);
      res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});