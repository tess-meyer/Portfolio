import React from 'react'

class Splash extends React.Component {
    render() { 
        return ( 
            <div className='splash'>
                <p className="splash-text">Hi! I'm Tess</p>
                <img className="me" src="/me.jpeg" alt=""/>
                <p className="splash-text">I'm a developer</p>
            </div>
         );
    }
}
 
export default Splash;