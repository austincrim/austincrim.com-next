import Button from './Button';

const Hero = () => (
    <div
        id="hero"
        className="w-full mx-auto md:pt-24 pt-10 pb-10 text-gray-700"
    >
        <div className="text-center w-full md:w-2/3 mx-auto px-4 py-8 bg-gray-100 md:rounded shadow-xl">
            <h1 className="text-4xl">
                Hi, I'm&nbsp;
                <span className="text-teal-400 font-semibold tracking-wide">
                    Austin Crim
                </span>
                ,
            </h1>
            <h2 className="text-3xl font-light">
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
