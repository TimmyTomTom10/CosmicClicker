import React, { useState } from 'react';

import './index.css';
import PlanetContainer from './MainClickerPortion/Planets/PlanetContainer.jsx';
import InterludeContainer from './MainClickerPortion/InterludePurchases/InterludeContainer.jsx';
import PlanetPurchaseContainer from './MainClickerPortion/PlanetPurchases/PlanetPurchase.jsx';
import TitleCounterContainer from './MainClickerPortion/UI/TitleCounter/TitleCounterContainer.jsx';
import AchievementsIconContainer from './MainClickerPortion/UI/Achievements/AchievementsIconContainer.jsx';
import SettingsContainer from './MainClickerPortion/UI/Settings/SettingsContainer.jsx';
import StatisticsContainer from './MainClickerPortion/UI/Statistics/StatisticsContainer.jsx';

function App() {
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

export default App


//<SpaceRock increaseCount={increaseCount}/>