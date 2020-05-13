import React from 'react';

const PortfolioCard = (props) => (
    <div className='w-full p-3 bg-indigo-200 text-gray-800 rounded shadow-md'>
        <div className='text-xl font-semibold tracking-wider'>
            {props.title}
        </div>
        <div className='text-gray-700'>
            {props.children}
        </div>
    </div>
);

export default PortfolioCard;
