import React from 'react'
import Splash from './Splash';
import About from './About';
import Projects from './Projects';
import Technologies from './Technologies';
import Nav from './Nav';
import Footer from './Footer';
// import Contact from './Contact';

class App extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }
    render() { 
        return (  
            <React.Fragment>
                <Splash/>
                <Nav/>
                <About/>
                {/* <Contact/> */}
                <Technologies/>
                <Projects/>
                <Footer/>
            </React.Fragment>
        );
    }
}
 
export default App;