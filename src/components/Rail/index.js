import React, { useEffect, useState } from 'react';
import './style.css';
import Symbols from '../Symbols';

const Rail = ({ trigger, winTile1, winTile2, changePosition, winPulse }) => {
  const [spinValue, setSpinValue] = useState(1);
  
  const spin = (param) => {
    if (param) {
      const randomSpin = Math.ceil(Math.random() * 12);
      return randomSpin;
    }
  }

  var min = 1;
  var max = 12;

  var lastRandom = 0;
  

  useEffect(() => {
    var curRandom = spin(trigger);
      setSpinValue(curRandom);
  }, [trigger]);

  changePosition(spinValue);
  return (
    <div className="rail">
      <Symbols winTile1={winTile1} winTile2={winTile2} winPulse={winPulse} position={spinValue} />
    </div>
  )
}

export default Rail;