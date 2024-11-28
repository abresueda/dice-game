import React from "react";
import dice1 from "../assets/dice1.png";
import dice2 from "../assets/dice2.png";
import dice3 from "../assets/dice3.png";
import dice4 from "../assets/dice4.png";
import dice5 from "../assets/dice5.png";
import dice6 from "../assets/dice6.png";

const Dice = ({ dice }) => {
    const diceImages = [
        dice1,
        dice2,
        dice3,
        dice4,
        dice5,
        dice6
    ];


    return (
        <div className="dice">
            {dice.map((value, index) => (
                <img 
                key={index}
                src={diceImages[value -1]} //Zar değeri 1'den başlıyor. Diziler 0'dan başlıyor.
                alt={`Dice ${value}`}
                className="dice-img"
                />
            ))}
        </div>
    );
};

export default Dice;