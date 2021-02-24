import Link from 'next/link';
import GitHubLogo from './icons/GitHubLogo';
import Moon from './icons/Moon';
import TwitterLogo from './icons/TwitterLogo';

const Nav = () => {
    return (
        <nav className='p-10 text-gray-700 dark:text-current lg:max-w-5xl md:mx-auto md:max-w-3xl'>
            <div className='flex items-center justify-between'>
                <div className='space-x-14'>
                    <Link href='/'>
                        <a className='transition-colors hover:text-gray-500 dark:hover:text-gray-400'>
                            Home
                        </a>
                    </Link>
                    <Link href='/blog'>
                        <a className='transition-colors hover:text-gray-500 dark:hover:text-gray-400'>
                            Blog
                        </a>
                    </Link>
                </div>
                <div className='space-x-6'>
                    <button onClick={() => {
                        document.documentElement.classList.toggle('dark')
                        localStorage.theme ? localStorage.removeItem('theme') : localStorage.theme = 'dark'
                    }}>
                        <div className='w-8 h-8 transition-colors hover:text-gray-500 dark:hover:text-gray-400'>
                            <Moon />
                        </div>
                    </button>
                    <a
                        href='https://github.com/austincrim'
                        className='inline-block w-8 h-8 transition-colors hover:text-gray-500 dark:hover:text-gray-400'
                    >
                        <GitHubLogo />
                    </a>
                    <a
                        href='https://twitter.com/crim_codes'
                        className='inline-block w-8 h-8 transition-colors hover:text-gray-500 dark:hover:text-gray-400'
                    >
                        <TwitterLogo />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
