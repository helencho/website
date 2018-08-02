import React, { Component } from 'react';
import Skills from '../elements/Skills';
import Social from '../elements/Social';
import Anchor from '../elements/Anchor';
import pixelData from '../../db/pixel.json';

class About extends Component {
    render() {
        return (
            <div className="About fadein">
                <h1 className="main-header">About</h1>
                <main>
                    <div>
                        <img src={pixelData[0].image} alt={pixelData[0].name} />
                    </div>
                    <summary>
                        <p className="highlight">My name is Helen.</p>
                        <p>I'm a software engineer based in New York City.</p>
                        <p>Take a look at the <Anchor url="https://medium.com/@chocoga/my-illustrated-cover-letter-4db321ae1b19" text="cover letter" /> I illustrated to be granted a Full Stack Web Development Fellowship from C4Q's Access Code. When I'm not obsessing over web responsiveness or quality designs, you can find me hiking in Long Island, running after the ice cream truck, or chasing the next solar eclipse.</p>
                    </summary>
                </main>
                <section className="gray-angled">
                    <h2 className="sub-header">Skills</h2>
                    <Skills />
                </section>
                <section>
                    <h2 className="sub-header">Get in touch</h2>
                    <Social />
                </section>
            </div>
        )
    }
}

export default About;