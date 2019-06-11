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
        <div className='section-2-header1'>
        <h1>Swords 'n Magic by Kindred Games</h1>
        <h2>Grab your friends, grab your gear and set out for adventure in a world of swords and magic. Discover hundreds of weapons, items and spells and meet new friends and foes to use them on. Make your mark and find a place to call home in this couch co-op action RPG. Come discover Swords 'n Magic and Stuff. </h2>      
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
