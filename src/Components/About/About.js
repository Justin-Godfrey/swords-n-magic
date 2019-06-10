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
        <h1>Beautifully Landscaped Land</h1>
        <h2>Be prepared to lose yourself in the wonderful world created by Kindred Games. With hours of secrets to find and places to explore, you'll quickly find that the main story isnt the only thing you want to spend your time doing.</h2>
        
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
