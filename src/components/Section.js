import React from 'react';

const Section = props => {
    return (
        <div id={props.title.toLowerCase()} className="w-full px-6 py-12 bg-gray-200 text-gray-700">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                    {props.title}
                </h2>
                <div className="">{props.children}</div>
            </div>
        </div>
    );
};

export default Section;
