import React, { Component } from 'react';

class ProjectImage extends Component {
    state = {
        hover: false 
    }

    toggleHover = () => {
        this.setState({
            hover: !this.state.hover
        })
    }

    render() {
        console.log(this.state) 

        return (
            <div onMouseOver={this.toggleHover} onMouseLeave={this.toggleHover} className="ProjectImage">
                <img src={this.props.url} alt="Image text" />
                <div className="overlay">
                    <div className="text">
                        <h3>Elevate</h3>
                        <p>Project description goes here</p>
                        <p>Postgres, Express, React, Node.js</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectImage; 