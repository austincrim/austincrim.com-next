import { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <nav>
            <div className='flex justify-end bg-gray-100 shadow-md'>
                <button
                    className='m-4 md:hidden'
                    onClick={() => setExpanded(!expanded)}
                >
                    <svg
                        className='text-current text-gray-700'
                        viewBox='0 0 100 80'
                        width='40'
                        height='40'
                    >
                        <rect rx='8' width='100' height='5' />
                        <rect rx='8' y='30' width='100' height='5' />
                        <rect rx='8' y='60' width='100' height='5' />
                    </svg>
                </button>
            </div>
            <div
                className={`${
                    expanded ? 'flex flex-col' : 'hidden'
                } md:flex md:flex-row justify-center py-2 w-full md:fixed text-gray-700 shadow-md bg-gray-100 z-10 border-t-4 border-teal-500
                `}
            >
                <Link href='/'>
                    <a className='nav-item'>Home</a>
                </Link>
                <Link href='#skills'>
                    <a className='nav-item'>Skills</a>
                </Link>
                <Link href='#portfolio'>
                    <a className='nav-item'>Portfolio</a>
                </Link>
                <Link href='#contact'>
                    <a className='nav-item'>Contact</a>
                </Link>
                <Link href='/blog'>
                    <a className='nav-item'>Blog</a>
                </Link>
            </div>
        </nav>
    );
};

export default Nav;