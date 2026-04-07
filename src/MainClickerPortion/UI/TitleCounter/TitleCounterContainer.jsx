import React, { useState } from 'react';

import './TitleCounterContainer.css';
import spaceClickerTitleImg from "./SpaceClickerTitle.png";
import cosmicClickerTitleImg from "./CosmicClickerTitle.png";

function TitleCounterContainer() {
    return (
        <>
        <div id="title-counter-container">
            <img id="space-clicker-title" src={spaceClickerTitleImg} alt="Space Clicker Title" />
            <span id="click-count">70000000</span>
        </div>
        </>
    );
}

export default TitleCounterContainer;