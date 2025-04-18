import React from 'react';
import "./Intro.css";
import { useNavigate } from 'react-router-dom';
import FlSection from "./components/FlSection"
import WaitlistCTA from './components/Waitlist';
import { useEffect, useRef } from 'react';

import Subscriptions from './components/Subscriptions';
const Intro = () => {
  const navigate = useNavigate();


  const waitlistRef = useRef(null);

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='homepage'>
      <div className="scroll-container">
        <section className='introduction'>
          <div className="blur"></div>
          <div className="light-streak"></div>
          
          <div className="content">
            <div className="soon">
              <div className="new">NEW</div>
              LAUNCHING SOON
            </div>
            
            <h1 className='welcome-text'>Instant Mixer Presets with Saucy AI</h1>
            <h2 className="welcome-sub-text">
            Drop a vocal. Get a ready-to-record vocal chain.
            </h2>

            <button className="waitlist-btn" onClick={scrollToWaitlist}>
            Reserve Your Spot
            </button>

            <div className="dash-preview">
              <img src="dashfinal.png" alt="Dashboard Preview" />
            </div>
          </div>
        </section>

        <div className="section-wrapper">
          <section className='navbar-section'>
            <ul>
            
            <li> <img src="logo.png" alt="" /></li>
            <li> <img src="logo.png" alt="" /></li>
            <li> <img src="logo.png" alt="" /></li>
            <li> <img src="logo.png" alt="" /></li>
            <li> <img src="logo.png" alt="" /></li>
            <li> <img src="logo.png" alt="" /></li>
            </ul>
          </section>
          
          <section className='how-to section'>
          <div class="bento1">

          <div class="seo-section">
            <div class="seo-section-bg"></div>
            <div class="visual">
              <img src="ring.svg" alt="Metallic ring visualization" class="visual-image"/>
            </div>
            <div class="text-container">
              <div class="heading">One click vocal chains</div>
              <div class="description">Upload your vocal. Pick the vibe. Get your chain.</div>
            </div>
          </div> 
  
      
          <div class="user-friendly-section">
          <div class="user-friendly-bg"></div>
          

          <div class="dashboard-visual">
            <img src="dashcard1.png" alt="Dashboard interface" class="dashboard-image"/>
          </div>
          

          <div class="gradient-overlay"></div>
          
          <div class="user-friendly-text">
            <div class="user-friendly-heading">Automatic Vocal Analysis</div>
            <div class="user-friendly-description">Saucy AI listens and builds your sound chain.</div>
          </div>
        </div>
        </div>


        <div class="bento1">


        <div class="seo-section">
          <div class="seo-section-bg"></div>
          <div class="visual">
            <img src="ring.svg" alt="Metallic ring visualization" class="visual-image"/>
          </div>
          <div class="text-container">
            <div class="heading">Preview Your Chain</div>
            <div class="description">See how your vocal is processed in real time.</div>
          </div>
        </div> 

        
        <div class="user-friendly-section">
        <div class="user-friendly-bg"></div>


        <div class="dashboard-visual">
          <img src="previewdash.png" alt="Dashboard interface" class="dashboard-image"/>
        </div>


        <div class="gradient-overlay"></div>

        <div class="user-friendly-text">
          <div class="user-friendly-heading"> Effect and Plugin Overview</div>
          <div class="user-friendly-description">Find out what effects shape your sound.</div>
        </div>
        </div>

        </div>
        <div class="bento1">

        <div class="seo-section">
          <div class="seo-section-bg"></div>
          <div class="visual">
            <img src="ring.svg" alt="Metallic ring visualization" class="visual-image"/>
          </div>
          <div class="text-container">
            <div class="heading">Edit Your Chains</div>
            <div class="description">Not happy? Adjust everything easily.</div>
          </div>
        </div> 


        <div class="user-friendly-section">
        <div class="user-friendly-bg"></div>


        <div class="dashboard-visual">
          <img src="updatechain.png" alt="Dashboard interface" class="dashboard-image"/>
        </div>


        <div class="gradient-overlay"></div>

        <div class="user-friendly-text">
          <div class="user-friendly-heading">Chat with Saucy AI</div>
          <div class="user-friendly-description">Type changes. Let Saucy AI update your chain.</div>
        </div>
        </div>
        </div>


        

        
        </section>
          
          <section className='pitcure-text section'>
            <FlSection/>
          </section>
          <div className="purple-glow"></div>
          <section className='waitlist section' ref={waitlistRef}>
          <Subscriptions/>  
          <WaitlistCTA />
          </section>
          
          <section className='footer section'>
           
            Contact: support@saucyai.co
            <p>For employment: hire@saucyai.co</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Intro;