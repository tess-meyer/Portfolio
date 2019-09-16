import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
           <a href="https://www.linkedin.com/in/tess-meyer-6b7a2a160"> <i className="fab fa-linkedin-in fa-2x"> </i></a>
           <a href="https://github.com/tess-meyer/"> <i className="fab fa-github fa-2x github-foot"> </i></a>
           <a href="mailto:tessoliviameyer@gmail.com"> <i className="fas fa-envelope-square fa-2x"> </i></a>
           <a className="email" href="mailto:tessoliviameyer@gmail.com">tessoliviameyer@gmail.com</a>
      </div>
    );
  }
}

export default Footer;
