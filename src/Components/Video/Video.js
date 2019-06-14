import React, { Component } from "react";
import YouTube from 'react-youtube';
import './Video.css'

export default class Video extends Component {
  render() {
      const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };
    return (
    
      <div className="video-page">
      <h1>Be prepared to lose yourself in the wonderful world created by Kindred Games. With hours of secrets to find and places to explore, you'll quickly find that the main story isnt the only thing you want to spend your time doing.</h1>
      <div className='video-img'>
      <div className='video-img-1'></div>
      </div>

      
      <div className="video">
      
      <YouTube videoId='RK50YocCV-Y'
      opts={opts}
      onReady={this._onReady}/>
      
  
  
      </div>
      </div>

    );
  }
}