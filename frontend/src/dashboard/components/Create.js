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
    formData.append('userId', user.id);
    formData.append('description', description);
    if (beatFile) {
      formData.append('beatAudio', beatFile);
    }
    if (audioBlob) {
      formData.append('micAudio', audioBlob, 'recording.wav');
    }
  
    setIsLoading(true);
  
    try {
      const response = await fetch('http://localhost:5000/save-beat', {
        method: 'POST',
        body: formData,
      });
  
      const responseText = await response.text();
      console.log('Response Text:', responseText);
  
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}: ${responseText}`);
      }
  
      const data = JSON.parse(responseText);
      console.log('Success:', data);
      alert('Vocal chain generated successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert(`An error occurred while generating the vocal chain: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
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