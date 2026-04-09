import React, { useState } from 'react';

import './InterludePurchaseContainer.css';
import bronzeInterludeImg from "./InterludePurchaseAssets/BronzeInterludePurchaseAsset.png";
import silverInterludeImg from "./InterludePurchaseAssets/SilverInterludePurchaseAsset.png";
import goldInterludeImg from "./InterludePurchaseAssets/GoldInterludePurchaseAsset.png";
import diamondInterludeImg from "./InterludePurchaseAssets/DiamondInterludePurchaseAsset.png";

function InterludePurchaseContainer() {
  return (
      <>
        <div id="interludes-purchase-container">

            <div className="card-column">
              <img className="interlude-purchase-images" src={bronzeInterludeImg} />
              <span className="card-text">100</span>
            </div>


            <div className="card-column">
              <img className="interlude-purchase-images" src={silverInterludeImg} />
              <span className="card-text">100</span>
            </div>



            <div className="card-column">
              <img className="interlude-purchase-images" src={goldInterludeImg} />
              <span className="card-text">100</span>
            </div>



            <div className="card-column">
              <img className="interlude-purchase-images" src={diamondInterludeImg} />
              <span className="card-text">100</span>
            </div>
        </div>
      </>
    );
}
export default InterludePurchaseContainer;