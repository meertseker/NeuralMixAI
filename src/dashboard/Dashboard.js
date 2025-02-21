import React from 'react';
import Sidebar from './components/Sidebar';
import './Dashboard.css';


const Dashboard = () => {
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
        <div className="dashboard-input"></div>
        <div className="dashboard-settings"></div>
        <div className="dashboard-generate-button"><p>Generate Vocal Chain</p></div>
      </div>
    </div>
  );
};

export default Dashboard;