import React, { useState } from 'react';

import './TitleContainer.css';
import spaceClickerTitleImg from "./SpaceClickerTitle.png";
import cosmicClickerTitleImg from "./CosmicClickerTitle.png";




function TitleContainer() {





    return (
        <>
        <div id="title-container">
            <img id="space-clicker-title" src={spaceClickerTitleImg} alt="Space Clicker Title" />
        </div>
        </>
    );
}





export default TitleContainer;