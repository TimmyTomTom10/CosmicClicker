import React, { useState } from 'react';

import './InterludeContainer.css';
import bronzeInterludeImg from "./InterludePurchaseImages/BronzeInterlude.png";
import silverInterludeImg from "./InterludePurchaseImages/SilverInterlude.png";
import goldInterludeImg from "./InterludePurchaseImages/GoldInterlude.png";
import diamondInterludeImg from "./InterludePurchaseImages/DiamondInterlude.png";

function InterludeContainer() {
    return (
        <>
<div id="interlude-purchase-container">
  <div className="item">
    <div className="card">
      <img className="interlude-purchase-images" src={bronzeInterludeImg} />
      <span className="card-text">Bronze</span>
    </div>
  </div>

  <div className="item">
    <div className="card">
      <img className="interlude-purchase-images" src={silverInterludeImg} />
      <span className="card-text">Silver</span>
    </div>
  </div>

  <div className="item">
    <div className="card">
      <img className="interlude-purchase-images" src={goldInterludeImg} />
      <span className="card-text">Gold</span>
    </div>
  </div>

  <div className="item">
    <div className="card">
      <img className="interlude-purchase-images" src={diamondInterludeImg} />
      <span className="card-text">Diamond</span>
    </div>
  </div>
</div>
        </>
    );
}
export default InterludeContainer;