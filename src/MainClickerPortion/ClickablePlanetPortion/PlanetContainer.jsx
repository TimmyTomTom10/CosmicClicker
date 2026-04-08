import React, { useState } from 'react';
import './PlanetContainer.css';
import asteroidImg from "./PlanetImages/Asteroid.png";
import plutoImg from "./PlanetImages/Pluto.png";
import mercuryImg from "./PlanetImages/Mercury.png";
import venusImg from "./PlanetImages/Venus.png";
import earthImg from "./PlanetImages/Earth.png";
import marsImg from "./PlanetImages/Mars.png";
import jupiterImg from "./PlanetImages/Jupiter.png";
import saturnImg from "./PlanetImages/Saturn.png";
import uranusImg from "./PlanetImages/Uranus.png";
import neptuneImg from "./PlanetImages/Neptune.png";


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




function PlanetContainer({ setCount }) {



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
export default PlanetContainer;