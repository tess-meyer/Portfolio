import React from 'react'
import Splash from './Splash';

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
            </React.Fragment>
        );
    }
}
 
export default App;