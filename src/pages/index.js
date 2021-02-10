import * as React from 'react';
import fs from 'fs';
import path from 'path';
import { getSortedPostsData } from '../lib/posts';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import Mail from '../components/icons/Mail';
import LinkedInLogo from '../components/icons/LinkedInLogo';
import PostPreview from '../components/PostPreview';
import Layout from '../components/Layout';

/**
 * @param {object} props
 * @param {Array<{title: string, description: string, repoUrl: string, appUrl: string}>} props.projects
 */

function Index({ projects, posts }) {
    return (
        <Layout>
            <main>
                <Hero />
                <Section title='Things I Have Built' id='portfolio'>
                    <div className='grid gap-10'>
                        {projects.map((project, index) => (
                            <ProjectCard project={project} key={index}>
                                {project.description}
                            </ProjectCard>
                        ))}
                    </div>
                </Section>
                <Section title='Things I Have Written' id='blog'>
                    <ul className='flex flex-col mt-20 space-y-20'>
                        {posts.map((post, index) => (
                            <li key={post.title}>
                                <PostPreview post={post} key={index} />
                            </li>
                        ))}
                    </ul>
                </Section>
                <Section title='Want to Chat?' id='contact'>
                    <div className='flex flex-col justify-around w-5/6 mx-auto text-gray-700 md:flex-row dark:text-gray-100'>
                        <div className='p-4 text-center'>
                            <div className='w-1/2 mx-auto text-lg font-semibold md:w-auto'>
                                Email
                                <div className='w-8 h-8 mx-auto my-2 text-gray-500'>
                                    <Mail />
                                </div>
                            </div>
                            <a
                                href='mailto:aust.crim@gmail.com'
                                className='mt-1'
                            >
                                aust.crim@gmail.com
                            </a>
                        </div>
                        <div className='p-4 text-center'>
                            <div className='w-1/2 mx-auto text-lg font-semibold md:w-auto'>
                                LinkedIn
                                <div className='w-8 h-8 mx-auto my-2 text-gray-500'>
                                    <LinkedInLogo />
                                </div>
                            </div>
                            <div className='mt-1 text-blue-800 transition-colors dark:text-blue-200 dark:hover:text-blue-300 hover:text-blue-500 '>
                                <a href='https://www.linkedin.com/in/austin-crim'>
                                    Profile
                                </a>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer>Designed and developed by Austin Crim</Footer>
        </Layout>
    );
}

export async function getStaticProps() {
    const { projects } = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), 'data/projects.json'))
    );
    const posts = getSortedPostsData();

    return {
        props: {
            projects,
            posts,
        },
    };
}

export default Index;
