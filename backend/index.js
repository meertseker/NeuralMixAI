const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const upload = multer({ storage: multer.memoryStorage() });
const app = express();

// Enable CORS for requests from the frontend
app.use(cors({ origin: 'http://localhost:3003' }));

app.use(express.json());

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

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});