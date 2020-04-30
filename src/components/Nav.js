import React, { useState } from "react";
import Link from "next/link";

export default () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <nav>
            <div className="flex justify-end">
                <button
                    className={`m-4 hide-hamburger`}
                    onClick={() => setExpanded(!expanded)}
                >
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect
                            fill="white"
                            rx="8"
                            width="100"
                            height="10"
                        ></rect>
                        <rect
                            fill="white"
                            rx="8"
                            y="30"
                            width="100"
                            height="10"
                        ></rect>
                        <rect
                            fill="white"
                            rx="8"
                            y="60"
                            width="100"
                            height="10"
                        ></rect>
                    </svg>
                </button>
            </div>
            <ul
                className={`flex flex-col md:flex-row justify-center py-2 w-full text-gray-700 shadow-md bg-gray-200 fixed z-10 border-t-4 border-indigo-500
                ${expanded ? "show-nav" : "hide-nav"}`}
            >
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
