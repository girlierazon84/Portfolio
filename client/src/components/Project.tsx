// client/src/components/Project.tsx

"use client";

import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import DSBackground from "../assets/images/DS_bg.jpg";
import Pic01 from "../assets/images/Pic01.png";


// =======================
// Styled Components
// =======================
// Section for Projects with background and blur effect
const ProjectsSection = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 5rem 1.5rem;
    background: url(${DSBackground.src}) center/cover no-repeat;
    position: relative;
    display: flex;
    justify-content: center;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: transparent;
        backdrop-filter: blur(25px);
        z-index: 0;
    }
`;

// Container to center content and set max width
const Container = styled.div`
    position: relative;
    z-index: 1;
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

// Header wrapper for title and image
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

// Title styling
const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    margin-right: 9rem;
    background-image: linear-gradient(270deg, #f3c408, #0cc4a8, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;

    @media (max-width: 820px) {
        font-size: 2.1rem;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
        margin-right: 0;
    }

    @media (max-width: 376px) {
        font-size: 1.7rem;
    }
`;

// Image wrapper with animation
const ImageWrapper = styled(motion.div)`
    flex-shrink: 0;

    @media (max-width: 768px) {
        display: none;
    }
`;

// Floating animation for the image
const HeroImage = styled(Image)`
    max-width: 250px;
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
`;

// Grid layout for projects
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

// Individual project card styling
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
        text-align: justify;
    }

    @media (max-width: 768px) {
        padding: 1rem;

        h3 {
            font-size: 0.9rem;
        }

        p {
            font-size: 0.75rem;
        }
    }
`;

// Shared styles for project links
const linkStyles = css`
    margin-top: auto;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s ease;
    color: #a78bfa;

    &:hover {
        color: #0cc4a8;
    }

    @media (max-width: 768px) {
        font-size: 0.85rem;
    }
`;

// Internal link styled component
const ProjectInternalLink = styled(Link)`
    ${linkStyles}
`;

// External link styled component
const ProjectExternalLink = styled.a`
    ${linkStyles}
`;

// =======================
// Animation variants
// =======================

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

// =======================
// Types & Data
// =======================

type Project = {
    title: string;
    link: string;
    description: string;
    internal?: boolean;
};

// Sample project data
const projects: Project[] = [
    {
        title: "Thesis – Predictive Modeling & App Development for Mental Health",
        link: "/projects/trichmind",
        internal: true,
        description:
            "TrichMind is my thesis project: a supervised ML pipeline (Logistic Regression, Random Forest, Gradient Boosting, MLP) that estimates relapse risk in trichotillomania from self-reported survey data, delivered via a MERN + FastAPI application."
    },
    {
        title: "EduForecast – Education Costs & Birth Growth (Sweden, 1968–2030)",
        link: "/projects/edu-forecast",
        internal: true,
        description:
            "Python forecasting pipeline that models births per region, derives age 0–19 populations, and projects grundskola and gymnasieskola education costs in current vs fixed prices. Results power a Streamlit dashboard and CSV artifacts for policy-style analysis."
    },
    {
        title: "Big Mac Data Pipeline – CSV to SQL with Python",
        link: "https://github.com/girlierazon84/Kunskapskontroll_02_Pythonprogrammering",
        description:
            "Built a modular ETL pipeline with pandas and sqlite3. Added logging, error handling, unit tests, and scheduling support to keep the dataset fresh."
    },
    {
        title: "Face Expression, Age & Gender Recognition – Deep Learning",
        link: "https://github.com/girlierazon84/Deep_Learning_Kunskapskontroll_02",
        description:
            "Developed CNNs for facial expression, age, and gender recognition. Achieved 77% accuracy (expression), 95% (gender), and MAE ≈ 3.5 years for age estimation."
    },
    {
        title: "Predicting Volvo V60 Car Prices – R Programming",
        link: "https://github.com/girlierazon84/Kunskapskontrollen_R_Programmering",
        description:
            "Regression models in R explaining 84.3% of price variance. Evaluated RMSE, checked assumptions, and interpreted variables such as gearbox type and mileage."
    },
    {
        title: "Handwritten Digit Recognition – ML + Streamlit",
        link: "https://github.com/girlierazon84/ML_Kunskapskontroll_2",
        description:
            "Built a Streamlit app on MNIST with SVM and other models. Achieved 97.64% accuracy, added preprocessing, hyperparameter tuning, and interactive prediction."
    },
    {
        title: "Comprehensive Vendor Performance – Power BI",
        link: "/assets/pdf/VendorPerformanceMetrics.pdf",
        description:
            "Power BI dashboards for vendor KPIs with drill-down, drill-through, and conditional formatting for risk and performance monitoring."
    },
    {
        title: "Sales Insight Portal – Power BI",
        link: "/assets/pdf/SalesInsightPortal.pdf",
        description:
            "Multi-page Power BI report analysing sales trends, revenue, and customer segments to support strategic planning."
    },
    {
        title: "Exploring AdventureWorks 2022 – Python & SQLAlchemy",
        link:
            "https://github.com/girlierazon84/SQL_Kunskapskontroll_AdventureWorks2022/blob/main/Kunskapskontroll_SQL_AdventureWorks2022_Database.ipynb",
        description:
            "Used SQLAlchemy and pandas to explore the AdventureWorks2022 database, producing descriptive stats, visualisations, and business-oriented insights."
    },
    {
        title: "Bookface – Full-Stack MERN Capstone",
        link: "https://github.com/girlierazon84/Bookface_Fullstack_MERN.git",
        description:
            "Social media platform built with the MERN stack, including authentication, CRUD posts, and real-time-style interactions."
    },
    {
        title: "Portfolio Website – HTML & CSS",
        link: "https://github.com/girlierazon84/Inl-mnings-Uppgift-01.git",
        description:
            "Responsive portfolio site created with clean semantic HTML, CSS, and a focus on layout and accessibility."
    },
    {
        title: "Car Trip Cost Calculator – Agile + UI/UX",
        link:
            "https://github.com/girlierazon84/Inl-mningsUppgiftWebb2/tree/main/webb2-uppgift-2021-06-27",
        description:
            "Travel cost calculator designed using Agile practices. Focus on UI/UX flows, input validation, and clear summaries for the user."
    },
    {
        title: "My ToDo List – Full-Stack (Node.js + MongoDB)",
        link:
            "https://github.com/girlierazon84/My-TODO-List-Projekt-Front-and-Backend.git",
        description:
            "Full-stack ToDo application with Node.js, Express, and MongoDB, including CRUD operations and a simple UI layer."
    },
    {
        title: "Shopping Cart – JavaScript DOM",
        link: "https://github.com/girlierazon84/JSInlamningsUppgift1.git",
        description:
            "Vanilla JavaScript shopping cart exploring DOM manipulation, events, and basic state management in the browser."
    },
    {
        title: "Portfolio – MERN Stack (Personal Project)",
        link: "https://github.com/girlierazon84/Portfolio.git",
        description:
            "Earlier version of my personal portfolio built with the MERN stack, featuring authentication and protected admin views."
    }
];

// =======================
// Component
// =======================

const Projects: React.FC = () => {
    return (
        <ProjectsSection id="projects">
            <Container>
                <HeaderWrapper>
                    <ImageWrapper
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        variants={fadeIn}
                    >
                        <HeroImage
                            src={Pic01}
                            alt="Illustration of data and web projects"
                            width={250}
                            height={250}
                            priority={false}
                        />
                    </ImageWrapper>
                    <Title>Capstone Projects</Title>
                </HeaderWrapper>

                <ProjectsGrid>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            variants={fadeIn}
                        >
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            {project.internal ? (
                                <ProjectInternalLink href={project.link}>
                                    View project →
                                </ProjectInternalLink>
                            ) : (
                                <ProjectExternalLink
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View project →
                                </ProjectExternalLink>
                            )}
                        </ProjectCard>
                    ))}
                </ProjectsGrid>
            </Container>
        </ProjectsSection>
    );
};

export default Projects;
