import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h2>About me!</h2>
        <p>
          I am a full stack web developer with over 700 hours of coding
          experience in a simulated work environment at Enspiral Dev Academy
          (EDA). I chose a career in Web Development because I love solving
          problems. 
        </p>
        <p> 
          Above all else I can bring enthusiasm and a willingness and
          capacity to learn. 
        </p>
        <p> 
          I am a strong believer in having a growth mindset
          and looking at problems and roadblocks as exciting new challenges. I
          love that I can continue learning and growing every step of the way.
        </p>
       
      <div className="contact"> Contact Me! </div>
      <div className="download"><i class="fas fa-download"></i> Download my CV</div>

      </div>
    );
  }
}

export default About;
