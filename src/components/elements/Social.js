import React, { Component } from 'react';
import resume from '../../resume.pdf';

class Social extends Component {
    render() {
        return (
            <div className="Social">
                <a href="https://github.com/helencho" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x fa-fw" /></a>
                <a href="https://www.linkedin.com/in/haeyoungcho/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-2x fa-fw" /></a>
                <a href="https://twitter.com/hellohelencho" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x fa-fw" /></a>
                <a href="https://medium.com/@chocoga" target="_blank" rel="noopener noreferrer"><i className="fab fa-medium-m fa-2x fa-fw" /></a>
                <a href={resume} target="_blank" rel="noopener noreferrer"><i className="far fa-file-alt fa-2x fa-fw" /></a>
            </div>
        )
    }
}

export default Social;