import React, { Component } from 'react';
import ProjectImage from '../elements/ProjectImage';
import projectsData from '../../db/projects.json';

class Projects extends Component {
    render() {
        return (
            <div className="Projects fadein">
                <h1 className="main-header">Projects</h1>
                <section className="showcase">
                    {projectsData.map((project, id) => <ProjectImage data={project} key={id} />)}
                </section>
            </div>
        )
    }
}

export default Projects;