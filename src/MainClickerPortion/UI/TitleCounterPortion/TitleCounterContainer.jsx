import React, { useState } from 'react';

import './TitleCounterContainer.css';
import spaceClickerTitleImg from "./SpaceClickerTitle.png";
import cosmicClickerTitleImg from "./CosmicClickerTitle.png";




function TitleCounterContainer({ count}) {

    



    return (
        <>
        <div id="title-counter-container">
            <img id="space-clicker-title" src={spaceClickerTitleImg} alt="Space Clicker Title" />







            <span id="click-count">{count.toFixed(1)} kg</span>
        </div>
        </>
    );
}





export default TitleCounterContainer;