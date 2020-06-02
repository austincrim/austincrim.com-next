import Link from 'next/link';

const BlogNav = () => {
    return (
        <nav>
            <div className='flex flex-row justify-center py-2 text-gray-700 shadow-md bg-gray-100 border-t-4 border-teal-500'>
                <Link href='/'>
                    <a className='nav-item'>Home</a>
                </Link>
                <Link href='/blog'>
                    <a className='nav-item'>Posts</a>
                </Link>
            </div>
        </nav>
    );
};

export default BlogNav;
