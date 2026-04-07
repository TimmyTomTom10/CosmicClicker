import React, { useState } from 'react';

import './SettingsContainer.css';
import settingsBoardImg from "./SettingsBoard.png";

function SettingsContainer() {
    return (
        <>
        <div id="settings-container">
            <img id="settings-board" src={settingsBoardImg} alt="Settings Board" />
        </div>        
        </>
    );
}

export default SettingsContainer;