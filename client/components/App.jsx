import React from 'react'
import Splash from './Splash';
import Projects from './Projects';
import Projectsjs from './Projectsjs'


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
                <Projects/>
            </React.Fragment>
        );
    }
}
 
export default App;