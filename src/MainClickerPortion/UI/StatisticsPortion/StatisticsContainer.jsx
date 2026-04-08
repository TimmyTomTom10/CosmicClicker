import React from "react";

import statisticsBoardImg from "./StatisticsAssets/StatisticsBoard.png";
import './StatisticsContainer.css';



function StatisticsContainer() {
    return (
        <>
        <div id="statistics-container">
            <img id="statistics-board" src={statisticsBoardImg} alt="Statistics Board" />
        </div>
        </>
    );
}

export default StatisticsContainer;