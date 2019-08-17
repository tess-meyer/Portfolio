import React from 'react'
import Splash from './Splash';
import About from './About';
import Projects from './Projects';
import Technologies from './Technologies';
import Nav from './Nav';


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
                <Technologies/>
                <Projects/>
            </React.Fragment>
        );
    }
}
 
export default App;