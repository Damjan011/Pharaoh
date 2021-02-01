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
import Bastet from '../../assets/symbols/bastet.png';
import Thoth from '../../assets/symbols/thoth.png';
import Horus from '../../assets/symbols/horus.png';
import { connect } from 'react-redux';
import { isAnubis, isBastet } from '../../redux/actionCreators.js';

const SymbolsComponent = ({ winTile2, winTile1, handleAnubis, handleBastet, winTile3, position, winPulse, curSymbolState }) => {
  const [gameArray, setGameArray] = useState([{name: '', value: '', symbol: ''}]);
  const [symbol, setSymbol] = useState('');
  const [initial, setInitial] = useState(true);
  // ${initial && index === 0 ? 'initial' : ''} 
  const symbolsArray = [Bastet, Scarab, Ankh, Thoth, Jackal, Pyramid, Anubis, Snake, Obelisk, Horus, Cat, Sarcophagus];

  const symbolsNewArray = [
    { name: Bastet, value: 'high', symbol: 'bastet' },
    { name: Scarab, value: 'med', symbol: 'scarab' },
    { name: Ankh, value: 'low', symbol: 'ankh' },
    { name: Thoth, value: 'high', symbol: 'thoth' },
    { name: Jackal, value: 'med', symbol: 'jackal' },
    { name: Pyramid, value: 'low', symbol: 'pyramid' },
    { name: Anubis, value: 'high', symbol: 'anubis' },
    { name: Snake, value: 'med', symbol: 'snake' },
    { name: Obelisk, value: 'low', symbol: 'obelisk' },
    { name: Horus, value: 'high', symbol: 'horus' },
    { name: Cat, value: 'med', symbol: 'cat' },
    { name: Sarcophagus, value: 'low', symbol: 'sarcophagus' },
  ]

  const increaseArray = (arr) => {
    arr.forEach(element => {
      if (element.value === 'high') {
        arr.push(element);
      }
      if (element.value === 'med') {
        arr.push(element);
        arr.push(element);
        arr.push(element);
      }
      if (element.value === 'low') {
        arr.push(element);
        arr.push(element);
        arr.push(element);
        arr.push(element);
        arr.push(element);
        arr.push(element);
        arr.push(element);
      }
    });
    return arr;
  }

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
    handleBastet();
  }, [position]);

  useEffect(() => {
    const gameInitSymbolArray = increaseArray(symbolsNewArray);
    const randomizedGameArray = gameInitSymbolArray.sort(() => Math.random() - 0.5);
    setGameArray(randomizedGameArray);
  }, []);

  const stateChecker = () => {
    if (gameArray[position].symbol === 'anubis') {
      return handleAnubis()
    } else if (gameArray[position].symbol === 'bastet') {
      return handleBastet()
    }
  }

  return (
    <div style={{ top: `${symbol}` }} className="symbols-stripe">

      <div className="symbol-image-wrapper">
        <img src={Sarcophagus} />
      </div>
      {
        gameArray.map((el, index) => {
          return (
            <div className={`symbol-image-wrapper 
            ${el.value === 'med' ? 'medium-symbol' : ''} 
            ${el.value === 'high' ? 'high-symbol' : ''} 
            ${winPulse && winTile2 && index + 1 === position ? 'win-animate' : ''} 
            ${winPulse && winTile1 && index + 1 === position ? 'win-animate' : ''}
            ${winPulse && winTile3 && index + 1 === position ? 'win-animate' : ''}  
            ${index + 1 === position ? 'symbol-current' : ''}`}>
              <img className="symbol-image" src={el.name} alt='Anubis' />
            </div>
          )
        })
      }
      <div className="symbol-image-wrapper high-symbol">
        <img src={Bastet} />
      </div>
    </div>
  )
}

const mapStateToProps = ({ curSymbolState }) => ({
  curSymbolState
});

const mapDispatchToProps = {
  handleAnubis: isAnubis,
  handleBastet: isBastet
};

const Symbols = connect(
  mapStateToProps,
  mapDispatchToProps)(SymbolsComponent);

export default Symbols;

