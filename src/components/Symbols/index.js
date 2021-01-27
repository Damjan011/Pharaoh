import React, { useEffect, useState } from 'react';
import './style.css';
import Anubis from '../../assets/symbols/anubis.png';
import Cat from '../../assets/symbols/cat.png';
import Pyramid from '../../assets/symbols/pyramid.png';
import Ankh from '../../assets/symbols/ankh.png';
import Snake from '../../assets/symbols/snake.png';
import Jackal from '../../assets/symbols/jackal.png';
import Sarcophagus from '../../assets/symbols/sarcophagus.png';
import Scarab from '../../assets/symbols/scarab.png';
import Obelisk from '../../assets/symbols/obelisk.png';
import Ceramic from '../../assets/symbols/ceramic.png';
import Sun from '../../assets/symbols/sun.png';
import Scepter from '../../assets/symbols/scepter.png';
import Pharaoh from '../../assets/symbols/pharaoh.png';

const Symbols = ({ winTile2, winTile1, position, winPulse }) => {
  const [symbol, setSymbol] = useState('');
  const [initial, setInitial] = useState(true);
  const symbolsArray = [Anubis, Pyramid, Cat, Ankh, Jackal, Snake, Sarcophagus, Scarab, Obelisk, Ceramic, Sun, Scepter];
  const positionSetter = (pos) => {
    switch (pos) {
      case 1:
        setTimeout(() => {
          setSymbol('0');
        }, 500)
        setSymbol('-800px')
        break;
      case 2:
        setTimeout(() => {
          setSymbol('-170px')
        }, 500);
        setSymbol('-970px')
        break;
      case 3:
        setTimeout(() => {
          setSymbol('-340px');
        }, 500)
        setSymbol('-1110px');
        break;



      case 4:
        setTimeout(() => {
          setSymbol('-510px');
        }, 500)
        setSymbol('-1310px');
        break;




      case 5:
        setTimeout(() => {
          setSymbol('-680px');
        }, 500)
        setSymbol('-1480px');
        break;


      case 6:
        setTimeout(() => {
          setSymbol('-850px');
        }, 500);
        setSymbol('-1630px');
        break;



      case 7:
        setTimeout(() => {
          setSymbol('-1020px');
        }, 500);
        setSymbol('-200px');
        break;


      case 8:
        setTimeout(() => {
          setSymbol('-1190px');
        }, 500);
        setSymbol('-400px');
        break;



      case 9:
        setTimeout(() => {
          setSymbol('-1360px');
        }, 500);
        setSymbol('-600px');
        break;

      case 10:
        setTimeout(() => {
          setSymbol('-1530px');
        }, 500);
        setSymbol('-800px');
        break;

      case 11:
        setTimeout(() => {
          setSymbol('-1700px');
        }, 500);
        setSymbol('-1000px');
        break;

      case 12:
        setTimeout(() => {
          setSymbol('-1870px');
        }, 500);
        setSymbol('-1170px');
        break;
      default:
        setSymbol('0px');
    }
  }
  
  useEffect(() => {
      setInitial(true);
      if (position !== undefined) {
        setInitial(false)
      }
  }, [position]);


  useEffect(() => {
    positionSetter(position);
  }, [position]);
  return (
    <div style={{ top: `${symbol}` }} className="symbols-stripe">
      <div className="symbol-image-wrapper">
        <img src={Scepter} />
      </div>
      {
        symbolsArray.map((el, index) => {
          return (
            <div className={`symbol-image-wrapper ${winPulse && winTile2 && index + 1 === position ? 'win-animate' : ''} ${winPulse && winTile1 && index + 1 === position ? 'win-animate' : ''} ${initial && index === 0 ? 'initial' : ''} ${index + 1 === position ? 'symbol-current' : ''}`}>
              <img className="symbol-image" src={el} alt='Anubis' />
            </div>
          )
        })
      }
      <div className="symbol-image-wrapper">
        <img src={Anubis} />
      </div>
    </div>
  )
}

export default Symbols;