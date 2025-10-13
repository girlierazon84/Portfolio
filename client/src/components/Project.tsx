// src/pages/ProjectsPage.tsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RoutingPath from "../routes/RoutingPath";
import "../../src/index.css";
import DSBackground from "../assets/images/DS_bg.jpg";
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
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-14px); }
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
        text-align: justify;
    }

    a {
        margin-top: auto;
        font-weight: 600;
        text-decoration: none;
        transition: color 0.3s ease;
        color: #a78bfa;

        &:hover {
            color: #0cc4a8;
        }
    }
`;

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

// ✅ Projects with shortened descriptions and proper PDF links
const projects = [
    {
        title: "Thesis – Predictive Modeling & App Development for Mental Health",
        link: RoutingPath.TRICHMIND,
        description:
            "Built ML pipeline (Logistic Regression, Random Forest, XGBoost) to predict relapse risk. Deployed a Streamlit app for real-time feedback.",
        internal: true,
    },
    {
        title: "Education Cost Forecasting (Sweden, 2025–2035) - Python & ML",
        link: "https://github.com/girlierazon84/Utbildningskostnader_Fodelsetal_Prognos",
        description:
            "Forecasted birth rates and education costs using ensemble models and LSTM with SCB data. Achieved R² > 0.95 and deployed via Streamlit.",
    },
    {
        title: "Big Mac Data Pipeline – CSV to SQL with Python",
        link: "https://github.com/girlierazon84/Kunskapskontroll_02_Pythonprogrammering",
        description:
            "Built modular ETL pipeline with pandas + sqlite3. Added logging, error handling, and automated testing with scheduling support.",
    },
    {
        title: "Face Expression, Age & Gender Recognition – Deep Learning",
        link: "https://github.com/girlierazon84/Deep_Learning_Kunskapskontroll_02",
        description:
            "Developed CNNs for expression, age, and gender recognition. Achieved 77% accuracy (expression), 95% (gender), MAE 3.5 (age).",
    },
    {
        title: "Predicting Volvo V60 Car Prices – R Programming",
        link: "https://github.com/girlierazon84/Kunskapskontrollen_R_Programmering",
        description:
            "Regression models in R explained 84.3% variance in car prices. RMSE ~32k–41k; gearbox variable showed marginal significance.",
    },
    {
        title: "Handwritten Digit Recognition – ML + Streamlit",
        link: "https://github.com/girlierazon84/ML_Kunskapskontroll_2",
        description:
            "Streamlit app trained on MNIST dataset. Achieved 97.64% accuracy with SVM; added preprocessing, fine-tuning, and webcam input.",
    },
    {
        title: "Comprehensive Vendor Performance – Power BI",
        link: "/assets/pdf/VendorPerformanceMetrics.pdf",
        description:
            "Built Power BI dashboards for vendor KPIs with drill-down, drill-through, and conditional formatting.",
    },
    {
        title: "Sales Insight Portal – Power BI",
        link: "/assets/pdf/SalesInsightPortal.pdf",
        description:
            "Multi-page Power BI report analyzing sales trends and revenue. Optimized for business planning.",
    },
    {
        title: "Exploring AdventureWorks 2022 – Python & SQLAlchemy",
        link: "https://github.com/girlierazon84/SQL_Kunskapskontroll_AdventureWorks2022/blob/main/Kunskapskontroll_SQL_AdventureWorks2022_Database.ipynb",
        description:
            "Analyzed AdventureWorks2022 with SQLAlchemy + Pandas. Produced summaries, visualizations, and statistical insights.",
    },
    // ✅ Web Development Projects
    {
        title: "Bookface – Full-Stack MERN Capstone",
        link: "https://github.com/girlierazon84/Bookface_Fullstack_MERN.git",
        description:
            "MERN social media platform with authentication, CRUD, and real-time features.",
    },
    {
        title: "LIA Internship Project – LaCuvee",
        link: "https://github.com/girlierazon84/LaCuvee-Projekt.git",
        description:
            "Wine/restaurant ordering platform. Focused on React UI/UX and backend integration in Agile workflow.",
    },
    {
        title: "Portfolio Website – HTML & CSS",
        link: "https://github.com/girlierazon84/Inl-mnings-Uppgift-01.git",
        description:
            "Responsive portfolio site built with semantic HTML and CSS.",
    },
    {
        title: "Car Trip Cost Calculator – Agile + UI/UX",
        link: "https://github.com/girlierazon84/Inl-mningsUppgiftWebb2/tree/main/webb2-uppgift-2021-06-27",
        description:
            "Travel cost calculator designed with Agile principles and UI/UX focus.",
    },
    {
        title: "My ToDo List – Full-Stack (Node.js + MongoDB)",
        link: "https://github.com/girlierazon84/My-TODO-List-Projekt-Front-and-Backend.git",
        description:
            "Full-stack ToDo app using Node.js, Express, and MongoDB with CRUD operations.",
    },
    {
        title: "Shopping Cart – JavaScript DOM",
        link: "https://github.com/girlierazon84/JSInlamningsUppgift1.git",
        description:
            "JavaScript shopping cart with dynamic DOM manipulation and event handling.",
    },
    {
        title: "Portfolio – MERN Stack (Personal Project)",
        link: "https://github.com/girlierazon84/Portfolio.git",
        description:
            "Personal portfolio built with MERN stack, featuring authentication and CRUD.",
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
