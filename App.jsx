import { useState } from 'react';
import './App.css';

function App() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [showGame, setShowGame] = useState(false);
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [message, setMessage] = useState('');
  const [rolling, setRolling] = useState(false);

  function handleStart() {
    if (name1 !== "" && name2 !== "") {
      setShowGame(true);
    } else {
      alert("Please enter both names.");
    }
  }

  const handleRoll = () => {
    setRolling(true);

    setTimeout(() => {
      const roll1 = Math.floor(Math.random() * 6) + 1;
      const roll2 = Math.floor(Math.random() * 6) + 1;
      setDice1(roll1);
      setDice2(roll2);

      if (roll1 > roll2) {
        setMessage(`${name1} wins!`);
      } else if (roll2 > roll1) {
        setMessage(`${name2} wins!`);
      } else {
        setMessage("It's a draw!");
      }

      setRolling(false);
    }, 600);
  };

  return (
    <div className="container">
      {!showGame ? (
        <>
          <h1>Enter the Player Names</h1>
          <input
            type="text"
            placeholder="Enter Player1 Name"
            onChange={(e) => setName1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Player2 Name"
            onChange={(e) => setName2(e.target.value)}
          />
          <button className="btn" onClick={handleStart}>
            Start Game
          </button>
        </>
      ) : (
        <>
          <h1>Dice Game</h1>
          <h3>{name1} VS {name2}</h3>

          <div className="dice-box">
            <div className={`dice ${rolling ? 'rolling' : ''}`}>{dice1}</div>
            <div className={`dice ${rolling ? 'rolling' : ''}`}>{dice2}</div>
          </div>

          <button onClick={handleRoll}>Roll Dice</button>
          <p>{message}</p>
        </>
      )}
    </div>
  );
}

export default App;
