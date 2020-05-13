import fs from 'fs';
import path from 'path';
import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Skill from '../components/Skill';
import Footer from '../components/Footer';
import PortfolioCard from '../components/PortfolioCard';

const Index = ({ skills, projects }) => (
    <>
        <Head>
            <title>Austin Crim - Web Developer Portfolio</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <meta name='description' content='The portfolio of Austin Crim, a fullstack web developer'/>
        </Head>
        <Nav />
        <Hero />
        <Section primary title='Tools I Have Used' id='skills'>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10'>
                {skills.map((skill, index) => <Skill title={skill.title} image={skill.imagePath} alt={skill.alt} key={index} />)}
            </div>
        </Section>
        <Section title='Things I Have Built' id='portfolio'>
            <div className='grid gap-10'>
                {projects.map((project, index) => <PortfolioCard title={project.title} key={index}>{project.description}</PortfolioCard>)}
            </div>
        </Section>
        <Section primary title='Want to Chat?' id='contact'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            nemo in, dolor beatae facilis ratione vel! Quaerat dolor dicta
            nisi explicabo consequatur deleniti dolorum iusto! Quis esse
            explicabo ullam a? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Distinctio, neque! Porro quam cum tempore
            illum inventore iure, sit provident doloremque optio sed
            deserunt excepturi rerum facilis beatae labore dolorum
            consequuntur.
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
