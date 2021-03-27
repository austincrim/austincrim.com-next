import GitHubLogo from './icons/GitHubLogo';

/**
 * @param {object} props
 * @param {{title: string, description: string, repoUrl: string, appUrl: string}} props.project
 */

const ProjectCard = ({ project, children }) => {
    const { title, repoUrl, appUrl } = project;
    return (
        <div className='flex flex-col justify-between py-8 space-y-8 text-gray-700 dark:text-gray-100 lg:flex-row '>
            <div className='flex flex-col'>
                <h3 className='text-xl font-semibold tracking-wider'>
                    {title}
                </h3>
                <div className='max-w-xl mt-2'>{children}</div>
            </div>

            <div className='flex flex-col items-start mt-8 space-y-5'>
                {repoUrl ? (
                    <a
                        href={repoUrl}
                        className='flex items-center transition-colors hover:text-gray-900 dark:hover:text-gray-300'
                    >
                        <span>View Source</span>
                        <span className='inline-block w-10 h-10 ml-1'>
                            <GitHubLogo />
                        </span>
                    </a>
                ) : (
                    <></>
                )}
                {appUrl ? (
                    <a
                        className='text-blue-800 transition-colors dark:text-blue-300 hover:text-blue-500 dark:hover:text-blue-400'
                        href={appUrl}
                    >
                        Go to App
                    </a>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
