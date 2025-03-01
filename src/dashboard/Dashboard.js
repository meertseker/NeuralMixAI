import React, { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar.js';
import DashboardSettings from './components/DashboardSettings.js';
import './Dashboard.css';

const Dashboard = () => {
  const { isSignedIn } = useUser(); // Checks if user is signed in
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) {
      navigate('/login'); // Redirects if user is not signed in
    }
  }, [isSignedIn, navigate]);
  return (
    <div className='dashboard'>
      <div className="sidebar">
      <Sidebar />
      </div>
      <div className="dashboard-main">
        <div className="dashboard-card">
          <h2>Create a Mix Vocal Chain</h2>
          <p>Enter either beat or desciption.</p>
        </div>
        <div className="dashboard-input">
          <img src="mLogo.png" alt="microphoneImage"/>
          <input type="text" className="dashboard-text-input" placeholder="Enter text here..." />
          <input type="file" className="dashboard-file-input"/>
        </div>
        <div className="dashboard-settings"> 
          <DashboardSettings/>
        </div>
        <div className="dashboard-generate-button"><p>Generate Vocal Chain</p></div>
      </div>
    </div>
  );
};

export default Dashboard;