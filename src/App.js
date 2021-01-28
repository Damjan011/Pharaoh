import React, { useEffect, useState } from 'react';
import Rail from './components/Rail';
import LeverSound from './assets/sounds/start.wav';
import RollSound from './assets/sounds/roll.wav';
import AmbientSound from './assets/sounds/ambient.wav';
import SoundOn from './assets/images/volume-high@3x.png';
import SoundOff from './assets/images/volume-no@3x.png';
import RaImage from './assets/images/ra.png';
import OsirisImage from './assets/images/osiris.png';
import CatLeftImage from './assets/images/cat-left.png';
import CatRightImage from './assets/images/cat-right.png';
import CashSound from './assets/sounds/cash-out.mp3';
import CoinsSound from './assets/sounds/coins-drop-big.wav';
import CoinsDropAudio from './assets/sounds/coins-drop.wav';
import BetButtons from './components/BetButtons';

const App = () => {
  const [background, setBackground] = useState(true);
  const [trigger, setTrigger] = useState(0);
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [position3, setPosition3] = useState(0);
  const [position4, setPosition4] = useState(0);
  const [position5, setPosition5] = useState(0);
  const [winner, setWinner] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [credit, setCredit] = useState(100);
  const [bet, setBet] = useState(0);
  const [gameInit, setGameInit] = useState(false);
  const [winPulse, setWinPulse] = useState(true);

  const [winTile1, setWinTile1] = useState(false);
  const [winTile2, setWinTile2] = useState(false);

  const spin = () => {
    return trigger + 1;
  }

  const startAudio = new Audio(RollSound);
  startAudio.volume = 1;

  const leverAudio = new Audio(LeverSound);
  leverAudio.volume = 1;

  const coinsAudio = new Audio(CoinsSound);
  coinsAudio.volume = 1;
  const cashAudio = new Audio(CashSound)
  cashAudio.volume = 1;

  const coinsDropAudio = new Audio(CoinsDropAudio);
  coinsDropAudio.volume = 1;

  const clickAudio = () => {
    startAudio.play();
    leverAudio.play();
    setTimeout(() => {
      startAudio.pause();
      startAudio.currentTime = 0;
      leverAudio.pause();
      leverAudio.currentTime = 0;
    }, 1700)
  }

  const winAudio = () => {
    coinsAudio.play();
    cashAudio.play();
    coinsDropAudio.play();
    setTimeout(() => {
      coinsAudio.pause();
      coinsAudio.currentTime = 0;
      cashAudio.pause();
      cashAudio.currentTime = 0;
      coinsDropAudio.pause();
      coinsDropAudio.currentTime = 0;
    }, 4000)
  }

  const Sound = ({ background }) => {
    return (
      <audio muted={!background} volume={0.1} autoPlay loop={true} src={AmbientSound}>
      </audio>
    )
  }

  useEffect(() => {
    if (gameInit) {
      if (winTile1) {
        setWinTile1(false);
      }
      if (winTile2) {
        setWinTile2(false)
      }
      if (position1 && position1 === position2 || position1 === 3) {
        setTimeout(() => {
          //setWinner(true);
          setWinPulse(true);

          setWinTile1(true)
          setWinTile2(true)
          winAudio();
          console.log(position1)
          console.log('WIN');
          setCredit(credit + (bet * 5))
        }, 1600)
      }
    }
  }, [position1]);

  return (
    <>
      { winner &&
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
            <button className="spin-button" onClick={() => setWinner(false)}>
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
          <Rail winTile1={winTile1} winPulse={winPulse} changePosition={position1 => setPosition1(position1)} trigger={trigger} />
          <Rail winTile2={winTile2} winPulse={winPulse} changePosition={position2 => setPosition2(position2)} trigger={trigger} />
          <Rail winPulse={winPulse} changePosition={position3 => setPosition3(position3)} trigger={trigger} />
          <Rail winPulse={winPulse} changePosition={position4 => setPosition4(position4)} trigger={trigger} />
          <Rail winPulse={winPulse} changePosition={position5 => setPosition5(position5)} trigger={trigger} />
        </div>

        {/* <div style={{ display: 'flex', fontSize: '44px', justifyContent: 'space-evenly', padding: '50px' }}>
          <p>{position1}</p>
          <p>{position2}</p>
          <p>{position3}</p>
          <p>{position4}</p>
          <p>{position5}</p>
        </div> */}

        <div className="action-buttons-container">
          <div className="pseudo">
          </div>
          <button disabled={buttonDisabled || credit - bet < 0} className={`spin-button ${buttonDisabled || credit - bet < 0 ? 'button-disabled' : ''}`} onClick={() => {
            clickAudio();
            setTrigger(spin);
            setButtonDisabled(true);
            setGameInit(true);
            setTimeout(() => {
              setButtonDisabled(false);
            }, 1700);
            setCredit(credit - bet);
          }}>SPIN
          </button>

          <div className="controls-container">
            <div className="status">
              <div className="current-credit-wrapper">
                <div className="current-credit-label">
                  <p>CREDIT</p>
                </div>
                <div className="current-credit">
                  <p>{credit} <span style={{ fontSize: '36px' }}>&euro;</span></p>
                </div>
              </div>
              <div className="bet-wrapper">
                <div className="bet-label">
                  <p>BET</p>
                </div>
                <div className="bet">
                  <p>{bet} <span style={{ fontSize: '36px' }}>&euro;</span></p>
                </div>
              </div>

              <div className="won-wrapper">
                <div className="won-label">
                  <p>WON</p>
                </div>
                <div className="won">
                  <p>0 <span style={{ fontSize: '36px' }}>&euro;</span></p>
                </div>
              </div>
            </div>
              <BetButtons buttonDisabled={buttonDisabled} setBet={setBet} bet={bet} />
          </div>
        </div>

        {/* <div className="bottom-images">
          <div className="ra-image-wrapper">
            <img src={RaImage} className="ra-image" />
          </div>
          <div className="horus-image-wrapper">
            <img src={OsirisImage} className="horus-image" />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
