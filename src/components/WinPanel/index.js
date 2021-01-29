import React from 'react';
import './style.css';

const WinPanel = ({setWinner}) => {
  return (
    <div className="winner-screen">
      <div className="winner-box">
        <div className="winner-text-content">
          <div className="winner-text">
            <p>WINNER!</p>
          </div>
          <div className="credits-area">
            <p>Credits: +50</p>
          </div>
        </div>
        <button className="spin-button"
          onClick={() => setWinner(false)}>
          OK
          </button>
      </div>
    </div>
  )
}

export default WinPanel;