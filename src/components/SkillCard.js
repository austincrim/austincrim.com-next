const Skill = ({ title, children }) => (
    <div className='flex items-center justify-center p-4 text-gray-800'>
        <h4 className='text-xl tracking-wider'>{title}</h4>
        <div className='text-gray-600'>{children}</div>
    </div>
);

export default Skill;
