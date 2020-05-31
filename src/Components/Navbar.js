import React, { Component } from "react";
import i1 from "../1.jpg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <h2 className="nav-content nav-logo" onClick={this.scrollToTop}>
          <strong>{"{ "}chiniklaus{" }"}</strong>
        </h2>
        <div className="nav-content">
          <ul className="mt-3">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section0"
                spy={true}
                smooth={true}
                duration={500}
              >
                <strong>Intro</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                duration={500}
              >
                <strong>Education</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <strong>Computer Knowledge</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <strong>Work Experience</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <strong>Projects</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <strong>Contact</strong>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
