import React from 'react';
import ChatComponent from './Chat';
import Sidebar from './Sidebar';
import "./Update.css";

const Update = ({ setPage }) => {  // Receive setPage as a prop here
  return (
    <div className='update'>
      <div className="dashboard-main">
        <div className="update-card">
          <div className="dashboard-card">
            <h2>Update Your Vocal Chain</h2>
            <p>With NeuralMix AI</p>
          </div>
        </div>
        <ChatComponent />
      </div>
    </div>
  );
};

export default Update;
