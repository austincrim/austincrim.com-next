const Button = (props) => {
    let classes =
        'px-4 py-2 rounded hover:-translate-y-1 hover:shadow active:translate-y-0 active:shadow-none transform transition-all focus:ring'

    if (props.primary) {
        classes += ' bg-blue-800 text-white hover:bg-blue-700 ';
    } else if (props.secondary) {
        classes += ' bg-blue-200 text-blue-800 ';
    } else if (props.dark) {
        classes += ' bg-gray-800 text-gray-200 hover:bg-gray-900 dark:hover:bg-gray-600 ';
    } else if (props.light) {
        classes += ' bg-gray-100 text-gray-800 hover:bg-gray-100 ';
    }

    if (props.className) classes += props.className

    return (
        <button type="button" className={classes} tabIndex={props.tabIndex}>
            {props.children}
        </button>
    );
};

export default Button;
