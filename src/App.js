import React, { useEffect, useState } from 'react';
import Rail from './components/Rail';
import Baka from './assets/sounds/start.wav';
import RollSound from './assets/sounds/roll.wav';
import AmbientSound from './assets/sounds/ambient.wav';
import SoundOn from './assets/images/volume-high@3x.png';
import SoundOff from './assets/images/volume-no@3x.png';
import HorusImage from './assets/images/horus.png';
import AnubisImage from './assets/images/anubis.png';
import RaImage from './assets/images/ra.png';
import OsirisImage from './assets/images/osiris.png';
import CatLeftImage from './assets/images/cat-left.png';
import CatRightImage from './assets/images/cat-right.png';
import CashSound from './assets/sounds/cash-out.mp3';
import CoinsSound from './assets/sounds/coins-drop-big.wav';

const App = () => {
  const [background, setBackground] = useState(true);
  const [trigger, setTrigger] = useState(0);
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [position3, setPosition3] = useState(0);
  const [position4, setPosition4] = useState(0);
  const [position5, setPosition5] = useState(0);
  const [winner, setWinner] = useState(false);
  const spin = () => {
    return trigger + 1;
  }

  const startAudio = new Audio(RollSound);
  startAudio.volume = 1;

  const coinsAudio = new Audio(CoinsSound);
  coinsAudio.volume = 1;
  const cashAudio = new Audio(CashSound)
  cashAudio.volume = 1;;



  const clickAudio = () => {
    startAudio.play();
    setTimeout(() => {
      startAudio.pause();
      startAudio.currentTime = 0;
    }, 1700)
  }

  const winAudio = () => {
    coinsAudio.play();
    cashAudio.play();
    setTimeout(() => {
      coinsAudio.pause();
      coinsAudio.currentTime = 0;
      cashAudio.pause();
      cashAudio.currentTime = 0;
    }, 4000)
  }

  const Sound = ({ background }) => {
    return (
      <audio muted={!background} volume={0.1} autoPlay loop={true} src={AmbientSound}>
      </audio>
    )
  }

  useEffect(() => {
    if (position1 && position1 !== 1 && position1 === position2) {
      setTimeout(() => {
        setWinner(true);
        winAudio();
        console.log(position1)
        console.log('WIN');
      }, 1600)
    }
  })

  return (
    <>
      { winner &&
        <div className="winner-screen">
          <div className="winner-box">
            <div>
              <p>WINNER</p>
            </div>
            <button onClick={() => setWinner(false)}>
              OK
          </button>
          </div>

        </div>
      }
      <div className={`view ${winner ? 'faded' : ''}`} style={{ position: 'relative' }}>

        <Sound background={background} />
        <div className="sound-button-container">
          <div className="sound-button" onClick={() => setBackground(!background)}>
            <img className="sound-image" src={background ? SoundOn : SoundOff} />
          </div>
        </div>
        <div className="rails-container">
          <Rail changePosition={position1 => setPosition1(position1)} trigger={trigger} />
          <Rail changePosition={position2 => setPosition2(position2)} trigger={trigger} />
          <Rail changePosition={position3 => setPosition3(position3)} trigger={trigger} />
          <Rail changePosition={position4 => setPosition4(position4)} trigger={trigger} />
          <Rail changePosition={position5 => setPosition5(position5)} trigger={trigger} />
        </div>
        {/* <div style={{display: 'flex', fontSize: '44px', justifyContent: 'space-evenly', padding: '50px'}}>
        <p>{position1}</p>
        <p>{position2}</p>
        <p>{position3}</p>
        <p>{position4}</p>
        <p>{position5}</p>
      </div> */}

        <div className="credits-container">

        </div>

        <div className="action-buttons-container">
          <div className="spin-button" onClick={() => {
            console.log('clicked');
            clickAudio();
            setTrigger(spin);
          }}>SPIN</div>
        </div>

        <div className="bottom-images">
          <div className="ra-image-wrapper">
            <img src={RaImage} className="ra-image" />
          </div>
          <div className="horus-image-wrapper">
            <img src={OsirisImage} className="horus-image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
