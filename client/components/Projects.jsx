import React from 'react'

class Projects extends React.Component {
    
    render() { 
        return ( 
        <div className="projects">
            <h1>
                Here are a few of my projects
            </h1>
            <p>
                these projects were all made by me. super cool.
            </p>
            
            <div className="card">
                <img src="fam.png" alt="Avatar" className="project-img"></img>
                <div className="container">
                    <h4><b>Festival Attendee Mapper</b></h4> 
                    <p>July 2019</p> 
                </div>
             </div>

             <div className="card">
                <img src="fam.png" alt="Avatar" className="project-img"></img>
                <div className="container">
                    <h4><b>Festival Attendee Mapper</b></h4> 
                    <p>July 2019</p> 
                </div>
             </div>

             <div className="card">
                <img src="fam.png" alt="Avatar" className="project-img"></img>
                <div className="container">
                    <h4><b>Festival Attendee Mapper</b></h4> 
                    <p>July 2019</p> 
                </div>
             </div>
             </div>
         );
    }
}
 
export default Projects;