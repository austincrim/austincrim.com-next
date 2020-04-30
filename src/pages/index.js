import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Skill from "../components/Skill";
import Footer from "../components/Footer";

const Index = () => {
    return (
        <>
            <Nav />
            <Hero />
            <Section primary title="Tools I Have Used" id="skills">
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
                    <Skill title="NodeJS" image="https://www.pikpng.com/pngl/b/430-4309640_js-logo-nodejs-logo-clipart.png" />
                    <Skill title="React" image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
                    <Skill title="Next.js" image="https://pbs.twimg.com/profile_images/1252531684353998848/6R0-p1Vf_400x400.jpg" />
                    <Skill title="COBOL" image="/server.png" />
                    <Skill title="Google Cloud" image="https://cloud.google.com/images/social-icon-google-cloud-1200-630.png" />
                    <Skill title="CI/CD" image="/cicd.png" />
                    
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

export default Index;