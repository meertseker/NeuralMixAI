import React from 'react';
import "./Intro.css";
import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className='homepage'>
      <div className="scroll-container">
        <section className='introduction'>
          <div className="blur"></div>
          <div className="light-streak"></div>
          
          <div className="content">
            <div className="soon">
              <div className="new">NEW</div>
              SOON AVAILABLE VIA OUR VST
            </div>
            
            <h1 className='welcome-text'>Introduction to Saucy AI</h1>
            <h2 className="welcome-sub-text">
              Mix your vocals instantly, give us a sample of your vocal, we’ll handle the rest
            </h2>

            <button className="waitlist-btn" onClick={() => navigate('/dashboard')}>
              Go to Dashboard
            </button>

            <div className="dash-preview">
              <img src="dashboardss.png" alt="Dashboard Preview" />
            </div>
          </div>
        </section>

        <div className="section-wrapper">
          <section className='navbar-section'>
            <ul>
            <li><a href="#products">Products</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#forwriters">For Producers</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#team">Team</a></li>
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
              <div class="heading">One click chains</div>
              <div class="description">Save big time on mixing, release your tracks faster</div>
            </div>
          </div> 
  
      
          <div class="user-friendly-section">
          <div class="user-friendly-bg"></div>
          

          <div class="dashboard-visual">
            <img src="dashboarddds.png" alt="Dashboard interface" class="dashboard-image"/>
          </div>
          

          <div class="gradient-overlay"></div>
          
          <div class="user-friendly-text">
            <div class="user-friendly-heading">User-friendly dashboard</div>
            <div class="user-friendly-description">Upload your vocal, describe the vibe and let it handle the rest</div>
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
            <div class="heading">One click chains</div>
            <div class="description">Save big time on mixing, release your tracks faster</div>
          </div>
        </div> 


        <div class="user-friendly-section">
        <div class="user-friendly-bg"></div>


        <div class="dashboard-visual">
          <img src="dashboardddd.png" alt="Dashboard interface" class="dashboard-image"/>
        </div>


        <div class="gradient-overlay"></div>

        <div class="user-friendly-text">
          <div class="user-friendly-heading">User-friendly dashboard</div>
          <div class="user-friendly-description">Upload your vocal, describe the vibe and let it handle the rest</div>
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
            <div class="heading">One click chains</div>
            <div class="description">Save big time on mixing, release your tracks faster</div>
          </div>
        </div> 


        <div class="user-friendly-section">
        <div class="user-friendly-bg"></div>


        <div class="dashboard-visual">
          <img src="dashboardddd.png" alt="Dashboard interface" class="dashboard-image"/>
        </div>


        <div class="gradient-overlay"></div>

        <div class="user-friendly-text">
          <div class="user-friendly-heading">User-friendly dashboard</div>
          <div class="user-friendly-description">Upload your vocal, describe the vibe and let it handle the rest</div>
        </div>
        </div>
        </div>

        

        
        </section>
          
          <section className='pitcure-text section'>
            Information with Screenshot
          </section>
          
          <section className='information section'>
            Specific Information
          </section>
          
          <section className='waitlist section'>
            Waitlist Form
          </section>
          
          <section className='footer section'>
            Footer Content
          </section>
        </div>
      </div>
    </div>
  );
}

export default Intro;