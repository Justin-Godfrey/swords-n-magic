import React, { Component } from "react";
import "./Content2.css";

export default class Content2 extends Component {
  render() {
    return (
      <div className="content-2">
        <div className="pictures-2">
          <div className="row-1">
            <div className="spell-1" />
            <div className="spell-2" />
            <div className="spell-3" />
          </div>
          <div className="row-2">
            <div className="spell-4" />
            <div className="spell-5" />
            <div className="spell-6" />
          </div>
        </div>
        <div className="content-description">
          <h1>SPELLS</h1>
          <h2>here is my test of what I am going to say in here/ ALSO I NEED SPELL IMAGES</h2>
        </div>
      </div>
    );
  }
}
