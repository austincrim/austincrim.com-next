import Button from './Button';

const Hero = () => (
    <div
        id="hero"
        className="w-full pt-10 pb-10 mx-auto text-gray-700 md:pt-24"
    >
        <div className="w-full px-4 py-8 mx-auto text-center bg-white shadow-xl md:w-2/3 md:rounded">
            <h1 className="text-4xl">
                Hi, I'm&nbsp;
                <span className="font-semibold tracking-wide text-teal-400">
                    Austin Crim
                </span>
                ,
            </h1>
            <h2 className="mt-2 text-3xl font-light">
                a full-stack web developer.
                <br />
                Welcome to my portfolio.
            </h2>
            <div className="mt-4 space-x-4">
                <a href='/Austin Crim Resume.pdf' download>
                    <Button primary>Download Resume</Button>
                </a>
                <a href="#contact">
                    <Button secondary>Contact Me</Button>
                </a>
            </div>
        </div>
    </div>
);

export default Hero;
