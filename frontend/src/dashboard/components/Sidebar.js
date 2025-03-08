import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { UserButton, useUser } from '@clerk/clerk-react';

const Sidebar = ({ setPage }) => {
  const { user } = useUser(); // Get the user object
  const [vocalChains, setVocalChains] = useState([]); // State to store vocal chain names
  const [loading, setLoading] = useState(true); // State to track loading status

  // Fetch vocal chain names when the component mounts or the user changes
  useEffect(() => {
    const fetchVocalChains = async () => {
      if (user && user.id) {
        try {
          const response = await fetch(`http://localhost:5000/vocal-chains/${user.id}`);
          console.log("User:", user);
          console.log("User ID:", user?.id);
          if (!response.ok) {
            throw new Error('Sunucu hatası');
          }
          const data = await response.json();
          setVocalChains(data.vocalChains);
        } catch (error) {
          console.error('Veri çekme hatası:', error);
          alert(`Hata: ${error.message}`);
        } finally {
          setLoading(false);
        }
      }
    };
  
    fetchVocalChains();
  }, [user]);

  const handleClick = () => {
    console.log("setPage called with update");
    setPage("preview"); // Update the page state in the Dashboard
  };

  const handleAddClick = () => {
    setPage("create"); // Update the page state in the Dashboard
  };

  const handleUpdateClick = () => {
    setPage("update"); // Update the page state in the Dashboard
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="profile">
          <div className="profileimg">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: {
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                  },
                },
              }}
            />
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
          <btn>
            <img src="/search.png" alt="" className="icons" /> Search
          </btn>
          <btn>
            <img src="/card.png" alt="" className="icons" /> Billing
          </btn>
        </div>

        <div className="vocal-chains">
          <span>Vocal Chains</span>
        </div>

        <div className="chain-button">
          {loading ? (
            <p>Loading...</p> // Show loading message while fetching data
          ) : (
            <>
              {vocalChains.length > 0 ? (
                vocalChains.map((chain) => (
                  <btn key={chain.id} onClick={handleClick}>
                    <img src="/triangle.png" alt="" className="chain-icons" />
                    {chain.vocalChainName}
                  </btn>
                ))
              ) : (
                <p>No vocal chains found.</p> // Show message if no vocal chains exist
              )}
              <btn className="add" onClick={handleAddClick}>
                <img src="/add.png" alt="" className="chain-icons" />
                Add new vocal chain
              </btn>
            </>
          )}
        </div>
      </div>

      <div className="settings">
        <button className="settings-button">Settings</button>
      </div>
    </div>
  );
};

export default Sidebar;