import DashboardSettings from "./DashboardSettings";
import React from 'react'
import "./Create.css"
import Sidebar from "./Sidebar";
const Create = ({ setPage }) => {
  
  return ( 
    <div className="create">
      <div className="sidebar">
      <Sidebar setPage={setPage}/>
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
  )
}

export default Create

