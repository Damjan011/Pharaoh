import React, { useEffect, useState } from 'react';
import Rail from './components/Rail';
import LeverSound from './assets/sounds/start.wav';
import RollSound from './assets/sounds/roll-crop.wav';
import AmbientSound from './assets/sounds/ambient-trim.wav';
import SoundOn from './assets/images/volume-high@3x.png';
import SoundOff from './assets/images/volume-no@3x.png';
import CashSound from './assets/sounds/cash-out.mp3';
import CoinsSound from './assets/sounds/coins-drop-big.wav';
import CoinsDropAudio from './assets/sounds/coins-drop.wav';
import BetButtons from './components/BetButtons';
import StartGamePanel from './components/StartGamePanel';
import WinPanel from './components/WinPanel';
import Legend from './components/Legend';

const App = () => {
  const [background, setBackground] = useState(false);
  const [trigger, setTrigger] = useState(0);
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [position3, setPosition3] = useState(0);
  const [position4, setPosition4] = useState(0);
  const [position5, setPosition5] = useState(0);
  const [winner, setWinner] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [credit, setCredit] = useState(0);
  const [bet, setBet] = useState(0);
  const [gameInit, setGameInit] = useState(false);
  const [winPulse, setWinPulse] = useState(true);

  const [startGame, setStartGame] = useState(true);

  const [winTile1, setWinTile1] = useState(false);
  const [winTile2, setWinTile2] = useState(false);
  const [winTile3, setWinTile3] = useState(false);

  const [wonFunds, setWonFunds] = useState(0);

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
const winChecker = (pos1, pos2, pos3) => {
  if (pos1) {
    setTimeout(() => {
      if (pos1 === pos2) {
      setWinPulse(true);
      setWinTile1(true);
      setWinTile2(true);
      winAudio();
    console.log(position1, position2, position3)
    console.log('WIN');
    setCredit(credit + (bet * 3));
    setWonFunds(bet * 3);
    } else if (pos2 === pos3) {
      setWinPulse(true);
      setWinTile2(true);
      setWinTile3(true);
      winAudio();
    console.log(position1, position2, position3)
    console.log('WIN');
    setCredit(credit + (bet * 3));
    setWonFunds(bet * 3);
    } else if (pos2 === pos3 === pos1) {
      setWinPulse(true);
      setWinTile1(true);
      setWinTile2(true);
      setWinTile3(true);
      winAudio();
    console.log(position1, position2, position3)
    console.log('WIN');
    setCredit(credit + (bet * 3));
    setWonFunds(bet * 3);
    }
    
  }, 1600);
  }
}

  useEffect(() => {
    if (gameInit) {
      setWonFunds(0)
      if (winTile1) {
        setWinTile1(false);
      }
      if (winTile2) {
        setWinTile2(false)
      }
      if (winTile3) {
        setWinTile3(false)
      }
      // if (position1 && position1 === position2 || position2 === position3 || position1 === position2 === position3) {
      //   setTimeout(() => {
      //     //setWinner(true);
      //     setWinPulse(true);
      //     setWinTile1(true)
      //     setWinTile2(true)
      //     setWinTile3(true)
      //     winAudio();
      //     console.log(position1, position2, position3)
      //     console.log('WIN');
      //     setCredit(credit + (bet * 5))
      //   }, 1600)
      // }
      winChecker(position1, position2, position3)
    }
  }, [position1]);

  return (
    <>
      { winner &&
        <WinPanel setWinner={setWinner} />
      }
      {
        startGame &&
        <StartGamePanel setBackground={setBackground} setCredit={setCredit} setStartGame={setStartGame} />
      }
      <div className={`view ${startGame || winner ? 'faded' : ''}`} style={{ position: 'relative' }}>
      
        <Sound background={background} />
        <div className="top-bar">
          <Legend />
          <button className="sound-button" onClick={() => {
            setBackground(!background);
            }
            }>
            <img className="sound-image" src={background ? SoundOn : SoundOff} />
          </button>
        </div>
        <div className="rails-container">
          <Rail winTile1={winTile1} winPulse={winPulse} changePosition={position1 => setPosition1(position1)} trigger={trigger} />
          <Rail winTile2={winTile2} winPulse={winPulse} changePosition={position2 => setPosition2(position2)} trigger={trigger} />
          <Rail winTile3={winTile3} winPulse={winPulse} changePosition={position3 => setPosition3(position3)} trigger={trigger} />
          <Rail winPulse={winPulse} changePosition={position4 => setPosition4(position4)} trigger={trigger} />
          <Rail winPulse={winPulse} changePosition={position5 => setPosition5(position5)} trigger={trigger} />
        </div>

        {/* <div style={{ display: 'flex', fontSize: '44px', justifyContent: 'space-evenly', padding: '50px' }}>
          <p>{position1}</p>
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

          <div style={{marginTop: '20px'}} className="controls-container">
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
                  <p>{wonFunds} <span style={{ fontSize: '36px' }}>&euro;</span></p>
                </div>
              </div>
            </div>
              <BetButtons buttonDisabled={buttonDisabled} setBet={setBet} bet={bet} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
