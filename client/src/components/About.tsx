// src/components/About.tsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import DSBackground from "../assets/images/DS_bg.jpg";
import "../../src/index.css";

const AboutSection = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    padding: 8rem 1.5rem;
    background-image: url(${DSBackground});
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
        background-color: rgba(17, 24, 39, 0.75); // overlay for readability
        z-index: 0;
    }

    @media (min-width: 768px) {
        padding: 10rem 3rem;
    }
`;

const ContentWrapper = styled(motion.div)`
    position: relative;
    z-index: 1;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;

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
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    text-align: center;
    background-image: linear-gradient(180deg, #f3c408, #0cc4a8, #a78bfa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

    @media (min-width: 360px) {
        font-size: 2rem;
        margin-top: 0;
    }
`;

const Paragraph = styled.p`
    font-size: 2rem;
    line-height: 2;
    text-align: justify;

    @media (min-width: 360px) {
        font-size: 1rem;
    }
`;

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

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
                        I'm <strong>Girlie Quindao Razon</strong>, a Junior Data Scientist, Machine Learning
                        Developer, and Business Intelligence Analyst based in Gothenburg, Sweden. I specialize in
                        analyzing, visualizing, and modeling data to provide actionable insights and
                        predictive solutions. My expertise includes Python, R, SQL, machine learning pipelines,
                        data visualization with Power BI and Matplotlib, and full-stack web development using
                        React, Node.js, and Express.
                    </Paragraph>
                    <Paragraph>
                        With hands-on experience in projects like predictive modeling for mental health
                        applications, education cost forecasting, and advanced data analysis pipelines, I aim to
                        combine technical skills and business understanding to support data-driven decision-making
                        in professional environments.
                    </Paragraph>
                </TextContent>
            </ContentWrapper>
        </AboutSection>
    );
};

export default About;
