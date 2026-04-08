import React, { useState } from 'react';
import './ClickablePlanetContainer.css';
import asteroidImg from "./ClickablePlanetAssets/Asteroid.png";
import plutoImg from "./ClickablePlanetAssets/Pluto.png";
import mercuryImg from "./ClickablePlanetAssets/Mercury.png";
import venusImg from "./ClickablePlanetAssets/Venus.png";
import earthImg from "./ClickablePlanetAssets/Earth.png";
import marsImg from "./ClickablePlanetAssets/Mars.png";
import jupiterImg from "./ClickablePlanetAssets/Jupiter.png";
import saturnImg from "./ClickablePlanetAssets/Saturn.png";
import uranusImg from "./ClickablePlanetAssets/Uranus.png";
import neptuneImg from "./ClickablePlanetAssets/Neptune.png";


// Planet Masses in kg
// Asteroid:  1,310,000,000,000 kg 
// Moon:      73,480,000,000,000,000,000 kg
// Pluto:     13,090,000,000,000,000,000,000 kg
// Mercury:   330,104,000,000,000,000,000,000 kg
// Mars:      641,693,000,000,000,000,000,000 kg
// Venus:     4,867,320,000,000,000,000,000,000 kg 
// Earth:     5,972,190,000,000,000,000,000,000 kg
// Uranus:    86,810,300,000,000,000,000,000,000 kg
// Neptune:   102,410,000,000,000,000,000,000,000 kg
// Saturn:    568,319,000,000,000,000,000,000,000 kg
// Jupiter:   1,898,130,000,000,000,000,000,000,000 kg
// Sun:       1,989,000,000,000,000,000,000,000,000,000 kg


// Planet Masses in kg
// Asteroid:  1,310,000 kg 
// Moon:      73,480,000,000,000 kg
// Pluto:     13,090,000,000,000,000 kg
// Mercury:   330,104,000,000,000,000 kg
// Mars:      641,693,000,000,000,000 kg
// Venus:     4,867,320,000,000,000,000 kg 
// Earth:     5,972,190,000,000,000,000 kg
// Uranus:    86,810,300,000,000,000,000 kg
// Neptune:   102,410,000,000,000,000,000 kg
// Saturn:    568,319,000,000,000,000,000 kg
// Jupiter:   1,898,130,000,000,000,000,000 kg
// Sun:       1,989,000,000,000,000,000,000,000 kg




function ClickablePlanetContainer({ setCount }) {



  const handleClick = () => {
    setCount(prev => prev + 0.1); // update state
  };


  return (
        <>
              <img id="astroidImg" className="planetImages" src={asteroidImg} alt="Astroid" 
                onClick={handleClick}
        />
        </>

    
  );
}
export default ClickablePlanetContainer;