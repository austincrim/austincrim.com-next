import React from "react";
import Link from "next/link";

export default () => {
  return (
    <nav className="text-center">
      <ul className="bg-white shadow-sm">
        <Link href="/">
          <a>
            <li className="nav-item">Home</li>
          </a>
        </Link>
        <Link href="/postForm">
          <a>
            <li className="nav-item">Compose</li>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <li className="nav-item">About</li>
          </a>
        </Link>
      </ul>
    </nav>
  );
};
