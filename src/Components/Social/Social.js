import React, { Component } from "react";
import "./Social.css";
import Twitch from '../../Assets/twitch.png'
import Discord from '../../Assets/discord.png'
import Twitter from '../../Assets/twitter.png'


export default class Social extends Component {
  render() {
    return (
      <div id='social' className="social-bar">
      
      <a href='https://www.twitch.tv/kindreddev' target="_blank" style={{ textDecoration: 'none' }}>
      <div className='twitch'>
        <img src={Twitch} />
        <span>https://www.twitch.tv/kindreddev</span>
      </div>
      </a>

      <a href='https://discord.gg/H7zKBg6' target="_blank" style={{ textDecoration: 'none' }}>
      <div className='discord'>
        <img src={Discord} />
        <span>https://discord.gg/H7zKBg6</span>
      </div>
      </a>

      <a href='https://twitter.com/michaelkocha' target="_blank" style={{ textDecoration: 'none' }}>
      <div className='twitter'>
        <img src={Twitter} />
        <span>https://twitter.com/michaelkocha</span>
      </div>
      </a>

      </div>     
    );
  }
}