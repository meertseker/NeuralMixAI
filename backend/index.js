const axios = require('axios');
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const upload = multer({ storage: multer.memoryStorage() });
const app = express();
const { createClient } = require('@supabase/supabase-js');
const value = process.env.SUPABASE_SERVICE_KEY;
const Stripe = require('stripe');
const stripeKey = process.env.STRIPE_SECRET_KEY;


const supabase = createClient('https://xaujzzzeekizeaftwwlk.supabase.co', value);
app.use(cors({
  origin: 'https://saucyai.co', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '100mb' })); 
app.use(express.urlencoded({ limit: '100mb', extended: true }));



app.post('/create-subscription-session', async (req, res) => {
  const { priceId } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:3000/success', // Başarılı ödeme sonrası yönlendirme
      cancel_url: 'http://localhost:3000/cancel', // İptal durumunda yönlendirme
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



const getVocalChainDetails = async (vocalChainName) => {
  try {
    const vocalChain = await prisma.vocalChain.findFirst({
      where: { vocalChainName },
      include: {
        Preset: {
          include: {
            Plugin: {
              include: {
                PluginSetting: true
              }
            }
          }
        }
      }
    });

    if (!vocalChain) {
      return { error: "Vocal chain not found" };
    }

    return vocalChain;
  } catch (error) {
    console.error("Error fetching vocal chain details:", error);
    return { error: "Failed to retrieve data" };
  }
};


const sendMessageToDeepSeek = async (message) => {
  try {
    const response = await axios.post(
      'https://api.deepseek.com/v1/chat/completions', 
      {
        model: 'deepseek-chat', 
        messages: [{ role: 'user', content: message }],
        stream: false,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '', 
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('DeepSeek API error:', error.response ? error.response.data : error.message);
    return { error: 'Could not send message to DeepSeek' };
  }
};

module.exports = { sendMessageToDeepSeek };


app.post('/generate-chain', upload.none(), async (req, res) => {

  const type = ""
  const sex =""
  const sibilance =""
  const dynamicRange =""
  const resonance =""
  const frequencySpectrum = ""


  const prompt = `I want you to apply a perfect mix for a ${type} song following vocal features, 
                  Frequency Spectrum: ${frequencySpectrum} Sex of artist: ${sex} Sibilance: ${sibilance} 
                  Dynamic Range: ${dynamicRange} Resonance: ${resonance}. Your answer will be a json inside bracelets([]) , 
                  you will provide each effect name, along with settings that effect include, for example, for reverb, you should include everything like
                    {
                  "Room Size": "Medium",
                  "Pre-delay": "20ms",
                  "Decay Time": "2.5s",
                  "Damping": "50%",
                  "Wet/Dry Mix": "30% Wet, 70% Dry",
                  "Modulation": "Slight",
                  "Early Reflections": "5ms",
                  "Reverb Type": "Hall",
                  "Stereo Width": "120%",
                  "Input/Output Gain": "0dB",
                  "Low/High Cut": "80Hz / 8kHz",
                  "Feedback": "15%"
                    } i want you to include every setting for each effect required like this.` 
  
  result = sendMessageToDeepSeek(prompt)
                  

})



app.post('/update-chain', upload.none(), async (req, res) => {

  const {userId, vocalChainName, userMessage } = req.body;

  const chain = await getVocalChainDetails(vocalChainName);
  if (result.error) {
    return res.status(404).json(result);
  }
  res.json(chain);
  const deepSeekUpdatePrompt = "update the vocal chain given based on the message and return in json again in the same format. here is the message:"
  const message = chain.toISOString() + deepSeekUpdatePrompt + userMessage
  const updatedChain = sendMessageToDeepSeek(message)

})

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

    // save the beatUrl
    const savedBeat = await prisma.userInput.create({
      data: {
        userId,
        beatUrl:beatFileLoc,
        AudioUrl:vocalFileLoc,
        description: description
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


app.post('/savewaitlist', upload.none(), async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  try {
    const savedEmail = await prisma.subcriptions.create({
      data: {
        email,
      },
    });

    res.status(201).json({ success: true, data: savedEmail });
  } catch (error) {
    console.error('Error saving email to waitlist:', error.message);
    res.status(500).json({ error: 'Failed to save email.', details: error.message });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});