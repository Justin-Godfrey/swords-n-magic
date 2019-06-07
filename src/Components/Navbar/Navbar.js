import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Navbar extends Component {
  constructor() {
    super();

    // getting  a reference to the dom for the 'popup-container' div
    this.popUpRef = React.createRef();

    // keeping track of a flag to displayu the popup button and the popUp containers position
    this.state = {
      showPopUp: false,
      popUpPosition: 0,
      showMenuDisplay: false
    };
  }

  //when component mounts, we add an event listener to the window and listen for scroll events
  // then we get the offset of the y axis for the popup contiainer
  // then set the state of popUpPosition to that y axis value
  componentDidMount() {
    window.addEventListener("scroll", () => this.checkForPopUp());
    let offsetTop = this.popUpRef.current.offsetTop;
    this.setState({
      popUpPosition: offsetTop
    });
  }

  // we check for the position of the window and display the button if it hits the popup container
  checkForPopUp = () => {
    if (window.pageYOffset >= this.state.popUpPosition) {
      this.setState({
        showPopUp: true,
      });
    } else if (window.pageYOffset <= this.state.popUpPosition) {
      this.setState({
        showPopUp: false
      });
    }
  };

  render() {
    return (
      <div className="navbar-container">
        <nav className="navbar">
          <div className='logo-container' />
          <div className='links'>
            <AnchorLink href='#about' offset='-1150'>About</AnchorLink>
            <AnchorLink href='#content'>Content</AnchorLink>
            <AnchorLink href='#social'>Social</AnchorLink>
            <Link to='/login'>Community Highlights</Link>
          </div>
        </nav>
        <div className="popup-container" ref={this.popUpRef}>

          

          {// conditionally rendering the popup button if showPopUp on state is true
          this.state.showPopUp ? (
            <button className="popup-btn">
              <span />
              <span />
            </button>
          ) : // display null is false
          null}
        </div>
        <div />
      </div>
    );
  }
}

export default Navbar;
