import React, { useState } from 'react';

import './MainClickerGame.css';
import PlanetContainer from './Planets/PlanetContainer.jsx';
import InterludeContainer from './InterludePurchases/InterludeContainer.jsx';
import PlanetPurchaseContainer from './PlanetPurchases/PlanetPurchase.jsx';
import TitleCounterContainer from './UI/TitleCounter/TitleCounterContainer.jsx';
import AchievementsIconContainer from './UI/Achievements/AchievementsIconContainer.jsx';
import SettingsContainer from './UI/Settings/SettingsContainer.jsx';
import StatisticsContainer from './UI/Statistics/StatisticsContainer.jsx';

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