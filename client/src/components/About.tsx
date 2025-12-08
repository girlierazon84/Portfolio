// client/src/components/About.tsx
"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import DSBackground from "../assets/images/DS_bg.jpg";


// Styled Components
const AboutSection = styled.section`
    width: 100%;
    min-height: 100vh;
    position: relative;
    padding: 6rem 1.5rem;
    background-image: url(${DSBackground.src});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-color: rgba(17, 24, 39, 0.75); /* 🔥 keep overlay */
        z-index: 0;
    }

    @media (min-width: 768px) {
        padding: 8rem 3rem;
    }
`;

const ContentWrapper = styled(motion.div)`
    position: relative;
    z-index: 1;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 4rem;
        align-items: flex-start;
    }
`;

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const Title = styled.h2`
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 0.25rem;
    text-align: center;
    background-image: linear-gradient(180deg, #f3c408, #0cc4a8, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
        font-size: 1.6rem;
    }
`;

const Paragraph = styled.p`
    font-size: 1rem;
    line-height: 1.9;
    text-align: justify;

    @media (max-width: 768px) {
        font-size: 0.85rem;
    }
`;

// Framer Motion Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

// About Component
const About: React.FC = () => {
    return (
        <AboutSection id="about">
            <ContentWrapper
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                variants={fadeInUp}
            >
                <TextContent>
                    <Title>About Me</Title>
                    <Paragraph>
                        I&apos;m <strong>Girlie Quindao Razon</strong>, a Junior Data Scientist,
                        Machine Learning Developer, and Business Intelligence Analyst based in
                        Gothenburg, Sweden. I specialize in analyzing, visualizing, and modeling
                        data to provide actionable insights and predictive solutions. My expertise
                        includes Python, R, SQL, machine learning pipelines, data visualization
                        with Power BI and Matplotlib, and full-stack web development using React,
                        Node.js, and Express.
                    </Paragraph>
                    <Paragraph>
                        With hands-on experience in projects like predictive modeling for mental
                        health applications, education cost forecasting, and advanced data analysis
                        pipelines, I aim to combine technical skills and business understanding to
                        support data-driven decision-making in professional environments.
                    </Paragraph>
                </TextContent>
            </ContentWrapper>
        </AboutSection>
    );
};

export default About;
