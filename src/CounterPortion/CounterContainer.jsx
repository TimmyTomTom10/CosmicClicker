import React, { useState } from 'react';

import './CounterContainer.css';





function CounterContainer({ count }) {





    return (
        <>
        <div id="counter-container">
            <span id="click-count">{count.toFixed(1)} kg</span>
        </div>
        </>
    );
}





export default CounterContainer;