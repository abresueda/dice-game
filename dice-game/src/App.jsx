import { useState } from 'react'
import './App.css'
import ScoreBoard from './components/ScoreBoard';
import Dice from './components/Dice';
import RollButton from './components/RollButton';

function App() {

  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player1Dice, setPlayer1Dice] = useState(1); 
  const [player2Dice, setPlayer2Dice] = useState(1);
  const [winner, setWinner] = useState("");
  const [isRolling, setIsRolling] = useState(false);
  const [score, setScore] = useState({ player1: 0, player2: 0, draw: 0});

  const rollDice = () => {
    setIsRolling(true);
    setWinner("");

    handleRoll(); //Animasyonu çalıştırmak için.
    
    let rollingInterval = setInterval(() => {
      setPlayer1Dice(Math.ceil(Math.random() * 6));
      setPlayer2Dice(Math.ceil(Math.random() * 6));
    }, 100);

    setTimeout(() => {
      clearInterval(rollingInterval);

      const finalPlayer1Dice = Math.ceil(Math.random() * 6);
      const finalPlayer2Dice = Math.ceil(Math.random() * 6);

      setPlayer1Dice(finalPlayer1Dice);
      setPlayer2Dice(finalPlayer2Dice);

      if (finalPlayer1Dice > finalPlayer2Dice) {
        setWinner(`${player1Name} Wins!`);
        setScore((prev) => ({...prev, player1: prev.player1 + 1}));
      } else if (finalPlayer1Dice < finalPlayer2Dice) {
        setWinner("Player 2 Wins!");
        setScore((prev) => ({ ...prev, player2: prev.player2 + 1}));
      } else {
        setWinner("It's a Draw!");
        setScore((prev) => ({ ...prev, draw: prev.draw + 1}));
      }

      setIsRolling(false);
    }, 3000);
  }

  //Zarlara animasyon eklemek için flip sınıfını ekleyip kaldırır.
  const handleRoll = () => {
    const diceImg = document.querySelectorAll(".dice-img");
    diceImg.forEach((img) => img.classList.add("flip"));

    setTimeout(() => {
        diceImg.forEach((img) => img.classList.remove("flip"));
    }, 800);
  };

  return (
    <>
    <div className='app'>
      <h1>DICE GAME</h1>

      {/* Skor Tablosu */}
      <ScoreBoard score={score} player1Name={player1Name}/>

      {/* Sonuç*/}
      <h2>{winner}</h2>

      {/*Player 1 Name Update */}  
      <div className='players'>
        <input 
        type="text"
        value={player1Name}
        onChange={(e) => setPlayer1Name(e.target.value)}
        placeholder='Enter your name'
        disabled={isRolling} 
        className='input'
        />

        <input type="text"
        placeholder='Player 2'
        readOnly 
        className='input2'/>
      </div>

      {/* Zarlar */}
      <Dice dice={[player1Dice, player2Dice]}/>

      {/* Zar Atma Butonu */}
      <RollButton rollDice={rollDice} isRolling={isRolling} />
    </div>
    </>
  )
}

export default App
