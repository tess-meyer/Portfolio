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
                <img src="ss.png" alt="ss" className="project-img"></img>
                <div className="container">
                    <h4><b>Squawk Squad</b></h4> 
                    <p>August 2019 - present</p> 
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
                <img src="cyoa.png" alt="Avatar" className="project-img"></img>
                <div className="container">
                    <h4><b>Choose your own adventure </b></h4> 
                    <p>July 2019</p> 
                </div>
             </div>

             {/* <div className="card">
                <img src="https://codepen.io/kalpeshsingh/pen/wMNpLp/image/large.png" alt="Avatar" className="project-img"></img>
                <div className="container">
                    <h4><b>Calculator</b></h4> 
                    <p>June 2019</p> 
                </div>
             </div> */}

             <div className="card">
                <img src="minesweeper.png" alt="Avatar" className="project-img"></img>
                <div className="container">
                    <h4><b>Minesweeper</b></h4> 
                 <p>June 2019</p> 
                </div>
             </div>
             </div>
         );
    }
}
 
export default Projects;