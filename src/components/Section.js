const Section = (props) => {
    return (
        <div
            id={props.id}
            className='w-full py-12 leading-loose text-gray-700'
        >
            <div className='max-w-6xl mx-auto'>
                <h2 className='mb-6 text-3xl font-semibold text-center text-blue-800 md:text-left'>
                    {props.title}
                </h2>
                {props.children}
            </div>
        </div>
    );
};

export default Section;
