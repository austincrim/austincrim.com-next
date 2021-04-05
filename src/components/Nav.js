import * as React from 'react';
import Link from 'next/link';
import { GitHubLogo, TwitterLogo, ColorSwatch } from './icons';
import ThemePicker from './ThemePicker';

const Nav = () => {
    const [showPicker, setShowPicker] = React.useState(false);
    return (
        <nav className='p-10 text-muted lg:max-w-5xl md:mx-auto md:max-w-3xl'>
            <div className='flex items-center justify-between'>
                <div className='space-x-14'>
                    <Link href='/'>
                        <a className='transition-colors hover:text-muted-hover dark:hover:text-gray-400'>
                            Home
                        </a>
                    </Link>
                    <Link href='/blog'>
                        <a className='transition-colors hover:text-muted-hover dark:hover:text-gray-400'>
                            Blog
                        </a>
                    </Link>
                </div>
                <div className='space-x-6'>
                    <ThemePicker />
                    <a
                        aria-label="austin crim's github profile"
                        href='https://github.com/austincrim'
                        className='inline-block w-8 h-8 transition-colors hover:text-muted-hover dark:hover:text-gray-400'
                    >
                        <GitHubLogo />
                    </a>
                    <a
                        aria-label="austin crim's twitter profile"
                        href='https://twitter.com/crim_codes'
                        className='inline-block w-8 h-8 transition-colors hover:text-muted-hover dark:hover:text-gray-400'
                    >
                        <TwitterLogo />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
