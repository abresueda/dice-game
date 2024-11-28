import React from "react";

const ScoreBoard = ({ score, player1Name }) => {
    return (
    <div className="score-board">
        <h3>Score</h3>
        <p>{`${player1Name} 1: ${score.player1}`}</p>
        <p>Player 2: {score.player2}</p>
        <p>Draw: {score.draw}</p>
    </div>
    )
};

export default ScoreBoard;