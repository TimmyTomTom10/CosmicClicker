import React, { useState } from 'react';

import './AchievementsIconContainer.css';
import achievementIcon from "./AchievementAssets/AchievementIcon.png";
import achievementIconActive from "./AchievementAssets/AchievementIconActive.png";

function AchievementsIconContainer() {
    return (
        <>
        <div id="achievements-icon-container">
            <img id="achievement-icon" 
                src={achievementIcon} 
                alt="Achievement Icon"/>
        </div>
        </>
    );
}

export default AchievementsIconContainer;