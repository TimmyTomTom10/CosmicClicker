import React, { useState } from 'react';

import './AchievementsContainer.css';
import achievementIcon from "./AchievementIcon.png";

function AchievementsIconContainer() {
    return (
        <>
        <div id="achievements-container">
            <img className="achievement-icons" src={achievementIcon} alt="Achievement Icon" />
        </div>
        </>
    );
}

export default AchievementsIconContainer;