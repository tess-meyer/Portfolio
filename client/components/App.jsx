import React from 'react'
import Splash from './Splash';
import Projects from './Projects';
import About from './About';
import Technologies from './Technologies';


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
                <About/>
                <Technologies/>
                <Projects/>
            </React.Fragment>
        );
    }
}
 
export default App;