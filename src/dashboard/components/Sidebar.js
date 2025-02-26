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
        <span>Menu</span>
      </div>
      <div className="menu-button">
        <btn><img src="/search.png" alt="" className='icons'/>Search</btn>
        <btn><img src="/card.png" alt="" className='icons'/>Billing</btn>
      </div>
      
      <div className="vocal-chains">
        <span>Vocal Chains</span>
        </div>
        <div className="chain-button">
        <btn><img src="/triangle.png" alt="" className='chain-icons'/>High Boost Mix</btn>
        <btn><img src="/circle.png" alt="" className='chain-icons'/>Mid Boost Mix</btn>
        <btn><img src="/square.png" alt="" className='chain-icons'/>High-Low Boost Mix</btn>
        <btn><img src="/circle.png" alt="" className='chain-icons'/>Low Boost Mix</btn>
        <btn className = "add"><img src="/add.png" alt="" className='chain-icons'/>Add new vocal chain</btn>
        </div>
      </div>
      <div className="settings">
        <button className='settings-button'>Settings</button>
      </div>
    </div>
  );
};

export default Sidebar;
