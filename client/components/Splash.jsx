import React from 'react'

class Splash extends React.Component {
    render() { 
        return ( 
            <div className='splash'>
         
                <div className="splash-text fade-in">
                    <h1>I<span className="green">'</span>m Tess Meyer<span className="green">.</span></h1>
                    <hr/>
                    <h1>Web Developer <span className="green">&amp;</span> Problem Solver</h1>

                    <i class="fas fa-angle-down fa-2x"></i>
                </div>
            </div>
         );
    }
}
 
      {/* <a href="https://www.linkedin.com/in/tess-meyer-6b7a2a160">
                        <img className="me" src="/me.jpeg" alt=""/>
                    </a>
                <p className="splash-text">I'm a developer</p> */}
export default Splash;