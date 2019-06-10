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
      <h1>Get Lost in the beautiful world of SnMnS
      </h1>
      <div className="video">
      
      <YouTube videoId='RK50YocCV-Y'
      opts={opts}
      onReady={this._onReady}/>
  
  
      </div>
      </div>

    );
  }
}