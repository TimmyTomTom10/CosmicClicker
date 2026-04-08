import React, { useState } from 'react';

import './InterludePurchaseContainer.css';
import bronzeInterludeImg from "./InterludePurchaseAssets/BronzeInterlude.png";
import silverInterludeImg from "./InterludePurchaseAssets/SilverInterlude.png";
import goldInterludeImg from "./InterludePurchaseAssets/GoldInterlude.png";
import diamondInterludeImg from "./InterludePurchaseAssets/DiamondInterlude.png";

function InterludePurchaseContainer() {
    return (
        <>
<div id="interlude-purchase-container">
  <div className="item">
    <div className="card">
      <img className="interlude-purchase-images" src={bronzeInterludeImg} />
      <span className="card-text">10</span>
    </div>
  </div>

  <div className="item">
    <div className="card">
      <img className="interlude-purchase-images" src={silverInterludeImg} />
      <span className="card-text">1000</span>
    </div>
  </div>

  <div className="item">
    <div className="card">
      <img className="interlude-purchase-images" src={goldInterludeImg} />
      <span className="card-text">10000</span>
    </div>
  </div>

  <div className="item">
    <div className="card">
      <img className="interlude-purchase-images" src={diamondInterludeImg} />
      <span className="card-text">1000000</span>
    </div>
  </div>
</div>
        </>
    );
}
export default InterludePurchaseContainer;