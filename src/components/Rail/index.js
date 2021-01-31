import React, { useEffect, useState } from 'react';
import './style.css';
import Symbols from '../Symbols';

const Rail = ({ trigger, winTile1, winTile2, winTile3, changePosition, changePositionTop, winPulse }) => {
  const [spinValue, setSpinValue] = useState(1);
  const spin = (param) => {
    if (param) {
      const randomSpin = Math.ceil(Math.random() * 12);
      return randomSpin;
    }
  }

  useEffect(() => {
    setSpinValue(spin(trigger));
    // if (trigger !== 0) {
    //   if (spinValue + 6 >= 12) {
    //   setSpinValue(spinValue - 2);
    //   } else {
    //     setSpinValue(spinValue + 2)
    //   }
    //   setTimeout(() => {
    //     setSpinValue(spin(trigger));
    //   }, 600);
    // } else {
    //   setSpinValue(spin(trigger));
    // }
  }, [trigger]);

  changePosition(spinValue);

  changePositionTop(spinValue - 1);
  return (
    <div className="rail">
      <Symbols winTile1={winTile1} winTile2={winTile2} winTile3={winTile3} winPulse={winPulse} position={spinValue} />
    </div>
  )
}

export default Rail;