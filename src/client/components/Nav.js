import React from 'react';
import '../styles/Nav.css';

export default () => {
    return <nav id="navbar">
        <ul>
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Compose</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Posts</a></li>
        </ul>
    </nav>
}