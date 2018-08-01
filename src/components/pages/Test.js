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
                <section className="showcase">
                    <ProjectImage 
                        url="./assets/projects/peter-screely.png"
                        name="Sh*t Peter Says"
                        description="Farewell gift to the instructor"
                        stacks="JavaScript, CSS" />
                    <ProjectImage 
                        url="./assets/projects/calculator-screely.png"
                        name="Calculator"
                        description="Google Pixel calculator inspired calculator"
                        stacks="JavaScript, CSS" />
                    <ProjectImage 
                        url="./assets/projects/madlify-screely.png"
                        name="Madlify"
                        description="Mad Libs inspired phrasal template word game"
                        stacks="JavaScript, CSS" />
                    <ProjectImage 
                        url="./assets/projects/smood-home-screely.png"
                        name="Smood"
                        description="Mood tracker + visualizer"
                        stacks="Postgres, Express, React, Node.js" />
                </section>
            </div>
        )
    }
}

export default Test;