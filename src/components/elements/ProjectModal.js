import React, { Component } from 'react';
import Anchor from './Anchor';

class ProjectModal extends Component {
    render() {
        return (
            <section className="ProjectModal">
                <header>
                    <img onClick={this.props.toggleModal} src="./assets/icons/close.png" alt="Close" className="close" />
                </header>
                <main>
                    <aside>
                        <img src={this.props.data.links.img} alt={this.props.data.name} />
                    </aside>
                    <summary>
                        <h1>{this.props.data.name}</h1>
                        <p className="tagline">{this.props.data.tagline}</p>
                        <p>{this.props.data.description}</p>
                        <p className="highlight">{this.props.data.tech.join(', ')}</p>
                        <div className="links">
                            <Anchor url={this.props.data.links.live} text="Live" /> <Anchor url={this.props.data.links.source} text="Source" />
                        </div>
                    </summary>
                </main>
            </section>
        )
    }
}

export default ProjectModal;