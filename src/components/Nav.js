import React from "react";
import Link from "next/link";

export default () => {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row justify-center py-2 text-gray-200 bg-gray-700 shadow-md border-t-4 border-indigo-500">
        <Link href="/">
          <a className="nav-item">
            <li>Home</li>
          </a>
        </Link>
        <Link href="#skills">
          <a className="nav-item">
            <li>Skills</li>
          </a>
        </Link>
        <Link href="#portfolio">
          <a className="nav-item">
            <li>Portfolio</li>
          </a>
        </Link>
        <Link href="#contact">
          <a className="nav-item">
            <li>Contact</li>
          </a>
        </Link>
        {/* <Link href="/blog">
          <a>
            <li>Blog</li>
          </a>
        </Link>
        <Link href="/postForm">
          <a>
            <li>Compose</li>
          </a>
        </Link> */}
      </ul>
    </nav>
  );
};
