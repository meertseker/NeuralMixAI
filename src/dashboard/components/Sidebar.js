import React, { useState } from 'react';
import './Sidebar.css';
import { UserButton, useUser } from '@clerk/clerk-react';

const Sidebar = () => {
  const { user } = useUser(); // Get the user object

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="profile">
        <div className="profileimg">
          <UserButton />
        </div>
          <div className="user_details">
            <h2>{user ? user.fullName : "Guest"}</h2>
            <h3>{user ? "Premium" : "Free"}</h3>
          </div>
        </div>

        <div className="menu">
          <span>Menu</span>
        </div>

        <div className="menu-button">
          <btn><img src="/search.png" alt="" className='icons'/> Search</btn>
          <btn><img src="/card.png" alt="" className='icons'/> Billing</btn>
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
