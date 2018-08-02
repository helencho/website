import React, { Component } from 'react';
import Button from '../elements/Button';
import Anchor from '../elements/Anchor';
import ProjectImage from '../elements/ProjectImage';
import Pixel from '../elements/Pixel';
import Skills from '../elements/Skills';
import pixels from '../../db/pixel.json';
import projects from '../../db/projects.json';

class Test extends Component {
    render() {
        return (
            <div>
                <h1>Test</h1>
                <Button text="Primary" />
                <p>I walked 5 miles in <Anchor url="#" text="Bear Mountain" /> yesterday.</p>
                <section className="showcase">
                    <Pixel data={pixels[0]} />
                    <Pixel data={pixels[1]} />
                </section>
                <section className="showcase">
                    <ProjectImage
                        data={projects[0]}
                    />
                    <ProjectImage
                        data={projects[1]}
                    />
                    <ProjectImage
                        data={projects[2]}
                    />
                    <ProjectImage
                        data={projects[3]}
                    />
                </section>
                <Skills />
            </div>
        )
    }
}

export default Test;