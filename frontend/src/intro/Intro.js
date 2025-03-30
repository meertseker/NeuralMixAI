import React from 'react'
import "./Intro.css"

import { useNavigate } from 'react-router-dom';
const Intro = () => {

  const navigate = useNavigate();
  return (
    <div className='homepage'>
      
        <section className='introduction'>
        <div className="blur"></div>
        <div className="light-streak"></div>


          <div className="soon"><div className="new">NEW</div>SOON AVAILABLE VIA OUR VST.</div>
          
          <h1 className='welcome-text'>Create vocal mix chains with Saucy AI </h1>
          <h2 className="welcome-sub-text">Give us a sample of your vocal, we’ll handle the rest</h2>


          <button className="waitlist-btn" onClick={() => navigate('/dashboard')}>Dashboard</button>

          <div className="dash-preview"><img src="dashboardss.png" alt="" /></div>
        </section>
        <section className='navbar'>
          navbar
          </section>
          <section className='daws'>
          compatible daws
          </section>
          <section className='pitcure-text'>
          information with screenshot
          </section>
          <section className='information'>
          specific infos
          </section>
          <section className='waitlist'>
          waitlist form
          </section>
          <section className='footer'>
          footer
          </section>
      
    </div>

  )
}

export default Intro
