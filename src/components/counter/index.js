import React, { useState } from "react";
import "./style.css";

export const CounterComponent = () => {
    const [count, setCount] = useState(0);

    return <div id="qlik-counter">
        <span id="qlik-counter-text">{count}</span>
        <div id="qlik-button-container">
            <button className="qlik-counter-button" onClick={_ => setCount(count + 1)}>Increment</button>
            <button className="qlik-counter-button" onClick={_ => setCount(count - 1)}>Decrement</button>
        </div>
    </div>;
};
