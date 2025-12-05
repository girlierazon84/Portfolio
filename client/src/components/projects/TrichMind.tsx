// src/components/projects/TrichMind.tsx

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import DSBackground from "../../assets/images/DS_bg.jpg";
import TrichMindLogo from "../../assets/images/app_logo.png";

import Demographics from "../../assets/images/demographics.png";
import BehaviourAwareness from "../../assets/images/behaviour_freq_awareness.png";

// 🔹 Two different correlation maps
import CorrHeatmapNumeric from "../../assets/images/corr_heatmap.png";
import CorrHeatmapUnified from "../../assets/images/correlation_heatmap.png";

import ConfusionCombined from "../../assets/images/confusion_matrix_combined.png";
import MetricsSummary from "../../assets/images/metrics_summary.png";
import ModelAccuracyComparison from "../../assets/images/model_accuracy_comparison.png";
import FeatureImportances from "../../assets/images/feature_importances.png";
import FeatureImportanceCorr from "../../assets/images/feature_importance_corr.png";

import MockUp from "../../assets/images/TrichMind_App_Prototype.png";
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

                {/* ABSTRACT */}
                <Section>
                    <h3>Abstract</h3>
                    <p>
                        TrichMind is a research-driven project that investigates whether
                        supervised machine learning can estimate short-term relapse risk for
                        people living with trichotillomania (hair-pulling disorder) — an
                        under-recognised condition with lifetime prevalence estimates of roughly
                        0.6–2.2% of the general population{" "}
                        <a
                            href="https://www.msdmanuals.com/professional/psychiatric-disorders/obsessive-compulsive-and-related-disorders/trichotillomania"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            (MSD&nbsp;Manual)
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8787581/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Melo&nbsp;et&nbsp;al.,&nbsp;2021
                        </a>
                        . An anonymous online survey captured demographics, pulling patterns,
                        emotional states, environments, and coping strategies. A small but rich
                        dataset was used to train and evaluate several classifiers, including
                        Logistic Regression, Random Forest, Gradient Boosting, and an MLP
                        classifier. On this dataset, a tuned Gradient Boosting model achieved
                        excellent performance and was integrated into a prototype MERN-stack
                        application with a FastAPI-based ML backend. The app provides risk
                        feedback, trend visualisation, and personalised coping suggestions to
                        support everyday self-management, with results interpreted cautiously
                        given the limited sample size and self-report nature of the data.
                    </p>
                </Section>

                {/* INTRODUCTION */}
                <Section>
                    <h3>Introduction</h3>
                    <p>
                        Trichotillomania is a body-focused repetitive behaviour characterised by
                        recurrent hair pulling that can lead to visible hair loss, shame, and
                        psychological distress. Epidemiological work suggests that between
                        0.6–2.2% of people will meet diagnostic criteria at some point in their
                        lives, with onset most commonly in late childhood or early adolescence
                        (around ages 9–13){" "}
                        <a
                            href="https://www.msdmanuals.com/professional/psychiatric-disorders/obsessive-compulsive-and-related-disorders/trichotillomania"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            (MSD&nbsp;Manual)
                        </a>{" "}
                        <a
                            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8787581/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            (Melo&nbsp;et&nbsp;al.,&nbsp;2021)
                        </a>
                        . Many individuals live with symptoms for years before accessing
                        specialist care. Digital tools offer a way to capture lived experience at
                        scale and to provide timely, stigma-sensitive support. This project
                        explores two questions: (1) can relapse risk be approximated from
                        self-reported behavioural and emotional patterns, and (2) how can such
                        models be embedded in an accessible, user-friendly app?
                    </p>
                </Section>

                {/* MODELLING APPROACH */}
                <Section>
                    <h3>Modelling Approach</h3>
                    <p>
                        A multi-class classification problem was formulated with three risk
                        levels: low, medium, and high. A compact but expressive ML pipeline was
                        implemented using:
                    </p>
                    <ul>
                        <li>
                            <b>Logistic Regression</b> – regularised baseline model for
                            linearly-separable structure.
                        </li>
                        <li>
                            <b>Random Forest</b> – ensemble of decision trees, robust to
                            nonlinear effects and feature interactions.
                        </li>
                        <li>
                            <b>Gradient Boosting</b> – boosted trees focusing on harder
                            examples; ultimately selected as the best-performing model.
                        </li>
                        <li>
                            <b>MLP Classifier</b> – shallow neural network to test a simple
                            non-linear alternative.
                        </li>
                    </ul>
                    <p>
                        Because the dataset is relatively small, the pipeline relied on careful
                        preprocessing, feature engineering, and validation rather than very deep
                        or highly parameterised models.
                    </p>
                </Section>

                {/* METHOD */}
                <Section>
                    <h3>Method</h3>
                    <ul>
                        <li>
                            <b>Data Collection:</b> An anonymous online survey (≈120 responses)
                            was distributed in trichotillomania communities. It captured
                            demographic information, age of onset, pulling frequency and
                            awareness, emotional triggers, coping strategies, environments, and
                            current severity.
                        </li>
                        <li>
                            <b>Feature Engineering:</b> Derived features included years since
                            onset, aggregated emotion intensity scores, counts of coping
                            activities, and trigger categories (e.g. being in the car, alone at
                            home).
                        </li>
                        <li>
                            <b>Preprocessing:</b> Cleaning, missing-value handling, encoding of
                            categorical variables, and normalisation of numeric variables. A
                            stratified 80/20 train–test split was used to preserve class ratios.
                        </li>
                        <li>
                            <b>Model Training:</b> Models were trained with cross-validation and
                            hyperparameter tuning. Given the small sample size, the focus was on
                            stability and interpretability rather than maximising complexity.
                        </li>
                        <li>
                            <b>Evaluation:</b> Accuracy, precision, recall, F1-score, and
                            confusion matrices were calculated for each risk class and for the
                            overall model.
                        </li>
                        <li>
                            <b>Deployment:</b> The selected Gradient Boosting model was exported,
                            wrapped in a FastAPI inference service, and integrated into the
                            TrichMind MERN-stack prototype.
                        </li>
                    </ul>
                </Section>

                {/* EDA */}
                <Section>
                    <h3>Exploratory Data Analysis (EDA)</h3>
                    <p>
                        EDA was used to understand who participated in the survey and how they
                        experience hair pulling in daily life. The demographic overview shows
                        that most respondents were young adults, predominantly female, and
                        primarily based in North America and Europe.
                    </p>
                    <img
                        src={Demographics}
                        alt="Survey demographics and background variables"
                    />
                    <p>
                        Behaviour-focused plots highlight that daily or near-daily pulling is
                        common, and many respondents report being only “sometimes” aware of
                        pulling while it happens. This supports the idea that a portion of the
                        behaviour is automatic and habit-driven.
                    </p>
                    <img
                        src={BehaviourAwareness}
                        alt="Pulling frequency and awareness level distributions"
                    />
                    <p>
                        Two correlation views were created. First, a simple numeric correlation
                        map between age, age of onset, and pulling severity shows that older
                        participants and those with earlier onset tend to report higher current
                        severity.
                    </p>
                    <img
                        src={CorrHeatmapNumeric}
                        alt="Correlation heatmap for age, age of onset, and pulling severity"
                    />
                    <p>
                        Second, a unified feature correlation map includes engineered variables
                        such as years since onset, encoded pulling frequency and awareness,
                        aggregated emotion intensity, coping activity counts, and trigger counts.
                        This richer view highlights clusters between chronicity, emotional
                        intensity, and coping behaviour.
                    </p>
                    <img
                        src={CorrHeatmapUnified}
                        alt="TrichMind unified feature correlation heatmap"
                    />
                </Section>

                {/* RESULTS */}
                <Section>
                    <h3>Results</h3>
                    <p>
                        On the held-out test set, the tuned Gradient Boosting classifier
                        achieved an accuracy of 1.00 with precision, recall, and F1-score of
                        1.00 for each of the low, medium, and high risk classes. While this
                        level of performance is very strong, it should be interpreted as
                        optimistic due to the modest sample size.
                    </p>
                    <img
                        src={MetricsSummary}
                        alt="Precision, recall and F1-score per risk class"
                    />
                    <img
                        src={ConfusionCombined}
                        alt="Confusion matrices for the best-performing model"
                    />
                    <p>
                        A comparison across candidate models showed Gradient Boosting performing
                        best on this dataset.
                    </p>
                    <img
                        src={ModelAccuracyComparison}
                        alt="Model accuracy comparison across algorithms"
                    />
                    <p>
                        Feature importance analysis indicated that chronicity and symptom
                        intensity are among the strongest predictors. Top-ranked features
                        include current pulling severity, years since onset, hair texture,
                        pulling in the car, depressive symptoms, emotion intensity, trauma
                        histories, boredom, and shame.
                    </p>
                    <img
                        src={FeatureImportances}
                        alt="Top 20 most important features for relapse risk prediction"
                    />
                    <img
                        src={FeatureImportanceCorr}
                        alt="Correlation among the top 20 important features"
                    />
                    <p>
                        These insights informed the design of the TrichMind interface, which
                        emphasises severity, chronicity, emotional state, and trigger context in
                        the feedback it provides to users.
                    </p>
                    <img src={MockUp} alt="TrichMind application prototype screens" />
                </Section>

                {/* DISCUSSION */}
                <Section>
                    <h3>Discussion</h3>
                    <p>
                        The modelling results are consistent with clinical descriptions of
                        trichotillomania: long-standing symptoms, emotional dysregulation, and
                        specific contexts (such as being alone or in the car) appear strongly
                        linked to relapse risk. At the same time, the near-perfect performance
                        of the best model likely reflects the limited size and structure of the
                        dataset. External validation on larger, more diverse samples—and
                        collaboration with clinicians—is necessary before using the model in any
                        clinical decision-making.
                    </p>
                    <p>
                        From a product perspective, the project demonstrates how research,
                        machine learning, and user-centred design can be combined into an
                        empathetic digital companion rather than a diagnostic tool. The app
                        explicitly frames outputs as supportive insights, encouraging users to
                        reflect on patterns and experiment with coping strategies.
                    </p>
                </Section>

                {/* CONCLUSION */}
                <Section>
                    <h3>Conclusion</h3>
                    <p>
                        TrichMind shows that self-reported behavioural and emotional data can be
                        used to model relapse patterns in trichotillomania and translate them
                        into accessible, real-time feedback. The project combines a carefully
                        validated machine learning pipeline with a MERN + FastAPI prototype that
                        visualises risk, tracks progress, and surfaces coping ideas. It is
                        designed as a complementary self-help tool and is not a replacement for
                        professional mental health care, but it illustrates the potential of
                        data-informed, compassionate digital support for people living with
                        body-focused repetitive behaviours.
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
