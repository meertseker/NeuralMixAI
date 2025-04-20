import React, { useState } from 'react';
import "./Subscriptions.css";

const Subscriptions = () => {
  const [isYearly, setIsYearly] = useState(false);

  const PLANS = [
    {
      name: "Monthly",
      price: isYearly ? "$12/mo" : "$8/mo",
      features: [
        "38 Vocal Chains",
        "Unlimimed updates",
        "18 Preset file downloads",
        "38 Detailed Vocal Analysis"
      ],
      featured: false
    },
    {
      name: "Yearly",
      price: isYearly ? "$108/yr" : "$72/yr",
      features: [
        "Unlimited Chains",
        "Unlimited Updates",
        "Unlimited Downloads",
        "Unlimited Vocal Analysis",
      ],
      featured: true
    },
    {
      name: "Business",
      price: isYearly ? "Get in touch" : "Get in touch",
      features: [
        "Everything's Possible"
      ],
      featured: false
    }
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Pricing</h2>
          <p className="pricing-subtitle">
          Mix Like a Pro for Less Than a Coffee
          </p>
        </div>

        <div className="pricing-toggle">
          <span className={!isYearly ? "active" : ""}>Individual</span>
          <button 
            className="toggle-switch"
            onClick={() => setIsYearly(!isYearly)}
          >
            <span className={`toggle-handle ${isYearly ? "yearly" : ""}`} />
          </button>
          <span className={isYearly ? "active" : ""}>Duo</span>
        </div>

        <div className="pricing-cards">
          {PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.featured ? "featured" : ""}`}
            >
              <div className="card-content">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-price">{plan.price}</p>
                
                <div className="divider" />
                
                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <svg className="check-icon" viewBox="0 0 24 24" fill="none">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="cta-button">
                  Soon
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;