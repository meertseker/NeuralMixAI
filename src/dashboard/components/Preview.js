import "./Preview.css"

import React from 'react'
import Sidebar from "./Sidebar"

const Preview = () => {
  return (
    <div className="preview">


      <div className="sidebar">
            <Sidebar/>    
      </div>

      <div className="dashboard-main">
        <div className="preview-card-space">
          <div className="preview-card">
            <h2>High Boost Mix Chain Preview</h2>
            <p>Chat with NeuralMix AI to update it!</p>
          </div>
        </div>

        <div className="preview-info">
          <div className="info">1</div>
          <div className="info">2</div>
          <div className="info">3</div>
          <div className="info">4</div>


        </div>
    
      </div>

    </div>
  )
}

export default Preview