import React, { Component } from 'react';
import Anchor from './Anchor';

class ProjectModal extends Component {
    render() {
        return (
            <section className="ProjectModal">
                <header>
                    <img onClick={this.props.toggleModal} src="./assets/icons/close.png" alt="Exit" className="close" />
                </header>
                <main>
                    <aside>
                        <img src={this.props.url} alt={this.props.name} />
                    </aside>
                    <summary>
                        <h1>{this.props.name}</h1>
                        <p className="tagline">{this.props.description}</p>
                        <p>The long description of the project goes here. I built this because there needed to be an easier way to keep track of job applications other than logging into a spreadsheet. User receives reminders on SMS or email, earns points and badges for milestones, and pleasant user interface.</p>
                        <p className="highlight">{this.props.stacks}</p>
                        <div className="links">
                            <Anchor url="#" text="Live" /> <Anchor url="#" text="Source" />
                        </div>
                    </summary>
                </main>
            </section>
        )
    }
}

export default ProjectModal;