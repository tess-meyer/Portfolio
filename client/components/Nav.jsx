import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">

          <ul className="nav-items">
         
          <li className="nav-item contact-header">
            <a href="https://www.linkedin.com/in/tess-meyer-6b7a2a160/" target="blank">TESS MEYER </a>
          </li>
          {/* &nbsp; <i class="fas fa-kiwi-bird"></i> */}

          <li className="nav-item">
              <Link
                activeClass="active"
                to="splash"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="technologies"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Tech
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
