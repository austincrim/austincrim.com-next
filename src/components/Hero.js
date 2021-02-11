import Button from './Button';
import RightArrow from './icons/RightArrow';

const Hero = () => (
        <div className='flex flex-col justify-between my-20 space-y-14 md:items-end md:flex-row'>
            <div className='flex flex-col md:w-2/3 '>
                <h1 className='text-5xl'>
                    Hi, I'm&nbsp;
                    <span className='tracking-wide text-transparent bg-gradient-to-tr from-blue-400 to-blue-800 dark:to-blue-200 bg-clip-text whitespace-nowrap'>
                        Austin Crim
                    </span>
                </h1>
                <h2 className='max-w-lg mt-4 text-3xl font-light'>
                    a developer that's passionate about building great
                    experiences on the web.
                </h2>
            </div>
            <div className='flex flex-col items-start justify-center space-y-4'>
                <a
                    className='text-lg font-semibold text-blue-800 transition-colors dark:text-blue-300 hover:text-blue-500 group'
                    href='/Austin Crim Resume.pdf'
                    download
                >
                    <span className='mr-1'>Download Resume</span>
                    <span className='inline-block align-middle transition-transform transform group-hover:translate-x-1'>
                        <RightArrow />
                    </span>
                </a>
                <a
                    className='text-lg font-semibold text-blue-800 transition-colors dark:text-blue-300 hover:text-blue-500 group'
                    href='#contact'
                >
                    <span className='mr-1'>Say Hi</span>
                    <span className='inline-block align-middle transition-transform transform group-hover:translate-x-1'>
                        <RightArrow />
                    </span>
                </a>
        </div>
    </div>
);

export default Hero;
