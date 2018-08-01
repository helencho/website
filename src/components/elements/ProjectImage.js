import React, { Component } from 'react';

class ProjectImage extends Component {
    render() {
        return (
            <div className="ProjectImage">
                <img src={this.props.url} alt="Image text" />
                <div className="overlay">
                    <div className="text">
                        <h3>{this.props.name}</h3>
                        <p>{this.props.description}</p>
                        <p>{this.props.stacks}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectImage; 