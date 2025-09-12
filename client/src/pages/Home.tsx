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

// ✅ Full-width Animated Divider
const Divider = styled(motion.hr)`
    border: none;
    height: 2px;
    width: 100%; /* full width */
    margin: 2rem 0;
    border-radius: 2px;
    background: linear-gradient(225deg, #f3c408, #0cc4a8, #a78bfa);
    box-shadow: 0px 0px 12px rgba(167, 139, 250, 0.7),
        0px 0px 24px rgba(12, 196, 168, 0.5);

    @media (max-width: 768px) {
        height: 1.5px;
    }
`;

// Framer Motion variants for fade-in scroll animation
const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

// Divider animation
const dividerVariants = {
    hidden: { scaleX: 0 }, // start collapsed
    visible: { scaleX: 1 }, // expand to full width
};

const Home: React.FC = () => {
    return (
        <HomeContainer>
            {/* Hero Section */}
            <Section id="hero">
                <Hero />
            </Section>

            <Divider
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={dividerVariants}
                style={{ transformOrigin: "center" }}
            />

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

            <Divider
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={dividerVariants}
                style={{ transformOrigin: "center" }}
            />

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

            <Divider
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={dividerVariants}
                style={{ transformOrigin: "center" }}
            />

            {/* Projects Section */}
            <Section id="projects">
                <Projects />
            </Section>

            <Divider
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={dividerVariants}
                style={{ transformOrigin: "center" }}
            />

            {/* Contact Section */}
            <Section id="contact">
                <Contact />
            </Section>
        </HomeContainer>
    );
};

export default Home;
