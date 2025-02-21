import React from 'react';
import './Sidebar.css'; // Import the CSS file

const Sidebar = () => {
  const userName = "Mert Seker";
  const userSubscription = 1;

  return (
    <div className="sidebar">
      <div className="sidebar-content">
      <div className="profile">
        <img src='mixer.jpg' alt='profile' />
        <div className="user_details">
        <h2>{userName}</h2>
        <h3>{userSubscription ? "Premium" : "Free"}</h3>
        </div>
      </div>
      <div className="menu">
        <span>Find me ideas</span>
      </div>
      <div className="menu-button">
        <btn>Search</btn>
        <btn>Billing</btn>
      </div>
      
      <div className="vocal-chains">
        <span>Vocal Chains</span>
        </div>
        <div className="chain-button">
        <btn>High Boost Mix</btn>
        <btn>Mid Boost Mix</btn>
        <btn>High-Low Boost Mix</btn>
        <btn>Low Boost Mix</btn>
        </div>
      </div>
      <div className="settings">
        <button className='settings-button'>Settings</button>
      </div>
    </div>
  );
};

export default Sidebar;
