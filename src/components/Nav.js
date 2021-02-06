import Link from 'next/link';

const Nav = () => {
    return (
        <nav className='mt-10 text-gray-700 md:max-w-5xl md:mx-auto'>
            <div className='flex justify-between'>
                <div className='space-x-14'>
                    <Link href='/'>
                        <a className='transition-colors hover:text-gray-500'>
                            Home
                        </a>
                    </Link>
                    <Link href='/blog'>
                        <a className='transition-colors hover:text-gray-500'>
                            Blog
                        </a>
                    </Link>
                </div>
                <div className='space-x-6'>
                    <button>
                        <svg
                            className='w-8 h-8 transition-colors hover:text-gray-500'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                            />
                        </svg>
                    </button>
                    <a
                        href='https://github.com/austincrim'
                        className='inline-block'
                    >
                        <svg
                            fill='currentColor'
                            className='w-8 h-8 transition-colors hover:text-gray-500'
                            viewBox='0 0 24 24'
                        >
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z'
                            ></path>
                        </svg>
                    </a>
                    <a
                        href='https://twitter.com/crim_codes'
                        className='inline-block'
                    >
                        <svg
                            className='w-8 h-8 transition-colors hover:text-gray-500'
                            viewBox='328 355 335 276'
                            fill='currentColor'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='
                                    M 630, 425
                                    A 195, 195 0 0 1 331, 600
                                    A 142, 142 0 0 0 428, 570
                                    A  70,  70 0 0 1 370, 523
                                    A  70,  70 0 0 0 401, 521
                                    A  70,  70 0 0 1 344, 455
                                    A  70,  70 0 0 0 372, 460
                                    A  70,  70 0 0 1 354, 370
                                    A 195, 195 0 0 0 495, 442
                                    A  67,  67 0 0 1 611, 380
                                    A 117, 117 0 0 0 654, 363
                                    A  65,  65 0 0 1 623, 401
                                    A 117, 117 0 0 0 662, 390
                                    A  65,  65 0 0 1 630, 425
                                    Z'
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
