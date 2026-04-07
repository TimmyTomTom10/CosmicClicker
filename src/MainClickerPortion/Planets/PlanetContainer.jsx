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


function PlanetContainer() {
  return (
  
      <img id="astroidImg" className="planetImages" src={asteroidImg} alt="Astroid" />
  );
}
export default PlanetContainer;