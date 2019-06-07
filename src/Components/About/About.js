import React, { Component } from "react";
import './About.css'
import gif from '../../Assets/monster.gif'


export default class About extends Component {
  render() {
    return (
      <div id='about' className='campfire'>
        <div className='about'>

        </div>
        <div className="section-2">
        <div className='section-2-header'>
        <h1>MULTI-PLAYER OPEN WORLD RPG</h1>
        <h2>Prepare to take on a world of magic and monsters with your friends in this sword swingin', spell castin', enemy slayin' RPG with your friends!</h2>
        
        </div>
        <div className='section-2-images'>
          <div className="section-2-img-1"></div>
          <img src={gif} alt="gif of guy" />
          <div className="section-2-img-3"></div>
        </div>
        </div>
      </div>
    );
  }
}
