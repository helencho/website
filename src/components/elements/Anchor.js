import React, { Component } from 'react';

class Anchor extends Component {
    render() {
        return (
            <a className="Anchor" href={this.props.url || "#"} target="_blank">{this.props.text}</a>
        )
    }
}

export default Anchor; 