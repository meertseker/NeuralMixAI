import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';

function Home() {
  const [file, setFile] = useState(null);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleGeneratePreset = () => {
    if (file) {
      console.log('Generating preset for:', file.name);
    } else {
      alert('Please upload a file first!');
    }
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-left">
          <span className="logo-text">NEURALMIX</span>
          <ul className="nav-links">
            <li><a href="#products">Products</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#forwriters">For Writers</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
        </div>
        <div className="nav-right">
          <button className="demo-btn" onClick={() => navigate('/demo')}>Request Demo</button>
          <button className="dashboard-btn" onClick={() => navigate('/dashboard')}>Dashboard</button>
        </div>
      </header>
    
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Industry Level Vocal Chain Generator</h1>
          <h2>Get multi-channel vocal chains instantly!</h2>
          <p>
            We analyze your beat’s style and create a custom vocal chain preset tailored to your track. Upload your audio, and we’ll handle the rest.
          </p>
          <button className="go-dashboard" onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
        </div>
        <div className="hero-visual">
          <img src="/plugins.jpeg" alt="Vocal chain visualization" className="mixer-visual" />
        </div>
        {/* FLOATING CARD ON THE RIGHT */}
        <div className="card">
          <h3>Upload your beat</h3>
          <p>We’ll analyze its genre, BPM, and mood to generate the perfect vocal chain for your project.</p>
          <div className="upload-box">
            <input type="file" accept="audio/*" id="file-upload" onChange={handleFileUpload} style={{ display: 'none' }} />
            <label htmlFor="file-upload" className="drop-area">
              {file ? `Uploaded: ${file.name}` : 'Click or drop your file here'}
            </label>
          </div>
          <button className="generate-btn" onClick={handleGeneratePreset}>Generate Preset</button>
        </div>
      </section>

      {/* BRAND LOGOS */}
      <section className="brands-section">
        <div className="brands-content">
          <div className="logos">
            <span>WIRED</span>
            <span>The New York Times</span>
            <span>BBC</span>
            <span>The Washington Post</span>
            <span>NPR</span>
            <span>Forbes</span>
            <span>CNN</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 NeuralMix. All rights reserved.</p>
      </footer>

      {/* COOKIE BANNER */}
      {showCookieBanner && (
        <div className="cookie-banner">
          <p>We use cookies. By using our site, you accept our cookie policy.</p>
          <button className="cookie-accept" onClick={() => setShowCookieBanner(false)}>Okay</button>
        </div>
      )}
    </div>
  );
}

export default Home;
