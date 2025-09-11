// src/components/projects/TrichMind.tsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// ✅ Use your uploaded mockup here
import TrichMindImage from "../../assets/images/mock_up.png";

const ProjectContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background: rgba(17, 24, 39, 0.85);
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
    max-width: 1000px;
    margin: 0 auto;
    color: #f9fafb;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

const ProjectImage = styled.img`
    width: 100%;
    max-width: 450px;
    border-radius: 1rem;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0,0,0,0.5);
`;

const ProjectContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Title = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: #fbbf24;
`;

const Subtitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 500;
    color: #e5e7eb;
`;

const Description = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    color: #d1d5db;
`;

const TechList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 0.5rem;

    li {
        background: rgba(55, 65, 81, 0.8);
        padding: 0.4rem 0.8rem;
        border-radius: 0.5rem;
        font-size: 0.9rem;
    }
`;

const TrichMind: React.FC = () => {
    return (
        <ProjectContainer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            {/* Image */}
            <ProjectImage src={TrichMindImage} alt="TrichMind App Mockup" />

            {/* Content */}
            <ProjectContent>
                <Title>TrichMind</Title>
                <Subtitle>
                    Machine Learning-Based Prediction of Relapse Risk in Trichotillomania
                </Subtitle>
                <Description>
                    TrichMind is my bachelor thesis project — a mobile and web prototype that predicts
                    relapse risk in trichotillomania (TTM) using machine learning. The app combines
                    user-reported emotional triggers, environments, and coping strategies to provide
                    real-time relapse risk levels and personalized support.
                </Description>
                <Description>
                    The machine learning pipeline included Logistic Regression, Random Forest,
                    Gradient Boosting, and XGBoost, achieving up to <b>96% accuracy</b>.
                    The app was deployed with <b>Streamlit</b>, demonstrating how predictive
                    analytics can assist mental health management.
                </Description>

                <TechList>
                    <li>Python (scikit-learn, XGBoost)</li>
                    <li>Pandas & NumPy</li>
                    <li>Streamlit (Web + Mobile)</li>
                    <li>Matplotlib & Seaborn</li>
                    <li>Feature Engineering</li>
                    <li>Machine Learning Models</li>
                </TechList>
            </ProjectContent>
        </ProjectContainer>
    );
};

export default TrichMind;
