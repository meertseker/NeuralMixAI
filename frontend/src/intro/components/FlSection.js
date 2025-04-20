// Component for the Testimonial Section
import React from 'react';
import './FlSection.css'; // You'll need to create this CSS file

const FlSection = () => {
  return (
    <section className='pitcure-text section clients-section'>
      <h2 className="headingfl">Plug & Play Presets</h2>
      <p className="subheading">FL Studio, Ableton, Logic Pro – ready-to-use mixer states in 1 download.</p>
      
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
          <p className="quote">Just drop the preset file.</p>
          <p className="author">And your chain is ready to use!</p>
        </div>
        
        {/* Purple glow effect */}
        <div className="purple-glow"></div>
      </div>
    </section>
  );
}

export default FlSection;