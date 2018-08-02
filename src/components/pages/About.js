import React, { Component } from 'react';
import Skills from '../elements/Skills';

class About extends Component {
    render() {
        return (
            <div className="About fadein main-header">
                <h1>About</h1>
                <Skills />
            </div>
        )
    }
}

export default About;