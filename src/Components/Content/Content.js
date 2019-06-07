import React, { Component } from "react";
import "./Content.css";
import Content2 from '../Content2/Content2'

export default class Content extends Component {
  render() {
    return (
      <div id='content' className="content">
        <div className="content-description">
          <h1>WEAPONS</h1>
          <h2>here is my test of what I am going to say in here</h2>
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
