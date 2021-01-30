import React, { useRef, useState } from 'react';
import './style.css';

const StartGamePanel = ({ setStartGame, setCredit, setBackground }) => {
  const [startAppear, setStartAppear] = useState(true);
  const fundInput = useRef(null);
  const clickPlay = () => {
    setCredit(fundInput.current.value);
    setTimeout(() => {
      setBackground(true);
    }, 200);
  }

  return (
    <div className="start-game-panel">
      <div className={`start-game-box ${startAppear ? 'start-game-appear' : 'start-game-disappear'}`}>
        <div className="start-text-content">
          <div className="welcome-title">
            <p>WELCOME</p>
          </div>
          <div className="welcome-text">
            <p>This is a 5x3 slot game. Paytables include horizontal signs of two (2) and more being the same.
            Gods are high symbols, animals are medium and objects are low (see legend on the top left). Bet One button increases the bet by one, Bet Max sets it to 10 which is the maximum, Clear Bet sets it to zero.
            You can't spin without a bet.
            </p>
          </div>
          <div className="funds-area">
            <div className="funds-title">
              <p>Please enter your funds:</p>
            </div>
            <div className="funds-bar">
              <input ref={fundInput} pattern="\d*" maxlength="3"></input>
              <span>$</span>
            </div>
          </div>
        </div>
        <button onClick={() => {
          setStartAppear(false);
          setTimeout(() => {
            setStartGame(false);
          }, 700);
          clickPlay();
        }
        } className="play-button">
          PLAY
        </button>
      </div>
    </div>
  )
}

export default StartGamePanel;