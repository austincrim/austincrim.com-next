import React from 'react';
import Link from 'next/link';
import '../../styles/index.css';

export default () => {
    return <nav className="text-center">
        <ul>
            <li className="nav-item">
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/PostForm">
                <a>Compose</a>
                </Link>
            </li>
            <li className="nav-item"><a href="#">Posts</a></li>
        </ul>
    </nav>
}