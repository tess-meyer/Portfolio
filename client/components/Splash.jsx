import React from 'react'

class Splash extends React.Component {
    render() { 
        return ( 
            <div className='splash'>
                <p className="splash-text">Hi! I'm Tess</p>
                    <a href="https://www.linkedin.com/in/tess-meyer-6b7a2a160">
                        <img className="me" src="/me.jpeg" alt=""/>
                    </a>
                <p className="splash-text">I'm a developer</p>
            </div>
         );
    }
}
 
export default Splash;