import React from 'react';

const Skill = (props) => (
  <div className='p-4 bg-gray-300 text-gray-800 text-center shadow rounded skill border-b-4 border-indigo-700'>
      <img style={{ height: '100px' }} className='mb-6 mx-auto' src={props.image} alt={props.alt} />
      <h4 className='text-xl tracking-wider'>{props.title}</h4>
      <div className='text-gray-600'>{props.children}</div>
    </div>
);

export default Skill;
