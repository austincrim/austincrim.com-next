import Link from 'next/link';
import GitHubLogo from './icons/GitHubLogo';
import Moon from './icons/Moon';
import TwitterLogo from './icons/TwitterLogo';

const Nav = () => {
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
                    <button
                        aria-label='toggle dark mode'
                        onClick={() => {
                            document.documentElement.classList.toggle('theme-dark');
                            localStorage.getItem('theme') === 'theme-dark'
                                ? (localStorage.theme = 'theme-light')
                                : (localStorage.theme = 'theme-dark');
                        }}
                    >
                        <div className='w-8 h-8 transition-colors hover:text-muted-hover dark:hover:text-gray-400'>
                            <Moon />
                        </div>
                    </button>
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
