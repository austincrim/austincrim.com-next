import Button from './Button';

const PortfolioCard = (props) => (
    <div className='flex w-full p-4 bg-indigo-200 text-gray-800 rounded shadow-md'>
        <div className='flex flex-col'>
            <div className='text-xl font-semibold tracking-wider'>
                {props.title}
            </div>
            <div className='text-gray-700'>
                {props.children}
            </div>
            <div className='mt-4 space-x-3'>
                <a href={props.repoUrl}>
                    <Button dark>
                        <img className='inline mr-2' src='/github-logo.png' />
                        View Source
                    </Button>
                </a>
                <Button light>Go to App</Button>
            </div>
        </div>
        <div>
            {/* <img src={props.image} /> */}
        </div>
    </div>
);

export default PortfolioCard;
