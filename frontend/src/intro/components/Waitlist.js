import React from 'react';
import './Waitlist.css';

import  { useState } from 'react';

const WaitlistCTA = () => {
  
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const waitlistSubmit = async () => {
    // Input validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      setSubmitStatus('Please enter a valid email address');
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitStatus('Submitting...');
      const waitlistApiUrl = process.env.REACT_APP_WAITLIST_API;
    const response = await fetch(waitlistApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

      if (response.ok) {
        const data = await response.json(); 
        setSubmitStatus('Success! You\'ve been added to our waitlist.');
        setEmail(''); // Clear input field after successful submission
      } else {
        const errorData = await response.json();
        setSubmitStatus(`Error: ${errorData.message || 'Something went wrong. Please try again.'}`);
      }
    } catch (error) {
      console.error('Waitlist submission error:', error);
      setSubmitStatus('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="pattern-background"></div>
        <div className="gradient-overlay"></div>

        <div className="border-container"></div>
        
        <h2 className="cta-heading">Try all features free for <br />7 days.</h2>
        
        <div className="form-container">
          <div className="email-form">
            <input 
              type="email" 
              placeholder="Your email" 
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
            <button 
              className="join-waitlist-btn" 
              onClick={waitlistSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Join waitlist'}
            </button>
          </div>
          {submitStatus && (
            <div className={`submit-status ${submitStatus.includes('Success') ? 'success' : 'error'}`}>
              {submitStatus}
            </div>
          )}
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