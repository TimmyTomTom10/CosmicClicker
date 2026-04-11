import React, { useState } from 'react';

import './SettingsContainer.css';
import settingsBoardImg from "./SettingsAssets/SettingsBoard.png";
import gear from "./SettingsAssets/SettingsGear.png";
import settingsBoardNoGear from "./SettingsAssets/SettingsGear.png";

function SettingsContainer() {
    return (
        <>
        <div id="settings-container">
            <img id="settings-board" src={settingsBoardImg} alt="Settings Board" />
            {/* <img id="gear" src={gear} alt="Gear" /> */}
        </div>        
        </>
    );
}

export default SettingsContainer;