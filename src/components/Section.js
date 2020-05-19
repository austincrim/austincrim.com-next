import React from 'react';

const Section = (props) => {
    const colorStyle = props.primary
        ? 'bg-gray-200 text-gray-700'
        : 'bg-gray-700 text-gray-300';

    return (
      <div
          id={props.id}
          className={`w-full leading-loose px-10 py-12 ${colorStyle}`}
        >
          <div className='max-w-6xl mx-auto'>
              <h2
                  className={`text-3xl font-semibold mb-6 text-center md:text-left ${
                        props.primary ? 'text-teal-600' : 'text-teal-300'
                    }`}
                >
                  {props.title}
                </h2>
              {props.children}
            </div>
        </div>
    );
};


export default Section;
