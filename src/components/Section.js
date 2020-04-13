import React from 'react';

const Section = props => {
    const colorStyle = props.primary ? 'bg-gray-200 text-gray-700' : 'bg-gray-700 text-gray-300';
    
    return (
        <div id={props.title.toLowerCase()} className={`w-full px-6 py-12 ${colorStyle}`}>
            <div className="max-w-6xl mx-auto">
                <h2 className={`text-3xl font-semibold mb-6 ${props.primary ? 'text-indigo-500' : 'text-indigo-400'}`}>
                    {props.title}
                </h2>
                {props.children}
            </div>
        </div>
    );
};
 
export default Section;