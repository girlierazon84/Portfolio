// src/components/Skills.tsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
    SiPython, SiR, SiMongodb, SiExpress, SiReact, SiNodedotjs,
    SiJavascript, SiHtml5, SiTensorflow, SiKeras, SiScikitlearn,
    SiNumpy, SiPandas, SiGithub
} from "react-icons/si";
import { FaDatabase, FaChartBar, FaMicrosoft } from "react-icons/fa";
import { IconType } from "react-icons";
import DSBackground from "../assets/images/DS_bg.jpg";

interface Skill {
    name: string;
    level: number;
    icon: IconType;
    color: string;
}

const skills: Skill[] = [
    { name: "Python", level: 85, icon: SiPython, color: "#3776AB" },
    { name: "R", level: 70, icon: SiR, color: "#276DC3" },
    { name: "SQL", level: 80, icon: FaDatabase, color: "#4DB33D" },
    { name: "Machine Learning", level: 75, icon: SiScikitlearn, color: "#F7931E" },
    { name: "Deep Learning", level: 65, icon: SiTensorflow, color: "#FF6F00" },
    { name: "Pandas", level: 85, icon: SiPandas, color: "#150458" },
    { name: "NumPy", level: 80, icon: SiNumpy, color: "#013243" },
    { name: "Matplotlib", level: 70, icon: FaChartBar, color: "#FFB703" },
    { name: "Seaborn", level: 70, icon: FaChartBar, color: "#268bd2" },
    { name: "Plotly", level: 65, icon: FaChartBar, color: "#3b5998" },
    { name: "Keras", level: 65, icon: SiKeras, color: "#D00000" },
    { name: "TensorFlow", level: 60, icon: SiTensorflow, color: "#FF6F00" },
    { name: "Power BI", level: 80, icon: FaChartBar, color: "#F2C811" },
    { name: "Data Analysis", level: 85, icon: FaChartBar, color: "#0cc4a8" },
    { name: "Predictive Modeling", level: 75, icon: FaChartBar, color: "#a78bfa" },
    { name: "Data Cleaning", level: 80, icon: FaChartBar, color: "#f3c408" },
    { name: "Git & GitHub", level: 70, icon: SiGithub, color: "#181717" },
    { name: "MongoDB", level: 65, icon: SiMongodb, color: "#47A248" },
    { name: "Express", level: 60, icon: SiExpress, color: "#000000" },
    { name: "React", level: 70, icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", level: 65, icon: SiNodedotjs, color: "#68A063" },
    { name: "JavaScript", level: 75, icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML & CSS", level: 80, icon: SiHtml5, color: "#E34F26" },
    { name: "MS Excel", level: 85, icon: FaMicrosoft, color: "#217346" },
];

// ---------------- Styled Components ---------------- //
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
        background: rgba(0, 0, 0, 0.65);
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
    background-image: linear-gradient(270deg, #f3c408, #0cc4a8, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
        margin-top: 0;
        font-size: 1.5rem;
    }
`;

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 1000px;
    width: 100%;
    margin-top: 2rem;
    padding: 0 0.5rem;

    @media (min-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.25rem;
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
    }
`;

const SkillCard = styled(motion.div)`
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    padding: 1.25rem 1rem;
    border-radius: 1rem;
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
`;

const SkillName = styled.p`
    margin-top: 0.5rem;
`;

const SkillLevel = styled.span`
    font-size: 0.8rem;
    margin-top: 0.25rem;
    display: block;
`;

const ProgressBar = styled.div<{ level: number; color: string }>`
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 9999px;
    height: 8px;
    margin-top: 0.75rem;
    overflow: hidden;

    &:after {
        content: "";
        display: block;
        height: 100%;
        width: ${({ level }) => level}%;
        background: ${({ color }) => color};
        border-radius: 9999px;
    }
`;

// ---------------- Animation ---------------- //
const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

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
                            {React.createElement(skill.icon as React.ComponentType<{ color?: string; size?: number }>, {
                                color: skill.color,
                                size: 40,
                            })}
                            <SkillName>{skill.name}</SkillName>
                            <ProgressBar level={skill.level} color={skill.color} />
                            <SkillLevel>{skill.level}%</SkillLevel>
                        </SkillCard>
                    ))}
                </SkillsGrid>
            </motion.div>
        </SkillsSection>
    );
};

export default Skills;
