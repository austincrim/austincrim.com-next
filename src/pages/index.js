import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Footer from '../components/Footer';

const Index = () => {
    return (
        <>
            <Nav />
            <Hero />
            <Section primary title="Skills">
                <div className="flex flex-wrap">
                    <div className="p-4 shadow-inner rounded">
                        <h4 className="text-xl">NodeJS</h4>
                        asdkfljad;lkfjl;dskj;ladjf
                    </div>
                    <div className="p-4 shadow-inner rounded">
                        <h4 className="text-xl">React</h4>
                        asdkfljad;lkfjl;dskj;ladjf
                    </div>
                    <div className="p-4 shadow-inner rounded">
                        <h4 className="text-xl">COBOL</h4>
                        asdkfljad;lkfjl;dskj;ladjf
                    </div>
                    <div className="p-4 shadow-inner rounded">
                        <h4 className="text-xl">Google Cloud</h4>
                        asdkfljad;lkfjl;dskj;ladjf
                    </div>
                </div>    
            </Section>
            <Section title="Portfolio">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed nemo in, dolor beatae facilis ratione vel! Quaerat dolor dicta nisi explicabo consequatur deleniti dolorum iusto! Quis esse explicabo ullam a?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, neque! Porro quam cum tempore illum inventore iure, sit provident doloremque optio sed deserunt excepturi rerum facilis beatae labore dolorum consequuntur.
            </Section>
            <Section primary title="Contact">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed nemo in, dolor beatae facilis ratione vel! Quaerat dolor dicta nisi explicabo consequatur deleniti dolorum iusto! Quis esse explicabo ullam a?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, neque! Porro quam cum tempore illum inventore iure, sit provident doloremque optio sed deserunt excepturi rerum facilis beatae labore dolorum consequuntur.
            </Section>
            <Footer>
                Designed and developed by Austin Crim
            </Footer>
        </>
    );
};

export default Index;