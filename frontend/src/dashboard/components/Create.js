import React, { useState, useRef } from 'react';
import DashboardSettings from "./DashboardSettings";
import "./Create.css";
import { useUser } from '@clerk/clerk-react';

const Create = ({ setPage }) => {
  const [description, setDescription] = useState('');
  const [beatFile, setBeatFile] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const { user } = useUser();

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event) => {
    setBeatFile(event.target.files[0]);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        setAudioBlob(audioBlob);
        audioChunksRef.current = [];
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Microphone access denied. Please allow microphone permissions to record.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const handleGenerate = async () => {
    if (!user) {
      alert('Please sign in to generate a vocal chain.');
      return;
    }
  
    const formData = new FormData();
    formData.append('userId', user.id); // Add the user ID
    formData.append('description', description); // Add the description
    if (beatFile) {
      formData.append('beat', beatFile); // Add the beat file
    }
    if (audioBlob) {
      formData.append('recording', audioBlob, 'recording.wav'); // Add the recording
    }
  
    // Log FormData contents for debugging
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  
    setIsLoading(true);
  
    //try {
    //  // Example API call
    //  const response = await fetch('your-api-endpoint', {
    //    method: 'POST',
    //    body: formData,
    //  });
  //
    //  // Log the response status and text
     // console.log('Response Status:', response.status, response.statusText);
  //
    //  if (!response.ok) {
    //    const errorData = await response.json(); // Parse error response
     //   console.error('Error Response:', errorData);
      //  throw new Error(errorData.message || 'Failed to generate vocal chain');
     // }
  
    //  const data = await response.json();
    //  console.log('Success:', data);
   //   alert('Vocal chain generated successfully!');
   // } catch (error) {
   //   console.error('Error:', error);
   //   alert(`An error occurred while generating the vocal chain: ${error.message}`);
   // } finally {
   //   setIsLoading(false);
   // }
  };
  return (
    <div className="create">
      <div className="dashboard-main">
        <div className="dashboard-card">
          <h2>Create a Mix Vocal Chain</h2>
          <p>Enter either beat or description.</p>
        </div>
        <div className="dashboard-input">
          <img
            src="mLogo.png"
            alt="microphoneImage"
            onClick={isRecording ? stopRecording : startRecording}
            style={{ cursor: 'pointer', border: isRecording ? '2px solid red' : 'none' }}
          />
          <input
            type="text"
            className="dashboard-text-input"
            placeholder="Enter text here..."
            value={description}
            onChange={handleDescriptionChange}
          />
          <input
            type="file"
            className="dashboard-file-input"
            onChange={handleFileChange}
          />
        </div>
        <div className="dashboard-settings">
          <DashboardSettings />
        </div>
        <div className="dashboard-generate-button" onClick={handleGenerate} disabled={isLoading}>
          <p>{isLoading ? 'Generating...' : 'Generate Vocal Chain'}</p>
        </div>
      </div>
    </div>
  );
};

export default Create;