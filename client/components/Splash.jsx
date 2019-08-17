import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

//https://scotch.io/tutorials/implementing-smooth-scrolling-in-react

class Splash extends React.Component {
  render() {
    return (
      <div className="splash">
        <div className="splash-text fade-in">
          <h1>
            Tess Meyer
          </h1>
          <hr />
          <h1>
            Web Developer <span className="green">&amp;</span> Problem Solver
          </h1>

          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1050}
            >
            <i className="fas fa-angle-down fa-2x heartbeat" />

          </Link>
        </div>
      </div>
    );
  }
}

export default Splash;
