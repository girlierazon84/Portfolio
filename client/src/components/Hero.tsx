// src/components/Hero.tsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import BackgroundImage from "../assets/images/DS_bg.jpg";
import ProfilePic from "../assets/images/Pic02.png";

// Container with background image
const HeroSection = styled.section`
    height: 100vh;
    width: 100%;
    background: url(${BackgroundImage}) center/cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    padding: 0 1rem;
    overflow: hidden;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(17, 24, 39, 0.65); /* overlay for better text visibility */
        z-index: 0;
    }
`;

const Content = styled(motion.div)`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProfileImage = styled(motion.img)`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid #ffffff;
    object-fit: cover;
    margin-bottom: 1.5rem;

    @media (min-width: 768px) {
        width: 200px;
        height: 200px;
    }
`;

const NameTitle = styled(motion.h1)`
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (min-width: 768px) {
        font-size: 4rem;
    }
`;

const Subtitle = styled(motion.p)`
    margin-top: 0.75rem;
    font-size: 1.2rem;
    color: #e5e7eb;

    @media (min-width: 768px) {
        font-size: 1.8rem;
    }
`;

const Tagline = styled(motion.p)`
    margin-top: 0.5rem;
    font-size: 1rem;
    font-style: italic;
    color: #9ca3af;

    @media (min-width: 768px) {
        font-size: 1.3rem;
    }
`;

const ContactButton = styled(motion.a)`
    margin-top: 1.5rem;
    padding: 0.75rem 2rem;
    border: 1px solid white;
    background: linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
    border-radius: 0.75rem;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #2563eb;
        transform: translateY(-2px);
    }
`;

const Hero: React.FC = () => {
    return (
        <HeroSection id="hero">
            <Content
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <ProfileImage
                    src={ProfilePic}
                    alt="Girlie Razon"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                />

                <NameTitle
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Hi, I'm Girlie Razon 👋
                </NameTitle>

                <Subtitle
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    Junior Data Scientist | ML Developer | BI Analyst | Data Analyst | Data Engineer | MERN Stack Developer
                </Subtitle>

                <Tagline
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                >
                    Gather. Query. Reveal.
                </Tagline>

                <ContactButton
                    href="#contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    Get in Touch
                </ContactButton>
            </Content>
        </HeroSection>
    );
};

export default Hero;
