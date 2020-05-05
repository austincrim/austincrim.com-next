import fs from 'fs';
import path from 'path';
import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Skill from "../components/Skill";
import Footer from "../components/Footer";

const Index = ({ skills }) => {
    return (
        <>
            <Nav />
            <Hero />
            <Section primary title="Tools I Have Used" id="skills">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
                    {skills.map((skill, index) => <Skill title={skill.title} image={skill.imagePath} alt={skill.alt} key={index} />)}
                </div>
            </Section>
            <Section title="Things I Have Built" id="portfolio">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                nemo in, dolor beatae facilis ratione vel! Quaerat dolor dicta
                nisi explicabo consequatur deleniti dolorum iusto! Quis esse
                explicabo ullam a? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Distinctio, neque! Porro quam cum tempore
                illum inventore iure, sit provident doloremque optio sed
                deserunt excepturi rerum facilis beatae labore dolorum
                consequuntur.
            </Section>
            <Section primary title="Want to Chat?" id="contact">
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
};

export async function getStaticProps() {
    const jsonSkills = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/skills.json')));
    return {
        props: {
            skills: jsonSkills.skills
        }
    }
}

export default Index;