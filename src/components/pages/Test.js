import React, { Component } from 'react';
import Button from '../elements/Button';
import Anchor from '../elements/Anchor';
import ProjectImage from '../elements/ProjectImage';

class Test extends Component {
    render() {
        return (
            <div>
                <h1>Test</h1>
                <Button text="Primary" />
                <p>I walked 5 miles in <Anchor text="Bear Mountain" /> yesterday.</p>
                <ProjectImage 
                    url="./assets/projects/peter-screely.png"
                    name="Sh*t Peter Says"
                    description="Farewell gift to the instructor"
                    stacks="JavaScript, CSS" />
            </div>
        )
    }
}

export default Test;