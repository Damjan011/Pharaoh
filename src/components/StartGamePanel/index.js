import React, { useRef, useState } from 'react';
import './style.css';

const StartGamePanel = ({ setStartGame, setCredit, setBackground }) => {
  const [inputWarning, setInputWarning] = useState(false);
  const [minInputWarning, setMinInputWarning] = useState(true);
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
              <input autoFocus={true} placeholder="0" onChange={() => {
                console.log(fundInput.current.value);
                if (fundInput.current.value > 999) {
                  fundInput.current.value = 999;
                  setInputWarning(true);
                } else if (fundInput.current.value == 0) {
                  fundInput.current.value = null;
                } else {
                  setInputWarning(false)
                }

                if (fundInput.current.value > 50) {
                  setMinInputWarning(false);
                } else {
                  setMinInputWarning(true)
                }
              }} ref={fundInput}

                max="3" type="number"></input>
              <span>&euro;</span>
            </div>
          </div>
            <div className="input-warning">
              <div className={`warning-max ${inputWarning ? 'input-warning-appear' : 'input-warning-disappear'}`}>
                <p>max. 999</p>
              </div>

              <div style={{right: '20px'}} className={`warning-max ${minInputWarning ? 'input-warning-appear' : 'input-warning-disappear'}`}>
                <p>min. 50</p>
              </div>
            </div>
        </div>
        <button disabled={minInputWarning} onClick={() => {
          setStartAppear(false);
          setTimeout(() => {
            setStartGame(false);
          }, 700);
          clickPlay();
        }
        } className={`play-button ${minInputWarning ? 'button-disabled' : ''}`}>
          PLAY
        </button>
      </div>
    </div>
  )
}

export default StartGamePanel;