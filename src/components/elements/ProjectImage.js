import React, { Component } from 'react';
import Modal from 'react-modal';
import ProjectModal from './ProjectModal';

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

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen 
        })
    }

    render() {
        return (
            <section className="ProjectImage">
                <img src={this.props.data.links.thumb} alt={this.props.data.name} />
                <div className="overlay" onClick={this.toggleModal}>
                    <summary className="text">
                        <h3>{this.props.data.name}</h3>
                        <p>{this.props.data.tagline}</p>
                        <p className="highlight">{this.props.data.tech.join(', ')}</p>
                    </summary>
                </div>
                <Modal
                    style={style}
                    isOpen={this.state.modalOpen}
                    onRequestClose={this.toggleModal}
                    contentLabel="Project Modal">
                    <ProjectModal 
                        data={this.props.data}
                        toggleModal={this.toggleModal}
                    />
                </Modal>
            </section>
        )
    }
}

export default ProjectImage; 