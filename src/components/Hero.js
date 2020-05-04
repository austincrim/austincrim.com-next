import React from 'react';

const Hero = () => {
    return (
        <div id="hero" className="w-full mx-auto md:pt-24 pt-10 pb-10 text-gray-700">
            <div className="text-center w-full md:w-2/3 mx-auto px-4 py-8 bg-gray-200 md:rounded shadow-xl">
                <h1 className="text-4xl">
                    Hi, I'm{' '}
                    <span className="text-indigo-400 font-semibold tracking-wide">
                        Austin Crim
                    </span>
                    ,
                </h1>
                <h2 className="text-3xl font-light">
                    a full-stack web developer.
                    <br />Welcome to my portfolio.
                </h2>
                <div className="mt-4">
                    <button className="btn primary-btn">
                        Download Resume
                    </button>
                    <button className="btn secondary-btn">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
