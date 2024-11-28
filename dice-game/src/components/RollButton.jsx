import React from "react";

const RollButton = ({ rollDice, isRolling }) => {
    return (
    <button 
    onClick={rollDice} 
    disabled={isRolling}
    className="btn">
        {isRolling ? "Rolling..." : "Roll Dice"}
    </button>
    );
};

export default RollButton;