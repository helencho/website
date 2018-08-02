import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav className="NavBar">
                <Link to="/" className="Link"><img src="./assets/icons/logo-1.png" alt="H" className="logo" /></Link>
                <div className="nav-links">
                    <Link to="/projects" className="Link">Projects</Link>
                    <Link to="/pixel" className="Link">Pixel</Link>
                    <Link to="/about" className="Link">About</Link>
                </div>
            </nav>
        )
    }
}

export default NavBar;