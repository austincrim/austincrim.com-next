import Button from './Button';

const PortfolioCard = ({ project, children }) => {
    const { title, repoUrl, appUrl, image } = project;
    return (
        <div className='flex w-full p-4 text-teal-900 bg-teal-100 rounded shadow-md'>
            <div className='flex flex-col'>
                <div className='text-xl font-semibold tracking-wider'>
                    {title}
                </div>
                <div className='text-gray-700'>{children}</div>
                <div className='mt-4 space-x-3'>
                    {repoUrl ? (
                        <a href={repoUrl}>
                            <Button tabIndex='-1' dark>
                                <img
                                    className='inline mr-2'
                                    src='/images/github-logo.png'
                                    alt='github logo'
                                />
                                View Source
                            </Button>
                        </a>
                    ) : (
                        <></>
                    )}
                    {appUrl ? (
                        <a href={appUrl}>
                            <Button tabIndex='-1' light>
                                Go to App
                            </Button>
                        </a>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            {image ? <img src={image} /> : <></>}
        </div>
    );
};

export default PortfolioCard;
