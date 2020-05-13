import React from 'react';

const Button = (props) => {
    let classes = 'btn py-2 px-4 mt-4 mx-2 rounded hover:shadow-md active:duration-75 active:shadow-none transition-all duration-150 ease-in';

    if (props.primary) {
        classes += ' bg-indigo-600 text-gray-200 hover:bg-indigo-700';
    } else if (props.secondary) {
        classes += ' border-2 border-indigo-500 text-indigo-700';
    }

    return (
      <button type='button' className={classes}>
          {props.children}
        </button>
    );
};

export default Button;
