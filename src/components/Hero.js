import Button from './Button';

const Hero = () => (
    <div className='my-28'>
        <div className='flex justify-between'>
            <div className='flex flex-col md:w-2/3 '>
                <h1 className='text-5xl'>
                    Hi, I'm&nbsp;
                    <span className='tracking-wide text-transparent bg-gradient-to-tr from-blue-400 to-blue-800 bg-clip-text'>
                        Austin Crim
                    </span>
                </h1>
                <h2 className='max-w-lg my-4 text-3xl font-light'>
                    a developer that's passionate about building great
                    experiences on the web.
                </h2>
            </div>
            <div className='flex flex-col items-start justify-center space-y-4'>
                <a
                    className='text-lg font-semibold text-blue-800 transition-colors hover:text-blue-500 group'
                    href='/Austin Crim Resume.pdf'
                    download
                >
                    <span className='mr-1'>Download Resume</span>
                    <svg
                        fill='currentColor'
                        className='inline-block align-middle transition-transform transform group-hover:translate-x-1'
                        height='16'
                        width='16'
                        viewBox='0 0 512 512'
                    >
                        <path
                            d='M322.7,128.4L423,233.4c6,5.8,9,13.7,9,22.4c0,8.7-3,16.5-9,22.4L322.7,383.6c-11.9,12.5-31.3,12.5-43.2,0
	c-11.9-12.5-11.9-32.7,0-45.2l48.2-50.4h-217C93.7,288,80,273.7,80,256c0-17.7,13.7-32,30.6-32h217l-48.2-50.4
	c-11.9-12.5-11.9-32.7,0-45.2C291.4,115.9,310.7,115.9,322.7,128.4z'
                        ></path>
                    </svg>
                </a>
                <a
                    className='text-lg font-semibold text-blue-800 transition-colors hover:text-blue-500 group'
                    href='#contact'
                >
                    <span class="mr-1">Say Hi</span>
                    <svg
                        fill='currentColor'
                        className='inline-block align-middle transition-transform transform group-hover:translate-x-1'
                        height='16'
                        width='16'
                        viewBox='0 0 512 512'
                    >
                        <path
                            d='M322.7,128.4L423,233.4c6,5.8,9,13.7,9,22.4c0,8.7-3,16.5-9,22.4L322.7,383.6c-11.9,12.5-31.3,12.5-43.2,0
	c-11.9-12.5-11.9-32.7,0-45.2l48.2-50.4h-217C93.7,288,80,273.7,80,256c0-17.7,13.7-32,30.6-32h217l-48.2-50.4
	c-11.9-12.5-11.9-32.7,0-45.2C291.4,115.9,310.7,115.9,322.7,128.4z'
                        ></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
);

export default Hero;
