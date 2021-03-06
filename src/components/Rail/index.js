import React, { useEffect, useState } from 'react';
import './style.css';
import Symbols from '../Symbols';

const Rail = ({ trigger, winTile1, winTile2, winTile3, winTile4, winTile5, changePosition, winPulse }) => {
  const [spinValue, setSpinValue] = useState(1);
  const spin = (param) => {
    if (param) {
      const randomSpin = Math.ceil(Math.random() * 11 + 1);
      return randomSpin;
    }
  }

  useEffect(() => {
    setSpinValue(spin(trigger));
  }, [trigger]);

  changePosition(spinValue);

  return (
    <div className="rail">
      <Symbols winTile1={winTile1} winTile2={winTile2} winTile3={winTile3}
        winTile4={winTile4} winTile5={winTile5}
        winPulse={winPulse} position={spinValue} />
    </div>
  )
}

export default Rail;