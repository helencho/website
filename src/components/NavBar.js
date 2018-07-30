import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link to="/" className="Link">H</Link>
                <Link to="/projects" className="Link">Projects</Link>
                <Link to="/pixel" className="Link">Pixel</Link>
                <Link to="/about" className="Link">About</Link>
            </nav>
        )
    }
}

export default NavBar;