// src/components/projects/TrichMind.tsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import DSBackground from "../../assets/images/DS_bg.jpg";
import TrichMindLogo from "../../assets/images/app_logo.png";

import BestModelReport from "../../assets/images/best_model_classification_report.png";
import Demographics from "../../assets/images/demographics.png";
import CorrHeatmap from "../../assets/images/corr_heatmap.png";
import Confusion from "../../assets/images/confusion.png";
import BehaviourAwareness from "../../assets/images/behaviour_freq_awareness.png";
import MockUp from "../../assets/images/mock_up.png";
import "../../../src/index.css";

const ProjectSection = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 3rem 1.5rem;
    background: url(${DSBackground}) center/cover no-repeat;
    position: relative;
    display: flex;
    justify-content: center;

    &:before {
        content: "";
        position: absolute;
        inset: 0;
        backdrop-filter: blur(25px);
        z-index: 0;
    }
`;

const Container = styled.div`
    position: relative;
    z-index: 1;
    max-width: 1100px;
    width: 100%;
    background: transparent;
    box-shadow: 0 8px 24px rgba(67, 66, 66, 0.6);
    border-radius: 1rem;
    padding: 3rem;
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media (max-width: 768px) {
        padding: 1.5rem;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;

    img {
        width: 250px;
        height: auto;

        @media (max-width: 768px) {
            width: 200px;
            height: 230px;
        }
    }

    @media (max-width: 768px) {
        gap: 0;
    }
`;

const Subtitle = styled.h2`
    font-size: 1.85rem;
    font-weight: 500;
    color: var(--primary-color);

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

const Section = styled(motion.section)`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3 {
        font-size: 1.6rem;
        font-weight: 700;
        background-image: linear-gradient(225deg, #0cc4a8, #f3c408, #a78bfa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

        @media (max-width: 768px) {
            font-size: 1.25rem;
            font-weight: 400;
        }
    }

    p,
    li {
        font-size: 1rem;
        line-height: 2;
        color: var(--primary-color);
        text-align: justify;

        @media (max-width: 768px) {
            font-size: 0.85rem;
            line-height: 1.5;
        }
    }

    ul {
        list-style: disc;
        margin-left: 1.5rem;
    }

    img {
        margin-top: 0;
        border-radius: 0.5rem;
        width: 100%;
        object-fit: contain;

        @media (max-width: 768px) {
            height: 250px;
            top: 0;
            align-self: center;
        }
    }
`;

const GitHubButton = styled.a`
    display: inline-block;
    margin: 2rem auto 0;
    padding: 0.75rem 2rem;
    background: transparent;
    color: var(--primary-color);
    font-weight: 700;
    text-decoration: none;
    border-radius: 0.75rem;
    text-align: center;
    border: 2px solid transparent;
    background-image: linear-gradient(#111827, #111827),
        linear-gradient(90deg, #f3c408, #0cc4a8, #a78bfa);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    transition: all 0.3s ease;

    &:hover {
        color: #111827;
        background: linear-gradient(90deg, #f3c408, #0cc4a8, #a78bfa);
        border-color: transparent;
        transform: translateY(-4px);
    }
`;

const TrichMind: React.FC = () => {
    return (
        <ProjectSection>
            <Container>
                <Header>
                    <img src={TrichMindLogo} alt="TrichMind Logo" />
                    <Subtitle>
                        Machine Learning-Based Prediction of Relapse Risk in Trichotillomania
                    </Subtitle>
                </Header>

                {/* Abstract */}
                <Section>
                    <h3>Abstract</h3>
                    <p>
                        This thesis investigates how machine learning can predict relapse risk in individuals
                        with trichotillomania (TTM), a body-focused repetitive behaviour (BFRB). Using
                        user-reported data on emotions, environments, and coping strategies, the study
                        identified stress, anxiety, and solitude as key triggers of pulling episodes.
                        Random Forest and Logistic Regression achieved the highest predictive accuracy.
                        A prototype app, <b>TrichMind</b>, was developed to deliver real-time risk predictions
                        and personalized coping support to improve emotional awareness and self-management.
                    </p>
                </Section>

                {/* Introduction */}
                <Section>
                    <h3>Introduction</h3>
                    <p>
                        Trichotillomania is characterized by recurrent hair-pulling that can cause visible
                        hair loss and emotional distress. It affects 1–2% of the population, often beginning
                        in adolescence, yet remains under-researched. Leveraging machine learning on
                        self-reported emotional and behavioural data presents a new opportunity for
                        early detection and digital support. This project explores predictive modelling
                        for relapse risk and integrates the results into an accessible self-help tool.
                    </p>
                </Section>

                {/* Theory */}
                <Section>
                    <h3>Theory</h3>
                    <p>
                        The project evaluated several classical ML algorithms for multi-class classification:
                    </p>
                    <ul>
                        <li><b>Logistic Regression</b> – simple baseline model, effective for small datasets.</li>
                        <li><b>Random Forest</b> – ensemble of decision trees, robust to overfitting, high accuracy.</li>
                        <li><b>Gradient Boosting / XGBoost</b> – sequential tree-based models, handled class imbalance well.</li>
                    </ul>
                    <p>
                        Deep neural networks were not applied due to limited dataset size but are recommended for future studies.
                    </p>
                </Section>

                {/* Method */}
                <Section>
                    <h3>Method</h3>
                    <ul>
                        <li><b>Data Collection:</b> Public forums, Google Trends, and an online survey (123 responses).</li>
                        <li><b>Preprocessing:</b> Missing value imputation, encoding, scaling, 80/20 train-test split.</li>
                        <li><b>Model Training:</b> Logistic Regression, Random Forest, Gradient Boosting, XGBoost.</li>
                        <li><b>Evaluation:</b> Accuracy, precision, recall, F1-score, confusion matrix analysis.</li>
                        <li><b>Deployment:</b> Best model deployed within a Streamlit-based web/mobile prototype app.</li>
                    </ul>
                </Section>

                {/* EDA */}
                <Section>
                    <h3>Exploratory Data Analysis (EDA)</h3>
                    <p>
                        EDA was conducted to understand demographics, behavioural patterns, and feature relationships
                        before training models. This informed both feature selection and model choice.
                    </p>
                    <p>
                        <b>Demographics:</b> Most participants were young (20–30), female, and based in the USA.
                        Many were students or unemployed, aligning with known TTM prevalence trends.
                    </p>
                    <img src={Demographics} alt="Survey Demographics" />
                    <p>
                        <b>Behavioural Features:</b> Pulling frequency was high for most respondents,
                        while awareness during episodes was often low to moderate—suggesting many pulling
                        behaviours occur automatically, without full conscious control.
                    </p>
                    <img src={BehaviourAwareness} alt="Pulling Frequency and Awareness" />
                    <p>
                        <b>Correlations:</b> Age and Years Since Onset showed a strong positive correlation (r ≈ 0.87),
                        and both moderately correlated with Severity (r ≈ 0.48–0.55). Frequency and Awareness
                        had weak correlation with Severity.
                    </p>
                    <img src={CorrHeatmap} alt="Feature Correlation Heatmap" />
                    <p>
                        <b>Insight:</b> Chronicity (longer history) appears more predictive of severity than
                        current frequency or awareness, indicating that early intervention could prevent severity escalation.
                    </p>
                </Section>

                {/* Results */}
                <Section>
                    <h3>Results</h3>
                    <p>
                        Ensemble methods performed best: Random Forest achieved the highest accuracy (96%),
                        while Gradient Boosting and XGBoost offered better balance across classes.
                        Logistic Regression achieved strong accuracy overall but underperformed on the
                        medium-risk class due to imbalance.
                    </p>
                    <img src={BestModelReport} alt="Best Model Classification Report" />
                    <img src={Confusion} alt="Confusion Matrix" />
                    <p>
                        These models were integrated into the <b>TrichMind</b> app, which provides
                        real-time relapse risk predictions, emotional tracking, and personalized coping strategies.
                    </p>
                    <img src={MockUp} alt="TrichMind App Mockup" />
                </Section>

                {/* Discussion */}
                <Section>
                    <h3>Discussion</h3>
                    <p>
                        Findings reinforce that emotional dysregulation, stress, and solitude are primary
                        predictors of relapse. While models reliably detect high-risk cases, addressing
                        class imbalance will improve sensitivity to early warning signs. The integration of
                        predictive analytics with an empathetic, user-centered interface offers promise
                        for supporting emotional awareness and habit management.
                    </p>
                </Section>

                {/* Conclusion */}
                <Section>
                    <h3>Conclusion</h3>
                    <p>
                        This study demonstrates that combining self-reported behavioural data with ML
                        can uncover relapse patterns and support mental health self-management.
                        The TrichMind app transforms these insights into real-time feedback, risk alerts,
                        and coping suggestions—showcasing the potential of data-driven tools in
                        personalized digital mental health support.
                    </p>
                </Section>

                {/* GitHub Link */}
                <GitHubButton
                    href="https://github.com/girlierazon84/TrichMind"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on GitHub
                </GitHubButton>
            </Container>
        </ProjectSection>
    );
};

export default TrichMind;
