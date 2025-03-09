const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const upload = multer({ storage: multer.memoryStorage() });
const app = express();
const { createClient } = require('@supabase/supabase-js');


const supabase = createClient('https://xaujzzzeekizeaftwwlk.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhdWp6enplZWtpemVhZnR3d2xrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczOTgyMDkyMywiZXhwIjoyMDU1Mzk2OTIzfQ.gnPoNvzNfpkJrRJJINJiJrJmScBwg7DYCT1zgzL0uJQ");
app.use(cors({
  origin: 'http://localhost:3002', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '100mb' })); 
app.use(express.urlencoded({ limit: '100mb', extended: true }));


app.post('/save-vocal-chain', upload.none(), async (req, res) => {
  const { userId, vocalChainName } = req.body;

  if (!userId || !vocalChainName) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    const vocalChain = await prisma.vocalChain.create({
      data: {
        userId,
        vocalChainName,
      },
    });

    res.status(201).json(vocalChain);
  } catch (error) {
    console.error('Error saving vocal chain:', error.message, error.stack);
    res.status(500).json({ error: 'Internal server error.', details: error.message });
  }
});



app.post('/save-beat', upload.single('beatAudio'), async (req, res) => {
  console.log('Request received at /save-beat');
  console.log('Request Body:', req.body);
  console.log('Request Files:', req.file);

  try {
    const { userId, description } = req.body;

    const beatAudioFile = req.file;

    // Check if userId is provided
    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }


    // Check if the beat audio file is provided
    if (!beatAudioFile) {
      return res.status(400).json({ error: "Beat audio file is required" });
    }

    // Upload file to Supabase Storage
    const timestamp = new Date().toISOString(); // Create timestamp
    const beatFileLoc = `${userId}/${timestamp}.wav`;
    const vocalFileLoc = "draft"


    const { error } = await supabase.storage
      .from('beats') // Correct placement of '.from()' method
      .upload(beatFileLoc, beatAudioFile.buffer);

    // Check for errors during the upload
    if (error) {
      console.error('Error uploading file:', error);
      return res.status(500).json({ error: "Error uploading beat file", details: error.message });
    }

    // Optionally, save beat data to your database (e.g., save the beatUrl)
    const savedBeat = await prisma.userInput.create({
      data: {
        userId,
        beatUrl:beatFileLoc,
        AudioUrl:vocalFileLoc,
        description: description
         // Emin olmak için String'e çevir
      },
    });

    // Check for errors when saving to the database
    if (dbError) {
      console.error('Error saving to database:', dbError);
      return res.status(500).json({ error: "Failed to save beat in the database", details: dbError.message });
    }

    // Respond with success and the generated URL
    res.status(201).json({ success: true, beatId: savedBeat.id, beatUrl: supabaseFileName });

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