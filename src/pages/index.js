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
            <title>Austin Crim - Web Developer Portfolio</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <meta name='description' content='The portfolio of Austin Crim, a fullstack web developer' />
        </Head>

        <Nav />
        <Hero />

        <Section primary title='Tools I Have Used' id='skills'>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10'>
                {skills.map((skill, index) => <SkillCard title={skill.title} image={skill.imagePath} alt={skill.alt} key={index} />)}
            </div>
        </Section>
        <Section title='Things I Have Built' id='portfolio'>
            <div className='grid gap-10'>
                {projects.map((project, index) => <ProjectCard project={project} key={index}>{project.description}</ProjectCard>)}
            </div>
        </Section>
        <Section primary title='Want to Chat?' id='contact'>
            
        </Section>

        <Footer>Designed and developed by Austin Crim</Footer>
    </>
);

export async function getStaticProps() {
    const { skills } = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/skills.json')));
    const { projects } = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/projects.json')));
    return {
        props: {
            skills,
            projects
        },
    };
}

export default Index;
