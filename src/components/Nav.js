import React from "react";
import Link from "next/link";
import "../styles/index.css";

export default () => {
  return (
    <nav className="text-center">
      <ul>
        <Link href="/">
          <a>
            <li className="nav-item">Home</li>
          </a>
        </Link>
        <Link href="/PostForm">
          <a>
            <li className="nav-item">Compose</li>
          </a>
        </Link>
        <Link href="/About">
          <a>
            <li className="nav-item">About</li>
          </a>
        </Link>
      </ul>
    </nav>
  );
};
