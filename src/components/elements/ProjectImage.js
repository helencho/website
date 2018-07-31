import React, { Component } from 'react';

class ProjectImage extends Component {
    render() {
        return (
            <img src={this.props.url} alt="Image text" />
        )
    }
}

export default ProjectImage; 