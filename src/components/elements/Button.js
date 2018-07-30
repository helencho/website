import React, { Component } from 'react';
import '../../stylesheets/Button.css';

class Button extends Component {
    render() {
        return (
            <button className="Button">{this.props.text}</button>
        )
    }
}

export default Button; 