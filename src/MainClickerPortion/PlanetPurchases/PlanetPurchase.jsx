import React, { useState } from 'react';
import './PlanetPurchase.css';
import asteroidPurchaseImg from "./PlanetPurchaseImages/AsteroidPurchase.png";
import plutoPurchaseImg from "./PlanetPurchaseImages/PlutoPurchase.png";
import mercuryPurchaseImg from "./PlanetPurchaseImages/MercuryPurchase.png";
import venusPurchaseImg from "./PlanetPurchaseImages/VenusPurchase.png";
import earthPurchaseImg from "./PlanetPurchaseImages/EarthPurchase.png";
import marsPurchaseImg from "./PlanetPurchaseImages/MarsPurchase.png";
import jupiterPurchaseImg from "./PlanetPurchaseImages/JupiterPurchase.png";
import saturnPurchaseImg from "./PlanetPurchaseImages/SaturnPurchase.png";
import uranusPurchaseImg from "./PlanetPurchaseImages/UranusPurchase.png";
import neptunePurchaseImg from "./PlanetPurchaseImages/NeptunePurchase.png";
import moonPurchaseImg from "./PlanetPurchaseImages/MoonPurchase.png";
import sunPurchaseImg from "./PlanetPurchaseImages/SunPurchase.png";

function PlanetPurchaseContainer() {
    return (
        <>
            <div id="planet-purchase-container">
                <img className="planet-purchase-images" src={asteroidPurchaseImg} alt="Asteroid" />
                <img className="planet-purchase-images" src={moonPurchaseImg} alt="Moon" />
                <img className="planet-purchase-images" src={plutoPurchaseImg} alt="Pluto" />
                <img className="planet-purchase-images" src={mercuryPurchaseImg} alt="Mercury" />
                <img className="planet-purchase-images" src={marsPurchaseImg} alt="Mars" />
                <img className="planet-purchase-images" src={venusPurchaseImg} alt="Venus" />
                <img className="planet-purchase-images" src={earthPurchaseImg} alt="Earth" />
                <img className="planet-purchase-images" src={uranusPurchaseImg} alt="Uranus" />
                <img className="planet-purchase-images" src={neptunePurchaseImg} alt="Neptune" />
                <img className="planet-purchase-images" src={saturnPurchaseImg} alt="Saturn" />
                <img className="planet-purchase-images" src={jupiterPurchaseImg} alt="Jupiter" />
                <img className="planet-purchase-images" src={sunPurchaseImg} alt="Sun" />
                
            </div>
        </>
    );
}
export default PlanetPurchaseContainer;