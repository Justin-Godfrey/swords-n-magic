import React, { Component } from "react";
import "./Content.css";
import Content2 from '../Content2/Content2'

export default class Content extends Component {
  render() {
    return (
      <div id='content' className="content">
        <div className="content-description1">
          <h1>WEAPONS</h1>
          <h2>With hundreds of weapons to find, craft and unlock, you will be able to master your craft in combat whether it be with axes, swords, bows and much more. Choose your weapon, player, and let the game begin!</h2>
        </div>
        <div className="pictures">
          <div className="row-1">
            <div className="img-1" />
            <div className="img-2" />
            <div className="img-3" />
          </div>
          <div className="row-2">
            <div className="img-4" />
            <div className="img-5" />
            <div className="img-6" />
          </div>
        </div>
      </div>      
    );
  }
}
