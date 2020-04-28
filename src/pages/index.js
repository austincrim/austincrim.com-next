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
            <Section primary title="Skills">
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
                    <Skill title="NodeJS">
                        asdfkj;alksdjf;alks
                    </Skill>
                    
                    <Skill title="React">
                        asfdkja;ldsf;
                    </Skill>

                    <Skill title="COBOL">
                        adsflkjas;dlfal;s
                    </Skill>
                    <Skill title="Google Cloud">
                        adfkja;ldskflakj
                    </Skill>
                </div>
            </Section>
            <Section title="Portfolio">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                nemo in, dolor beatae facilis ratione vel! Quaerat dolor dicta
                nisi explicabo consequatur deleniti dolorum iusto! Quis esse
                explicabo ullam a? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Distinctio, neque! Porro quam cum tempore
                illum inventore iure, sit provident doloremque optio sed
                deserunt excepturi rerum facilis beatae labore dolorum
                consequuntur.
            </Section>
            <Section primary title="Contact">
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
