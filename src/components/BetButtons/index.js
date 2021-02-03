import React from 'react';
import './style.css';
import ClearSound from '../../assets/sounds/clear.wav';
import BetOneSound from '../../assets/sounds/single-coin.wav';
import BetMaxSound from '../../assets/sounds/bet-max-trim.wav';

const BetButtons = ({ setBet, bet, buttonDisabled }) => {
  const clearSound = new Audio(ClearSound);
  clearSound.volume = 1;
  const clearBetAudio = () => {
    clearSound.play();
  }

  const betOneSound = new Audio(BetOneSound);
  betOneSound.volume = 1;
  const betOneAudio = () => {
    betOneSound.play();
  }

  const betMaxSound = new Audio(BetMaxSound);
  betMaxSound.volume = 1;
  const betMaxAudio = () => {
    betMaxSound.play();
  }
  return (
    <div className="bet-buttons-wrapper">
      <div className="bet-max-wrapper">
        <button disabled={buttonDisabled || bet === 10}
          onClick={() => {
            setBet(bet + 1);
            betOneAudio();
          }} className={`bet-one-button bet-big ${buttonDisabled || bet === 10 ? 'button-disabled' : ''}`}>
          <p>BET<br />ONE</p>
        </button>
      </div>
      <div className="bet-max-wrapper">
        <button disabled={buttonDisabled || bet === 10}
          onClick={() => {
            betMaxAudio();
            setBet(10);
          }} className={`bet-one-button bet-big ${buttonDisabled || bet === 10 ? 'button-disabled' : ''}`}>
          <p>BET<br />MAX</p>
        </button>
      </div>
      <div className="bet-max-wrapper">
        <button disabled={buttonDisabled || bet === 0}
          onClick={() => {
            setBet(0);
            clearBetAudio()
          }} className={`bet-one-button bet-big clear-bet ${buttonDisabled || bet === 0 ? 'button-disabled' : ''}`}>
          <p>CLEAR<br />BET</p>
        </button>
      </div>
    </div>
  )
}

export default BetButtons;