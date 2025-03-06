import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar.js';
import DashboardSettings from './components/DashboardSettings.js';
import './Dashboard.css';
import Create from './components/Create.js';
import Update from './components/Update.js';
import Preview from "./components/Preview.js";

const Dashboard = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();
  const [page, setPage] = useState("preview"); 

  useEffect(() => {
    if (!isSignedIn) {
      navigate('/login');
    }
  }, [isSignedIn, navigate]);
 
  return (
    <div className='dashboard'>
      <div className="sidebar">
      <Sidebar setPage={setPage}/>
      </div>
      {page === "create" && <Create setPage={setPage} />}
      {page === "update" && <Update setPage= {setPage}/>}
      {page === "preview" && <Preview setPage= {setPage}/>} 
    </div>
  );
};

export default Dashboard;
