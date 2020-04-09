import React from "react";
import Link from "next/link";

export default () => {
  return (
    <nav>
      <ul>
        <Link href="/">
          <a>
            <li>Home</li>
          </a>
        </Link>
        <Link href="/blog">
          <a>
            <li>Blog</li>
          </a>
        </Link>
        <Link href="/postForm">
          <a>
            <li>Compose</li>
          </a>
        </Link>
      </ul>
    </nav>
  );
};
