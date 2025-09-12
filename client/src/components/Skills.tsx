// src/components/Skills.tsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../../src/index.css";
import DSBackground from "../assets/images/DS_bg.jpg"; // ✅ Correct path

const SkillsSection = styled.section`
    width: 100%;
    padding: 6rem 1.5rem;
    background: url(${DSBackground}) center/cover no-repeat;
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;

    &:before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.65); // darker overlay for better readability
        backdrop-filter: blur(3px);
        z-index: -1;
    }

    @media (min-width: 768px) {
        padding: 8rem 3rem;
    }
`;

const Title = styled.h2`
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 2.5rem;
    text-align: center;
    background: linear-gradient(225deg, #0cc4a8, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

    @media (min-width: 360px) {
        margin-top: 0;
    }
`;

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr; // ✅ Default single column for mobile
    gap: 1rem;
    max-width: 1000px;
    width: 100%;
    margin-top: 2rem;
    padding: 0 0.5rem;

    @media (min-width: 480px) {
        grid-template-columns: repeat(2, 1fr); // ✅ 2 columns for small tablets
        gap: 1.25rem;
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); // ✅ More columns for bigger screens
        gap: 2rem;
    }
`;

const SkillCard = styled(motion.div)`
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    padding: 1rem 0.75rem;
    border-radius: 0.85rem;
    text-align: center;
    font-weight: 600;
    font-size: 0.9rem;
    color: #f9fafb;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
    cursor: default;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-6px) scale(1.03);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.35);
        background: rgba(255, 255, 255, 0.12);
    }

    @media (max-width: 480px) {
        font-size: 0.85rem;
    }
`;

const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const skills = [
    "Python",
    "R",
    "SQL",
    "Machine Learning",
    "Deep Learning",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Scikit-learn",
    "Keras",
    "TensorFlow",
    "Power BI",
    "Data Analysis",
    "Predictive Modeling",
    "Data Cleaning",
    "Git & GitHub",
    "MongoDB",
    "Express",
    "React",
    "Node.js",
    "JavaScript",
    "HTML & CSS",
    "MS Excel",
];

const Skills: React.FC = () => {
    return (
        <SkillsSection id="skills">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                variants={fadeInVariants}
            >
                <Title>My Skills & Expertise</Title>
                <SkillsGrid>
                    {skills.map((skill, idx) => (
                        <SkillCard
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            {skill}
                        </SkillCard>
                    ))}
                </SkillsGrid>
            </motion.div>
        </SkillsSection>
    );
};

export default Skills;
