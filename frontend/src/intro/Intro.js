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
            
            <h1 className='welcome-text'>Pro Vocal Chains in One Click – No Mixing Skills Needed</h1>
            <h2 className="welcome-sub-text">
            Upload your raw vocal. Pick your vibe. Get a radio-ready chain instantly. Works in FL Studio, Ableton & Logic Pro.
            </h2>

            <button className="waitlist-btn" onClick={scrollToWaitlist}>
            Get Instant Mixes → 7-Day Free Trial
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
              <div class="heading">Click Pro Chains</div>
              <div class="description">Upload a vocal. Get autotune, EQ, compression + FX pre-loaded in</div>
            </div>
          </div> 
  
      
          <div class="user-friendly-section">
          <div class="user-friendly-bg"></div>
          

          <div class="dashboard-visual">
            <img src="dashcard1.png" alt="Dashboard interface" class="dashboard-image"/>
          </div>
          

          <div class="gradient-overlay"></div>
          
          <div class="user-friendly-text">
            <div class="user-friendly-heading">Genre-Smart AI</div>
            <div class="user-friendly-description">Pop? Trap? Rock? Saucy AI picks the right effects for your style</div>
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
            <div class="heading">Live Chain Preview</div>
            <div class="description">Audition chains before downloading. Tweak the ‘Sauce Level’ from clean</div>
          </div>
        </div> 

        
        <div class="user-friendly-section">
        <div class="user-friendly-bg"></div>


        <div class="dashboard-visual">
          <img src="previewdash.png" alt="Dashboard interface" class="dashboard-image"/>
        </div>


        <div class="gradient-overlay"></div>

        <div class="user-friendly-text">
          <div class="user-friendly-heading">FX On/Off Toggles
          </div>
          <div class="user-friendly-description">Disable effects you hate with one click. Your chain, your rules.</div>
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
            <div class="heading">Not a Blackbox</div>
            <div class="description"> You can adjust everything easily.</div>
          </div>
        </div> 


        <div class="user-friendly-section">
        <div class="user-friendly-bg"></div>


        <div class="dashboard-visual">
          <img src="updatechain.png" alt="Dashboard interface" class="dashboard-image"/>
        </div>


        <div class="gradient-overlay"></div>

        <div class="user-friendly-text">
          <div class="user-friendly-heading">Text-to-Mix</div>
          <div class="user-friendly-description">Type ‘more warmth’ or ‘less robotic’ – Saucy AI adjusts settings in real</div>
        </div>
        </div>
        </div>


        

        
        </section>
          
          <section className='pitcure-text section'>
            <FlSection/>
            <Subscriptions/>  
          </section>
          <div className="purple-glow"></div>
          <section className='waitlist section' ref={waitlistRef}>
          
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