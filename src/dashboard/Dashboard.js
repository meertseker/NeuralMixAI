import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar.js';
import DashboardSettings from './components/DashboardSettings.js';
import './Dashboard.css';
import Create from './components/Create.js';
import Update from './components/Update.js';

const Dashboard = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();
  const [page, setPage] = useState("create"); 

  useEffect(() => {
    if (!isSignedIn) {
      navigate('/login');
    }
  }, [isSignedIn, navigate]);

  return (
    <div className='dashboard'>

      {page === "create" && <Create setPage={setPage} />}
      {page === "update" && <Update setPage= {setPage}/>} 
    </div>
  );
};

export default Dashboard;
