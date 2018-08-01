import React, { Component } from 'react';
import Modal from 'react-modal';
import Anchor from './Anchor';

const style = {
    content: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 'none',
        background: 'white',
        opacity: '0.999',
        overflow: 'auto',
        outline: 'none',
        padding: '20px'
    }
  }

class ProjectImage extends Component {
    state = {
        modalOpen: false
    }

    componentWillMount() {
        Modal.setAppElement('body');
     }

    openModal = () => {
        this.setState({
            modalOpen: true 
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }


    render() {
        return (
            <section className="ProjectImage">
                <img src={this.props.url} alt={this.props.name} />
                <div className="overlay">
                    <summary className="text">
                        <h3 onClick={this.openModal}>{this.props.name}</h3>
                        <p>{this.props.description}</p>
                        <p className="highlight">{this.props.stacks}</p>
                    </summary>
                </div>
                <Modal
                    style={style}
                    isOpen={this.state.modalOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Project Modal">
                    <section className="ProjectModal">
                        <header>
                            <img onClick={this.closeModal} src="./assets/icons/close.png" alt="Exit" className="close" />
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
                </Modal>
            </section>
        )
    }
}

export default ProjectImage; 