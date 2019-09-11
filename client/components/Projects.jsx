import React from 'react'

class Projects extends React.Component {
    
    render() { 
        return ( 
        <>
            <div className="project-head">
            <h1>
                Here are a few of my projects
            </h1>
            <p>
                Here's a sample of some projects that i've worked on. 
            </p>
            </div>
            <div className="projects">
            
            <div className="card">
            <a href="https://squawksquad.co.nz/about-us" target="blank">
                <img src="ss.png" alt="ss" className="project-img"></img>   
                <div className="container">
                    <h4><b>Squawk Squad</b></h4> 
                    <p>August 2019 - present</p> 
                    <p> I'm currently working as part of a team maintaining and updating
                        the existing squawk squad website. This has recently included 
                        revamping the about page.
                    </p>
                </div>
                </a>
             </div>
            <div className="card">
                <a href="https://github.com/tess-meyer/Festival-Attendee-Mapper">
                <img src="fam.png" alt="Avatar" className="project-img"></img>
                <div className="container">
                    <h4><b>Festival Attendee Mapper</b></h4> 
                    <p>July 2019</p> 
                    <p>This project was inspired by a need for more accurate data gathered 
                        during festivals. I undertook this project with 6 others during my 
                        time at EDA</p>
                </div>
                </a>
             </div>

             <div className="card">
                 <a href="https://github.com/kotare-2019/cyoa"></a>
                <img src="cyoa.png" alt="Avatar" className="project-img"></img>
                <div className="container">
                    <h4><b>Choose your own adventure </b></h4> 
                    <p>July 2019</p> 
                    <p>My first ever group project! I made this as part of a team of 5, 
                        during roughly my 6th week of coding ever. You could say it was an 
                        exciting moment.</p>
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
                 <a href="https://github.com/tess-meyer/minesweeper">
                <img src="minesweeper.png" alt="Avatar" className="project-img"></img>
                <div className="container">
                    <h4><b>Minesweeper</b></h4> 
                 <p>June 2019</p> 
                 <p>It's fairly sweepy.</p>
                 <p>This is essentially my coding "before" photo. It was the first thing I ever 
                     made and will always hold a place in my heart
                 </p>
                </div>
                </a>
             </div>
             </div>
        </>
         );
    }
}
 
export default Projects;