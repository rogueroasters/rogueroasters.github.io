import React from 'react'
import Diamond from '../assets/img/rgb_diamond.png'
import Leafs from '../assets/img/rgb_plants.png'
import Crest from '../assets/img/rgb_crest.png'

import '../assets/css/slide_1.css'

export default class extends React.Component {
  render() {
    return (
      <div className="bg">
        <div className="main-container">
            <img id="diamond" src={Diamond} alt="alt" />
            <img id="leafs" src={Leafs} alt="alt" />
            <img id="crest" src={Crest} alt="alt" />
        </div>
        <div className="subtitle">
          <ul>
            <li id="organic" className="words animated flipInX"><h3>Organic</h3></li>
            <li id="artisan" className="words animated flipInX"><h3>Artisan</h3></li>
            <li id="coffee" className="words animated flipInX"><h3>Coffee</h3></li>
            </ul>
            <div className="arrow animated infinite fadeIn flash"><i className="fa fa-angle-double-down fa-5x"/></div>
        </div>
      </div>
    );
  }
}
