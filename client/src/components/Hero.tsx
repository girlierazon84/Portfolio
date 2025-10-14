// src/components/Hero.tsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import DSBackground from "../assets/images/DS_bg.jpg";
import ProfilePic from "../assets/images/Pic02.png";
import "../../src/index.css";

// Container with background image
const HeroSection = styled.section`
    height: 100vh;
    width: 100%;
    background: url(${DSBackground}) center/cover no-repeat;
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
        background-color: rgba(17, 24, 39, 0.65);
        z-index: 0;
    }
`;

const Content = styled(motion.div)`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 2;
`;

const ProfileImage = styled(motion.img)`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid var(--primary-color);
    object-fit: cover;
    margin-bottom: 1.5rem;

    @media (min-width: 768px) {
        width: 200px;
        height: 200px;
        margin-top: 0;
    }
`;

const NameTitle = styled(motion.h1)`
    font-size: 2rem;
    font-weight: 800;
    background-image: linear-gradient(270deg, #f3c408, #0cc4a8, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Subtitle = styled(motion.p)`
    margin-top: 0.75rem;
    font-size: 1rem;
    color: var(--primary-color);
`;

const Tagline = styled(motion.p)`
    margin-top: 0.5rem;
    font-size: 0.85rem;
    font-style: italic;
    font-weight: bold;
    color: var(--fourthly-color);

    @media (min-width: 768px) {
        font-size: 0.75rem;
    }
`;

const ButtonGroup = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
`;

const ActionButton = styled(motion.a)`
    padding: 0.75rem 1.5rem;
    border: 2px solid transparent;
    border-radius: 0.75rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    background: linear-gradient(#111827, #111827),
        linear-gradient(90deg, #f3c408, #0cc4a8, #a78bfa);
    color: var(--primary-color);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    transition: all 0.3s ease;

    &:hover {
        color: #111827;
        background: linear-gradient(90deg, #f3c408, #0cc4a8, #a78bfa);
        border-color: transparent;
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
                    Hi, I'm Girlie Quindao Razon 👋
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
                    Gather. Query. Refine.
                </Tagline>

                {/* Buttons inline */}
                <ButtonGroup>
                    <ActionButton
                        href="#contact"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        Get in Touch
                    </ActionButton>

                    <ActionButton
                        href="/assets/pdf/CV.pdf"
                        download="Girlie_Razon_CV.pdf"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                    >
                        📄 Download CV
                    </ActionButton>

                    <ActionButton
                        href="/assets/pdf/Cover_Letter.pdf"
                        download="Girlie_Razon_Cover_Letter.pdf"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                    >
                        📝 Download Cover Letter
                    </ActionButton>
                </ButtonGroup>
            </Content>
        </HeroSection>
    );
};

export default Hero;
// End of src/components/Hero.tsx
