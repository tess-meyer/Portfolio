import React, { Component } from 'react';
import Projectsjs from './Projectsjs'

class Projects extends Component {
    // Initialize state
    state = { projects: [] };

    // On load
    componentDidMount() {
        this.getProjects();
    }

    // Set state with our projects
    getProjects = () => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(projects => this.setState({projects}));
    }

    render() {
        const { projects } = this.state;

        return (
            <div className="App">

                <h4>Here are a few of my projects</h4>

                {
                    projects.length ? (
                        projects.map((project, index) => (
                            <div key={project.name}>
                                <p><b><a href={project.html_url}>{project.name}</a></b></p>
                                <p>{project.description}</p>
                            </div>
                        ))
                    ) : (
                        <div>
                            I don't have any projects
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Projects;