import React from 'react';
import './style.css';

const BetButtons = () => {
  return (
    <div className="bet-buttons-wrapper">
      <div className="bet-one-wrapper">
        <div className="bet-one-label">
          <p>BET<br />ONE</p>
        </div>
        <div className="bet-one-buttons">
          <button className="bet-one-button">
            <p>+</p>
          </button>
          <button className="bet-one-button">
            <p>-</p>
          </button>
        </div>
      </div>
      <div className="bet-max-wrapper">
        <button className="bet-one-button">
          <p>BET MAX</p>
        </button>
      </div>
    </div>
  )
}

export default BetButtons;