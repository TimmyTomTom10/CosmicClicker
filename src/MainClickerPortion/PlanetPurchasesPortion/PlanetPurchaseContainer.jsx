import React, { useState } from 'react';
import './PlanetPurchaseContainer.css';
import asteroidPurchaseImg from "./PlanetPurchaseAssets/AsteroidPurchase.png";
import plutoPurchaseImg from "./PlanetPurchaseAssets/PlutoPurchase.png";
import mercuryPurchaseImg from "./PlanetPurchaseAssets/MercuryPurchase.png";
import venusPurchaseImg from "./PlanetPurchaseAssets/VenusPurchase.png";
import earthPurchaseImg from "./PlanetPurchaseAssets/EarthPurchase.png";
import marsPurchaseImg from "./PlanetPurchaseAssets/MarsPurchase.png";
import jupiterPurchaseImg from "./PlanetPurchaseAssets/JupiterPurchase.png";
import saturnPurchaseImg from "./PlanetPurchaseAssets/SaturnPurchase.png";
import uranusPurchaseImg from "./PlanetPurchaseAssets/UranusPurchase.png";
import neptunePurchaseImg from "./PlanetPurchaseAssets/NeptunePurchase.png";
import moonPurchaseImg from "./PlanetPurchaseAssets/MoonPurchase.png";
import sunPurchaseImg from "./PlanetPurchaseAssets/SunPurchase.png";

function PlanetPurchaseContainer() {
        return (
        <>
        <div id="planet-purchase-container">
                <div className="planet-card">
                        <div className="test-card">
                                <img className="planet-purchase-images" src={asteroidPurchaseImg} alt="Asteroid" />
                                <span className="purchase-num-of-items">00</span>
                                <span className="purchase-item-cost">1000</span>
                        </div>
                </div>

                <div className="planet-card">
                        <div className="test-card">
                                <img className="planet-purchase-images" src={moonPurchaseImg} alt="Moon" />
                                <span className="purchase-num-of-items">00</span>
                                <span className="purchase-item-cost">1000</span>
                        </div>
                </div>
                <div className="planet-card">
                        <div className="test-card">
                                <img className="planet-purchase-images" src={plutoPurchaseImg} alt="Pluto" />
                                <span className="purchase-num-of-items">00</span>
                                <span className="purchase-item-cost">1000</span>
                        </div>
                </div>
                <div className="planet-card">
                        <div className="test-card">
                                <img className="planet-purchase-images" src={mercuryPurchaseImg} alt="Mercury" />
                                <span className="purchase-num-of-items">00</span>
                                <span className="purchase-item-cost">1000</span>
                        </div>
                </div>
                <div className="planet-card">
                        <div className="test-card">
                                <img className="planet-purchase-images" src={marsPurchaseImg} alt="Mars" />
                                <span className="purchase-num-of-items">00</span>
                                <span className="purchase-item-cost">1000</span>
                        </div>
                </div>
                <div className="planet-card">
                        <div className="test-card">
                                <img className="planet-purchase-images" src={venusPurchaseImg} alt="Venus" />
                                <span className="purchase-num-of-items">00</span>
                                <span className="purchase-item-cost">1000</span>
                        </div>
                </div>
                <div className="planet-card">
                        <div className="test-card">
                                <img className="planet-purchase-images" src={earthPurchaseImg} alt="Earth" />
                                <span className="purchase-num-of-items">00</span>
                                <span className="purchase-item-cost">1000</span>
                        </div>
                </div>
                <div className="planet-card">
                        <div className="test-card">
                                <img className="planet-purchase-images" src={uranusPurchaseImg} alt="Uranus" />
                                <span className="purchase-num-of-items">00</span>
                                <span className="purchase-item-cost">1000</span>
                        </div>
                </div>
                <div className="planet-card">
                        <div className="test-card">
                                <img className="planet-purchase-images" src={neptunePurchaseImg} alt="Neptune" />
                                <span className="purchase-num-of-items">00</span>
                                <span className="purchase-item-cost">1000</span>
                        </div>
                </div>
                <div className="planet-card">
                        <div className="test-card">
                                <img className="planet-purchase-images" src={saturnPurchaseImg} alt="Saturn" />
                                <span className="purchase-num-of-items">00</span>
                                <span className="purchase-item-cost">1000</span>
                        </div>
                </div>
                <div className="planet-card">
                        <div className="test-card">
                                <img className="planet-purchase-images" src={jupiterPurchaseImg} alt="Jupiter" />
                                <span className="purchase-num-of-items">00</span>
                                <span className="purchase-item-cost">1000</span>
                        </div>
                </div>
                <div className="planet-card">
                        <div className="test-card">
                                <img className="planet-purchase-images" src={sunPurchaseImg} alt="Sun" />
                                <span className="purchase-num-of-items">00</span>
                                <span className="purchase-item-cost">1000</span>
                        </div>
                </div> 

                


                
        </div>
        </>
);
}
export default PlanetPurchaseContainer;