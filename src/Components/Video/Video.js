import React, { Component } from "react";
import "./Video.css";


export default class Video extends Component {
  render() {
    return (
    
      <div className="video-page">
      <h1>Get Lost in the beautiful world of SnMnS
      </h1>
      <div className="video">
      
      <video width="800" height="500" autoPlay muted controls>
  <source src={'#'} type="video/mp4"></source>
  </video>
      </div>
      </div>

    );
  }
}