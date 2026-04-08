import React, { useState } from 'react';

import './MainClickerGame.css';
import PlanetContainer from './ClickablePlanetPortion/PlanetContainer.jsx';
import InterludeContainer from './InterludePurchasesPortion/InterludeContainer.jsx';
import PlanetPurchaseContainer from './PlanetPurchasesPortion/PlanetPurchase.jsx';
import TitleCounterContainer from './UI/TitleCounterPortion/TitleCounterContainer.jsx';
import AchievementsIconContainer from './UI/AchievementsPortion/AchievementsIconContainer.jsx';
import SettingsContainer from './UI/SettingsPortion/SettingsContainer.jsx';
import StatisticsContainer from './UI/StatisticsPortion/StatisticsContainer.jsx';

function MainClickerGame() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div id="gridDisplay">
      <div id="title-container" className="blocks">
         <TitleCounterContainer count={count}/>
      </div>
        
      <div id="planet-container" className="blocks">     
        <PlanetContainer setCount={setCount}/>
      </div>

      <div id="purchase-container" className="blocks">
        <PlanetPurchaseContainer/>
      </div>
      <div id="interlude-container" className="blocks">
        <InterludeContainer/>
      </div>
      <div id="achievements-icon-container" className="blocks">
        <AchievementsIconContainer/>
      </div>
      <div id="settings-icon-container" className="blocks">
        <SettingsContainer/>
      </div>
      <div id="statistics-icon-container" className="blocks">
        <StatisticsContainer/>
      </div>

    </div>
        
    </>
  );
}

export default MainClickerGame;