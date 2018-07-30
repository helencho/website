import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">H</Link>
                <Link to="/projects">Projects</Link>
                {/* <Link to="/pixel">Pixel</Link> */}
                <Link to="/about">About</Link>
            </nav>
        )
    }
}

export default NavBar;