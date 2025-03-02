import React from 'react'
import ChatComponent from './Chat'
import Sidebar from './Sidebar'
import "./Update.css"

const Update = () => {
  return (
    <div className='update'>
        <div className="sidebar">
        <Sidebar/>
        </div>
        <div className="dashboard-main">
        <div className="update-card">
        <div className="dashboard-card">
          <h2>Update Your Vocal Chain</h2>
          <p>With NeuralMix AI</p>
        </div>
        </div>
        <ChatComponent/>
        </div>

     
    </div>
  )
}

export default Update
