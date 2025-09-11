// src/pages/Home.tsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Project";
import Contact from "../components/Contact";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6rem;
    scroll-behavior: smooth;
`;

const Section = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 1.5rem;

    @media (min-width: 768px) {
        padding: 6rem 3rem;
    }
`;

// Framer Motion variants for fade-in scroll animation
const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const Home: React.FC = () => {
    return (
        <HomeContainer>
            {/* Hero Section */}
            <Section id="hero">
                <Hero />
            </Section>

            {/* About Section with fade-in */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                variants={fadeInVariants}
            >
                <Section id="about">
                    <About />
                </Section>
            </motion.div>

            {/* Skills Section with fade-in */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                variants={fadeInVariants}
            >
                <Section id="skills">
                    <Skills />
                </Section>
            </motion.div>

            {/* Projects Section (static) */}
            <Section id="projects">
                <Projects />
            </Section>

            {/* Contact Section (static) */}
            <Section id="contact">
                <Contact />
            </Section>
        </HomeContainer>
    );
};

export default Home;
