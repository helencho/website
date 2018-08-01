import React, { Component } from 'react';

class Pixel extends Component {
    render() {
        return (
            <div className="Pixel">
                <img src={this.props.data.image} alt={this.props.data.name} />
                <p>{this.props.data.name}</p>
            </div>
        )
    }
}

export default Pixel;