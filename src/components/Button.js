const Button = (props) => {
    let classes =
        'btn py-2 px-4 rounded transition-all duration-150 ease-in hover:shadow-md active:duration-75 active:shadow-none';

    if (props.primary) {
        classes += ' bg-teal-600 text-white hover:bg-teal-700';
    } else if (props.secondary) {
        classes += ' bg-teal-200 text-teal-800';
    } else if (props.dark) {
        classes += ' bg-gray-800 text-gray-200 hover:bg-gray-900';
    } else if (props.light) {
        classes += ' bg-white text-gray-800 hover:bg-gray-100';
    }

    return (
        <button type="button" className={classes} tabIndex={props.tabIndex}>
            {props.children}
        </button>
    );
};

export default Button;
