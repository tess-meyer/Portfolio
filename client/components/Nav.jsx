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
            TESS MEYER 
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

          {/* <img
            src="https://s.abcnews.com/images/Lifestyle/puppy-ht-3-er-170907_4x3_992.jpg"
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          /> */}