import React, { useState } from "react";
import Slider from "./Slider"
import "./DashboardSettings.css";

const feelings = [
  { name: "Angriness", color: "error" },
  { name: "Happiness", color: "warning" },
  { name: "Euphoric", color: "success" },
  { name: "Calmness", color: "info" },
  { name: "Excitement", color: "secondary" },
];

const effects = [
  { name: "Echo", color: "info" },
  { name: "Reverb", color: "warning" },
  { name: "Distortion", color: "error" },
];

const DashboardSettings = () => {
  const [showFeelings, setShowFeelings] = useState(false);
  const [showEffects, setShowEffects] = useState(false);

  const toggleFeelings = () => setShowFeelings(prev => !prev);
  const toggleEffects = () => setShowEffects(prev => !prev);

  return (
    <div className="main-dashboard">
      <div className="dashboard-settings-component">
        <h1>Plugins <span className="optional">(Optional)</span></h1>
        <div className="content-container">
          <img src="plugins.jpeg" alt="Plugins" />
          <div className="settings-section">
            <div className="feelings-container">
              <h2>
                Waves Plugins
                <button className="toggle-btn" onClick={toggleFeelings}>
                  {showFeelings ? "Hide" : "Show"}
                </button>
              </h2>
              {showFeelings && (
                <div className="feelings-list">
                  {feelings.map((feeling) => (
                    <div key={feeling.name} className="slider-row">
                      <span className="feeling-label">{feeling.name}</span>
                      <Slider
                        color="secondary"
                        defaultValue={0}  // Default value will be 30, but it will never exceed maxLimit
                        ariaLabel="slider"
                        maxLimit={40} // Set the custom max limit to 97
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="effects-container">
              <h2>
                FL Studio Plugins
                <button className="toggle-btn" onClick={toggleEffects}>
                  {showEffects ? "Hide" : "Show"}
                </button>
              </h2>
              {showEffects && (
                <div className="effects-list">
                  {effects.map((effect) => (
                    <div key={effect.name} className="slider-row">
                      <span className="effect-label">{effect.name}</span>
                      <Slider
                        aria-label={effect.name}
                        defaultValue={0}
                        color={effect.color}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSettings;