import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { Parallax } from "react-parallax";
import heroImage from "../../Assets/Logo.png";
import "./Home.css";
import About from "../About/About";
import Content from "../Content/Content";
import Content2 from "../Content2/Content2";
import Banner from "../Banner/Banner";
import Video from "../Video/Video";
import Social from "../Social/Social";

export default class Home extends Component {
  render() {
    return (
      <div id="home" style={{ height: "200vh" }}>
        <Parallax bgImage={heroImage} strength={350}>
          <Navbar />
        </Parallax>
        <div className="image-container">
          <div className="img1" />
          <div className="img2" />
          <div className="img3" />
          <div className="img4" />
        </div>
        <div className="about-container" />
        <div id="about">
        <Video />
          <About />
        </div>
        <Content />
        <div className="content-break">
          <span></span>
        </div>
        <Content2 />
        
        <Banner />
        <Social />
      </div>
    );
  }
}
