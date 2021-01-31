import React from 'react';
import './style.css';
import Anubis from '../../assets/symbols/anubis.png';
import Bastet from '../../assets/symbols/bastet.png';
import Thoth from '../../assets/symbols/thoth.png';
import Horus from '../../assets/symbols/horus.png';
import Cat from '../../assets/symbols/cat.png';
import Pyramid from '../../assets/symbols/pyramid.png';
import Ankh from '../../assets/symbols/ankh.png';
import Snake from '../../assets/symbols/snake.png';
import Jackal from '../../assets/symbols/jackal.png';
import Sarcophagus from '../../assets/symbols/sarcophagus.png';
import Scarab from '../../assets/symbols/scarab.png';
import Obelisk from '../../assets/symbols/obelisk.png';

const Legend = () => {
  return (
    <div className="legend-container">
      <div className="legend">
        <div className="legend-title">
          <p>HIGH</p>
        </div>
        <div className="legend-images">
          <div className="legend-image-wrapper legend-high">
            <img src={Anubis} className="legend-image" />
          </div>
          <div className="legend-image-wrapper legend-high">
            <img src={Thoth} className="legend-image" />
          </div>
          <div className="legend-image-wrapper legend-high">
            <img src={Horus} className="legend-image" />
          </div>
          <div className="legend-image-wrapper legend-high">
            <img src={Bastet} className="legend-image" />
          </div>
        </div>
      </div>

      <div className="legend">
        <div className="legend-title">
          <p>MED</p>
        </div>
        <div className="legend-images">
          <div className="legend-image-wrapper">
          <img src={Jackal} className="legend-image" />
            
          </div>
          <div className="legend-image-wrapper">
          <img src={Scarab} className="legend-image" />
          </div>
          <div className="legend-image-wrapper">
            <img src={Snake} className="legend-image" />
          </div>
          <div className="legend-image-wrapper">
            <img src={Cat} className="legend-image" />
          </div>
        </div>
      </div>

      <div className="legend">
        <div className="legend-title">
          <p>LOW</p>
        </div>
        <div className="legend-images">
          <div className="legend-image-wrapper legend-low">
            <img src={Ankh} className="legend-image" />
          </div>
          <div className="legend-image-wrapper legend-low">
            <img src={Pyramid} className="legend-image" />
          </div>
          <div className="legend-image-wrapper legend-low">
            <img src={Obelisk} className="legend-image" />
          </div>
          <div className="legend-image-wrapper legend-low">
            <img src={Sarcophagus} className="legend-image" />
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Legend;