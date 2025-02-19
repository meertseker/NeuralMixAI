import React, { useState, useEffect } from 'react';
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import './Dashboard.css';

const Dashboard = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isSignedIn) {
      navigate("/login"); // Redirect to login page
    }
  }, [isSignedIn, navigate]);

  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAnalyze = () => {
    setShowResults(true);
  };

  const presets = [
    { id: 1, name: 'Dark Trap Master', bpm: 140, key: 'A Minor', date: '2024-03-15' },
    { id: 2, name: 'Bulk Vocal Mix', bpm: 92, key: 'F Major', date: '2024-03-14' },
  ];

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="nav-left">
          <span className="logo-text">NeuralMix AI</span>
          <ul className="nav-links">
            <li><a href="#new">New Preset</a></li>
            <li><a href="#history">History</a></li>
            <li><a href="#help">Help</a></li>
          </ul>
        </div>
        <div className="nav-right">
          <button className="account-btn">Account</button>
        </div>
      </nav>

      <div className="dashboard-main">
        <div className="upload-section">
          <div className="card">
            <h3>Generate New Vocal Chain</h3>
            <div className="upload-box">
              <input 
                type="file" 
                id="file-upload" 
                onChange={handleFileUpload} 
                style={{ display: 'none' }} 
              />
              <label htmlFor="file-upload" className="upload-label">
                {selectedFile ? selectedFile.name : 'Upload Beat'}
              </label>
              <input 
                type="text" 
                placeholder="Add description (e.g. Like Travis Scott)" 
                value={description} 
                onChange={handleDescriptionChange} 
                className="description-input" 
              />
              <button className="generate-btn" onClick={handleAnalyze}>
                Analyze & Generate
              </button>
            </div>
          </div>
        </div>

        {showResults && (
          <div className="vocal-chain-preview">
            <h3>Vocal Chain Preview</h3>
            <div className="plugin-grid">
              <div className="plugin-card"><h4>CLA-76</h4><p>Attack: 4, Release: 5, Ratio: 8:1</p></div>
              <div className="plugin-card"><h4>SSL E-Channel</h4><p>High-Pass Filter: 90 Hz, Low Shelf: +3 dB</p></div>
              <div className="plugin-card"><h4>RVerb</h4><p>Reverb Type: Non-Lin, Decay: 2.2s</p></div>
              <div className="plugin-card"><h4>H-Delay</h4><p>Delay Time: 1/8, Feedback: 25%</p></div>
            </div>
          </div>
        )}

        <div className="history-section">
          <h3>Recent Presets</h3>
          <div className="preset-grid">
            {presets.map(preset => (
              <div key={preset.id} className="preset-card">
                <div className="preset-header">
                  <h4>{preset.name}</h4>
                  <span>{preset.date}</span>
                </div>
                <div className="preset-meta">
                  <span>BPM: {preset.bpm}</span>
                  <span>Key: {preset.key}</span>
                </div>
                <div className="preset-actions">
                  <button className="edit-btn">Edit</button>
                  <button className="download-btn">Download</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
