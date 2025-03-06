import React, { useState } from "react";
import { Slider } from "@mui/material";
import { styled } from "@mui/system";


// Styled Slider component
const CustomSlider = styled(Slider)(({ theme, color }) => ({
    
  width: '100%', // Makes the slider take the full available width of its container

  "& .MuiSlider-rail": {
    background: "linear-gradient(55deg,rgb(21, 30, 164),rgb(238, 0, 255))",
  },
  "& .MuiSlider-track": {
    background: "linear-gradient(45deg, #ff6f61, #ffcc00)",
  },

  // Custom thumb styling
  "& .MuiSlider-thumb": {
    margin: "0 6px",
    backgroundColor: color || theme.palette.primary.main,
    width: 12, // Normal thumb size
    height: 12,
    borderRadius: "50%", // Make thumb circular
    transition: "width 0.2s, height 0.2s,",
    position: "relative", // Make sure it's positioned correctly
    zIndex: 1, // Ensures the thumb stays on top of the rail and track
    boxShadow: "none",
     

    // Thumb active effect when clicked
    "&:active": {
      backgroundColor: "#ffcc00",
      width: 10, // Thumb size on active
      height: 10, // Thumb size on active
      boxShadow: "none",  
    },
    "&:hover":{
        transition:"none",
        boxShadow: "none",
        backgroundColor: "#ffcc00",  
    },
    "&:focus": {
        outline: "none", // Remove default focus outline
        boxShadow: "none", // Keep the shadow constant on focus
        backgroundColor: "#ffcc00",
      },
      "&:focus-visible": {
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
        backgroundColor: "#ffcc00" // Keep shadow constant on keyboard focus
      },
    
      "&.Mui-disabled": {
        backgroundColor: "#ffcc00", // Disabled thumb color
        cursor: "not-allowed", // Disabled cursor style
      },
  },
}));

// CustomSliderComponent with value clamping
const CustomSliderComponent = ({ color, defaultValue, ariaLabel, maxLimit }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event, newValue) => {
    // Limit the thumb value to prevent going beyond maxLimit - 1
    const clampedValue = Math.min(newValue, maxLimit - 1); // Thumb stops before reaching max
    setValue(clampedValue);
  };

  return (
    <CustomSlider
      value={value}
      onChange={handleChange}
      aria-labelledby={ariaLabel}
      defaultValue={defaultValue}
      color="secondary"
      max={maxLimit} // Set max limit
    />
  );
};

export default CustomSliderComponent;
