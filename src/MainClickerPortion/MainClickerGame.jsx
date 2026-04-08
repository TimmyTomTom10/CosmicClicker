import React, { useState } from 'react';

import './MainClickerGame.css';
import ClickablePlanetContainer from './ClickablePlanetPortion/ClickablePlanetContainer.jsx';
import InterludePurchaseContainer from './InterludePurchasesPortion/InterludePurchaseContainer.jsx';
import PlanetPurchaseContainer from './PlanetPurchasesPortion/PlanetPurchaseContainer.jsx';
import TitleContainer from './UI/TitlePortion/TitleContainer.jsx';
import CounterContainer from './CounterPortion/CounterContainer.jsx';
import AchievementsIconContainer from './UI/AchievementsPortion/AchievementsIconContainer.jsx';
import SettingsContainer from './UI/SettingsPortion/SettingsContainer.jsx';
import StatisticsContainer from './UI/StatisticsPortion/StatisticsContainer.jsx';

function MainClickerGame() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div id="gridDisplay">
      <div id="title-block-container" className="blocks">
        <TitleContainer /> 
      </div>

      <div id="counter-block-container" className="blocks">
        <CounterContainer count={count}/>
      </div> 
        
      <div id="planet-block-container" className="blocks">     
        <ClickablePlanetContainer setCount={setCount}/>
      </div>

      <div id="purchase-block-container" className="blocks">
        <PlanetPurchaseContainer/>
      </div>
      <div id="interlude-block-container" className="blocks">
        <InterludePurchaseContainer/>
      </div>
      <div id="achievements-icon-block-container" className="blocks">
        <AchievementsIconContainer/>
      </div>
      <div id="settings-icon-block-container" className="blocks">
        <SettingsContainer/>
      </div>
      <div id="statistics-icon-block-container" className="blocks">
        <StatisticsContainer/>
      </div>

    </div>
        
    </>
  );
}

export default MainClickerGame;