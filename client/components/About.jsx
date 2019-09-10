import React from "react";

class About extends React.Component {
  render() {
    return (
      <>
      <div className="pepeha about">
        <img id="pepeha-img" src="pepeha.png" alt="pepeha"/>
      </div>

      <div className="about about-flex">
      <div className="about about-right">
        <h3>Hi there! I'm Tess.</h3>
        <p>
         I am a full stack web developer currently working as part of a dev team
          for a sustainable NZ start-up, backed with over 800 hours of coding 
          training in a simulated work environment at Enspiral Dev Academy (EDA). 
          I chose a career in Web Development because I love solving problems. 
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
        <p>
          In my spare time I like to take on little projects, like cycling 1500 
          from Cape Reinga to Wellington educating hundreds of tamariki about 
          sustainability.
        </p>
        <p>
          I am looking for a full-time role where I can continue learning in 
          a supportive team environment.
        </p>
        </div>

      <div className="about-left">
        <img className="section-header" src="https://i.pinimg.com/originals/8b/0f/ad/8b0fad7358dc6960bcf44296985808f7.jpg"></img>
        <div className="video-responsive">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2kVesu7k1Sc"
         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;
          picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    
        <div className="contact">          
        <a className="contact-button" href="mailto:tessoliviameyer@gmail.com">
          Contact me!
        </a>
        </div>
      
      <div className="download"><i class="fas fa-download"></i>
      <a href="CV.pdf" target="_blank">
        &nbsp;Download My CV
      </a>
      </div>
    

      </div>

      </>
    );
  }
}

export default About;
