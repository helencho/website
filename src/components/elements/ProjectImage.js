import React, { Component } from 'react';

class ProjectImage extends Component {
    render() {
        return (
            <section className="ProjectImage">
                <img src={this.props.url} alt="Image text" />
                <div className="overlay">
                    <summary className="text">
                        <h3>{this.props.name}</h3>
                        <p>{this.props.description}</p>
                        <p>{this.props.stacks}</p>
                    </summary>
                </div>
            </section>
        )
    }
}

export default ProjectImage; 