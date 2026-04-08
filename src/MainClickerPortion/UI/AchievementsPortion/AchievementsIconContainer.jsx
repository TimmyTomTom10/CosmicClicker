import React, { useState } from 'react';

import './AchievementsContainer.css';
import achievementIcon from "./AchievementAssets/AchievementIcon.png";
import achievementIconActive from "./AchievementAssets/AchievementIconActive.png";

function AchievementsIconContainer() {
    return (
        <>
        <div id="achievements-container">
            <img id="achievement-icon" 
                src={achievementIcon} 
                alt="Achievement Icon"/>
        </div>
        </>
    );
}

export default AchievementsIconContainer;