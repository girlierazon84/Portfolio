// src/pages/ProjectsPage.tsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RoutingPath from "../routes/RoutingPath";
import "../../src/index.css";
import DSBackground from "../assets/images/DS_bg.jpg";
import Dashboard from "../assets/images/dashboard.png";
import Pic01 from "../assets/images/Pic01.png";

const ProjectsSection = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 5rem 1.5rem;
    background: url(${DSBackground}) center/cover no-repeat;
    position: relative;
    display: flex;
    justify-content: center;

    &:before {
        content: "";
        position: absolute;
        inset: 0;
        background: transparent;
        backdrop-filter: blur(25px);
        z-index: 0;
    }
`;

const Container = styled.div`
    position: relative;
    z-index: 1;
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1.5rem;
    }
`;

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    margin-right: 9rem;
    background-image: linear-gradient(270deg, #f3c408, #0cc4a8, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 2rem;
        margin-right: 0;
    }
`;

const ImageWrapper = styled(motion.div)`
    flex-shrink: 0;
    img {
        width: 250px;
        max-width: 100%;
        height: auto;
        animation: float 4s ease-in-out infinite;

        @keyframes float {
            0%,
            100% {
                transform: translateY(0);
        }
        50% {
            transform: translateY(-14px);
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    width: 100%;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const ProjectCard = styled(motion.div)`
    background: transparent;
    backdrop-filter: blur(25px);
    padding: 1.5rem;
    border: 1px solid var(--fourthly-color);
    border-radius: 1rem;
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-6px) scale(1.02);
        box-shadow: 0 12px 24px var(--fourthly-color);
    }

    h3 {
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        background-image: linear-gradient(270deg, #f3c408, #0cc4a8, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p {
        font-size: 0.95rem;
        line-height: 1.5;
    }

    a {
        margin-top: auto;
        color: #a78bfa;
        font-weight: 600;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: #0cc4a8;
        }
    }
`;

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const projects = [
    {
        title: "Thesis – Predictive Modeling & App Development for Mental Health",
        link: RoutingPath.TRICHMIND,
        description:
            "Developed a ML pipeline (Logistic Regression, Random Forest, XGBoost) to predict relapse risk based on emotional and behavioral user-reported data. Collected and preprocessed survey/forum data, identified triggers, and deployed a Streamlit prototype for real-time feedback.",
        internal: true,
    },
    {
        title: "LIA Internship – Power BI Data Analysis & Reporting",
        description:
            "Developed interactive Power BI dashboards analyzing case volume, workload, and revenue KPIs. Integrated case data, implemented dynamic filters and DAX-based calculations, delivering insights for staffing and planning.",
        externalImage: Dashboard, // ✅ special key for direct image link
    },
    {
        title: "Education Cost Forecasting (Sweden, 2025–2035)",
        link: "https://github.com/girlierazon84/Utbildningskostnader_Fodelsetal_Prognos",
        description:
            "Built forecasting pipeline with ensemble models and LSTM to predict birth rates and education costs. Integrated SCB data into SQLite, achieved R² > 0.95, and deployed results via an interactive Streamlit dashboard.",
    },
];

const ProjectsPage: React.FC = () => {
    return (
        <ProjectsSection>
            <Container>
                <HeaderWrapper>
                    <ImageWrapper
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        variants={fadeIn}
                    >
                        <img src={Pic01} alt="Projects Illustration" />
                    </ImageWrapper>
                    <Title>Capstone Projects</Title>
                </HeaderWrapper>
                <ProjectsGrid>
                    {projects.map((proj, idx) => (
                        <ProjectCard
                            key={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            variants={fadeIn}
                        >
                            <h3>{proj.title}</h3>
                            <p>{proj.description}</p>
                            {proj.internal ? (
                                <Link to={proj.link}>View Project →</Link>
                            ) : proj.externalImage ? (
                                <a
                                    href={proj.externalImage}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Dashboard →
                                </a>
                            ) : (
                                proj.link && (
                                    <a
                                        href={proj.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Project →
                                    </a>
                                )
                            )}
                        </ProjectCard>
                    ))}
                </ProjectsGrid>
            </Container>
        </ProjectsSection>
    );
};

export default ProjectsPage;
