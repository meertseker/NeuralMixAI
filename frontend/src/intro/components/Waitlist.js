import React from 'react';
import './Waitlist.css';

const WaitlistCTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="pattern-background"></div>
        <div className="gradient-overlay"></div>

        <div className="border-container"></div>
        
        <h2 className="cta-heading">AI-driven Mix<br />for everyone.</h2>
        
        <div className="form-container">
          <div className="email-form">
            <input 
              type="email" 
              placeholder="Your email" 
              className="email-input" 
            />
            <button className="join-waitlist-btn">Join waitlist</button>
          </div>
        </div>
        
        <div className="features-row">
          <span className="feature">No credit card required</span>
          <span className="separator">·</span>
          <span className="feature">7-days free trial</span>
        </div>
      </div>
    </section>
  );
};

export default WaitlistCTA;