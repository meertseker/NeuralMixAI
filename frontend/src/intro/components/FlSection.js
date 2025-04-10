// Component for the Testimonial Section
import React from 'react';
import './FlSection.css'; // You'll need to create this CSS file

const FlSection = () => {
  return (
    <section className='pitcure-text section clients-section'>
      <h2 className="headingfl">Use Chains instantly in your DAW</h2>
      <p className="subheading">Saucy AI provides mixer preset files for Ableton, Fl Studio and Logic Pro</p>
      
      <div className="testimonial-container">
        {/* Grid lines */}
        <div className="grid-line horizontal-line-1"></div>
        <div className="grid-line horizontal-line-2"></div>
        <div className="grid-line vertical-line-1"></div>
        <div className="grid-line vertical-line-2"></div>
        
        {/* Avatar */}
        <div className="avatar">
          <img src="/flgif.gif" alt="Producer testimonial" />
        </div>
        
        {/* Testimonial */}
        <div className="testimonial-content">
          <p className="quote">Just download the preset file, and drop it into your desired DAW</p>
          <p className="author">Your chain is ready to use instantly!</p>
        </div>
        
        {/* Purple glow effect */}
        <div className="purple-glow"></div>
      </div>
    </section>
  );
}

export default FlSection;