import React from 'react';

const Button = (props) => {
    let classes = 'btn py-2 px-4 rounded transition-all duration-150 ease-in hover:shadow-md active:duration-75 active:shadow-none';

    if (props.primary) {
        classes += ' bg-indigo-600 text-white hover:bg-indigo-700';
    } else if (props.secondary) {
        classes += ' bg-indigo-200 text-indigo-800';
    } else if (props.dark) {
        classes += ' bg-gray-800 text-gray-200 hover:bg-gray-900'
    } else if (props.light) {
        classes += ' bg-gray-200 text-gray-800 hover:bg-gray-300'
    }

    return (
      <button type='button' className={classes}>
          {props.children}
        </button>
    );
};

export default Button;
