import React, { useEffect, useState } from 'react';
import './style.css';
import Symbols from '../Symbols';

const Rail = ({ trigger, changePosition }) => {
  const [spinValue, setSpinValue] = useState(1);
  var prevRandom = 0;
  const spin = (param) => {
    if (param) {
      const randomSpin = Math.ceil(Math.random() * 12);
      return randomSpin;
    }
  }

  var curRandom = spin(trigger)

  useEffect(() => {
    if (prevRandom !== curRandom) {
      setSpinValue(curRandom);
      prevRandom = curRandom;
    } else {
      while(prevRandom === curRandom) {
        curRandom = Math.ceil(Math.random() * 12);
      }
      setSpinValue(curRandom);
      prevRandom = curRandom;
    }
  }, [trigger]);

  changePosition(spinValue);
  return (
    <div className="rail">
      <Symbols position={spinValue} />
    </div>
  )
}

export default Rail;