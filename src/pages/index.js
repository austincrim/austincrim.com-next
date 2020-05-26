import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SkillCard from '../components/SkillCard';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const Index = ({ skills, projects }) => (
    <>
        <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-167699477-1"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());

                gtag('config', 'UA-167699477-1');
            </script>

            <title>Austin Crim - Web Developer Portfolio</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta
                name="description"
                content="The portfolio of Austin Crim, a fullstack web developer"
            />
        </Head>

        <Nav />
        <Hero />

        <Section primary title="Tools I Have Used" id="skills">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10">
                {skills.map((skill, index) => (
                    <SkillCard
                        title={skill.title}
                        image={skill.imagePath}
                        alt={skill.alt}
                        key={index}
                    />
                ))}
            </div>
        </Section>
        <Section title="Things I Have Built" id="portfolio">
            <div className="grid gap-10">
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index}>
                        {project.description}
                    </ProjectCard>
                ))}
            </div>
        </Section>
        <Section primary title="Want to Chat?" id="contact">
            <div className="flex flex-col md:flex-row mx-auto justify-around w-5/6">
                <div className="p-4 text-center">
                    <div className="w-1/2 md:w-auto mx-auto text-gray-700 font-semibold text-lg">
                        Phone
                        <svg
                            className="h-6 my-2 mx-auto text-gray-500"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                    </div>
                    <div className="mt-1">(515) 203-7127</div>
                </div>
                <div className="p-4 text-center">
                    <div className="w-1/2 md:w-auto mx-auto text-gray-700 font-semibold text-lg">
                        Email
                        <svg
                            className="h-6 my-2 mx-auto text-gray-500"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <div className="mt-1">aust.crim@gmail.com</div>
                </div>
                <div className="p-4 text-center">
                    <div className="w-1/2 md:w-auto mx-auto text-gray-700 font-semibold text-lg">
                        LinkedIn
                        <svg
                            className="h-6 my-2 mx-auto text-gray-500"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <div className="mt-1 text-blue-700 hover:text-blue-500 ">
                        <a href="https://www.linkedin.com/in/austin-crim">
                            Profile
                        </a>
                    </div>
                </div>
            </div>
        </Section>

        <Footer>Designed and developed by Austin Crim</Footer>
    </>
);

export async function getStaticProps() {
    const { skills } = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), 'data/skills.json'))
    );
    const { projects } = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), 'data/projects.json'))
    );
    return {
        props: {
            skills,
            projects,
        },
    };
}

export default Index;
