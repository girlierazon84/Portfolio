// client/src/components/projects/TrichMind.tsx

"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

import DSBackground from "../../assets/images/DS_bg.jpg";
import TrichMindLogo from "../../assets/images/app_logo.png";

// ✅ Keep only the key figures (as requested)
import Demographics from "../../assets/images/demographics.png";
import BehaviourAwareness from "../../assets/images/behaviour_freq_awareness.png";
import CorrHeatmapNumeric from "../../assets/images/corr_heatmap.png";
import CorrHeatmapUnified from "../../assets/images/correlation_heatmap.png";
import ConfusionCombined from "../../assets/images/confusion_matrix_combined.png";


/**----------------------
    Styled Components
-------------------------*/
const ProjectSection = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 3rem 1.5rem;
    background: url(${DSBackground.src}) center/cover no-repeat;
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
    gap: 2.6rem;

    @media (max-width: 768px) {
        padding: 1.5rem;
        gap: 2rem;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;

    @media (max-width: 768px) {
        gap: 0.6rem;
    }
`;

const LogoImage = styled(Image)`
    width: 250px;
    height: auto;

    @media (max-width: 768px) {
        width: 200px;
        height: 230px;
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

const MetaLinks = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
`;

const PillLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;

    padding: 0.5rem 0.9rem;
    border-radius: 999px;
    font-weight: 700;
    text-decoration: none;
    color: var(--primary-color);

    border: 1px solid rgba(255, 255, 255, 0.22);
    background: rgba(17, 24, 39, 0.25);
    backdrop-filter: blur(10px);

    transition: transform 0.2s ease, filter 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        filter: brightness(1.06);
    }
`;

const Section = styled(motion.section)`
    display: flex;
    flex-direction: column;
    gap: 0.85rem;

    h3 {
        font-size: 1.6rem;
        font-weight: 750;
        background-image: linear-gradient(225deg, #0cc4a8, #f3c408, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media (max-width: 768px) {
            font-size: 1.25rem;
            font-weight: 500;
        }
    }

    p,
    li {
        font-size: 1rem;
        line-height: 1.95;
        color: var(--primary-color);
        text-align: justify;

        @media (max-width: 768px) {
            font-size: 0.9rem;
            line-height: 1.6;
        }
    }

    ul {
        list-style: disc;
        margin-left: 1.5rem;
    }
`;

const FigureBlock = styled.figure`
    margin: 0.25rem 0 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
`;

const FigureImage = styled(Image)`
    border-radius: 0.6rem;
    width: 100%;
    height: auto;
    object-fit: contain;

    @media (max-width: 768px) {
        height: 260px;
    }
`;

const Caption = styled.figcaption`
    font-size: 0.92rem;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.86);

    @media (max-width: 768px) {
        font-size: 0.84rem;
    }
`;

const Callout = styled.div`
    border-radius: 0.85rem;
    padding: 1rem 1.1rem;
    background: rgba(17, 24, 39, 0.28);
    border: 1px solid rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(12px);

    p {
        margin: 0.25rem 0;
        text-align: left;
        line-height: 1.6;
    }

    b {
        color: #fff;
    }
`;

const PrimaryCTA = styled.a`
    display: inline-block;
    margin: 0.75rem auto 0;
    padding: 0.75rem 2rem;
    background: linear-gradient(90deg, #f3c408, #0cc4a8, #a78bfa);
    color: #111827;
    font-weight: 800;
    text-decoration: none;
    border-radius: 0.85rem;
    text-align: center;
    transition: transform 0.2s ease, filter 0.2s ease;

    &:hover {
        transform: translateY(-3px);
        filter: brightness(1.02);
    }
`;

const SecondaryCTA = styled.a`
    display: inline-block;
    margin: 0.35rem auto 0;
    padding: 0.7rem 1.8rem;
    background: transparent;
    color: var(--primary-color);
    font-weight: 750;
    text-decoration: none;
    border-radius: 0.85rem;
    text-align: center;
    border: 2px solid transparent;
    background-image: linear-gradient(#111827, #111827),
        linear-gradient(90deg, #f3c408, #0cc4a8, #a78bfa);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    transition: transform 0.2s ease, filter 0.2s ease;

    &:hover {
        transform: translateY(-3px);
        filter: brightness(1.05);
    }
`;

/**----------------------
    Component
-------------------------*/
const TrichMind: React.FC = () => {
    return (
        <ProjectSection>
            <Container>
                <Header>
                    <LogoImage src={TrichMindLogo} alt="TrichMind Logo" width={250} height={230} priority />
                    <Subtitle>Machine Learning-Based Prediction of Relapse Risk in Trichotillomania</Subtitle>

                    <MetaLinks>
                        <PillLink href="https://trichmind.vercel.app/" target="_blank" rel="noopener noreferrer">
                            Live app (Vercel)
                        </PillLink>
                        <PillLink href="https://github.com/girlierazon84/TrichMind" target="_blank" rel="noopener noreferrer">
                            GitHub repo
                        </PillLink>
                    </MetaLinks>
                </Header>

                {/* ABSTRACT */}
                <Section>
                    <h3>Abstract</h3>
                    <p>
                        TrichMind investigates whether supervised machine learning can estimate short-term relapse risk in
                        trichotillomania using self-reported survey data. The project includes (1) a reproducible ML pipeline for
                        training, tuning, and evaluation, and (2) a prototype application built with a MERN-style architecture:
                        Next.js + TypeScript + styled-components on the client, and a FastAPI-based inference service for ML integration.
                        The client is deployed on Vercel and the server is deployed on Render.
                    </p>
                </Section>

                {/* DATA & EDA */}
                <Section>
                    <h3>Data and Exploratory Analysis</h3>
                    <p>
                        A focused EDA was used to describe the sample and verify that key behavioural signals exist in the dataset.
                        The latest report (generated <b>2026-01-03</b>) indicates the following headline statistics:
                    </p>

                    <Callout>
                        <p>
                            <b>EDA summary:</b>
                        </p>
                        <p>• Mean age: <b>32.39</b> (median: <b>31</b>)</p>
                        <p>• Most common gender: <b>Female</b></p>
                        <p>• Most common country: <b>USA</b></p>
                        <p>• Most common pulling frequency: <b>Daily</b></p>
                        <p>• Most common awareness level: <b>Sometimes</b></p>
                        <p>• Entries with “how_long_stopped”: <b>61</b></p>
                    </Callout>

                    <FigureBlock>
                        <FigureImage src={Demographics} alt="Demographics overview" />
                        <Caption>
                            <b>Figure 1 — Demographics.</b> A high-level overview of participant background variables. This figure provides
                            context about who answered the survey and helps interpret how representative (or limited) the sample may be.
                        </Caption>
                    </FigureBlock>

                    <FigureBlock>
                        <FigureImage src={BehaviourAwareness} alt="Behaviour frequency and awareness distributions" />
                        <Caption>
                            <b>Figure 2 — Pulling frequency and awareness.</b> Distributions of how often participants pull and how aware they are
                            during episodes. This matters because frequency and awareness are strong candidates for relapse-risk signals and can
                            differentiate more automatic habit patterns from more intentional episodes.
                        </Caption>
                    </FigureBlock>
                </Section>

                {/* FEATURE RELATIONSHIPS */}
                <Section>
                    <h3>Feature Relationships</h3>
                    <p>
                        Correlation analysis was used to sanity-check relationships between core numeric variables and a broader set of engineered features.
                        The goal is not to claim causality, but to understand which variables tend to move together and which appear more independent.
                    </p>

                    <FigureBlock>
                        <FigureImage src={CorrHeatmapNumeric} alt="Correlation heatmap (age, age of onset, pulling severity)" />
                        <Caption>
                            <b>Figure 3 — Numeric correlation heatmap.</b> Correlation among <i>age</i>, <i>age of onset</i>, and <i>pulling severity</i>.
                            This provides a simple baseline view before introducing engineered features. It helps confirm whether severity is linked to
                            basic demographics or chronicity-related variables.
                        </Caption>
                    </FigureBlock>

                    <FigureBlock>
                        <FigureImage src={CorrHeatmapUnified} alt="Unified feature correlation heatmap" />
                        <Caption>
                            <b>Figure 4 — Unified feature correlation heatmap.</b> A richer correlation view including engineered/encoded features such as
                            <i>years since onset</i>, <i>pulling frequency</i>, <i>awareness</i>, aggregated emotion intensity, coping activity counts, and trigger counts.
                            Clusters in this figure indicate groups of related signals (e.g., chronicity and intensity), which is useful for model interpretation and
                            for avoiding over-counting redundant features.
                        </Caption>
                    </FigureBlock>
                </Section>

                {/* MODELLING & RESULTS */}
                <Section>
                    <h3>Modelling and Evaluation</h3>
                    <p>
                        The modelling task is a three-class classification problem (<b>low</b>, <b>medium</b>, <b>high</b> risk). Multiple models were trained and tuned.
                        In the latest logged results, a baseline Gradient Boosting model achieved <b>0.92</b> test accuracy, and a tuned Random Forest run achieved
                        <b>1.00</b> accuracy on a smaller held-out split. Because the dataset is limited, these results are best interpreted as evidence of signal presence,
                        not final clinical-grade performance.
                    </p>

                    <FigureBlock>
                        <FigureImage src={ConfusionCombined} alt="Confusion matrices (counts + normalized)" />
                        <Caption>
                            <b>Figure 5 — Confusion matrices (counts and normalized).</b> This figure shows how predictions align with true labels.
                            The left matrix shows raw counts; the right matrix shows proportions per true class. Together, they indicate whether the model
                            confuses adjacent classes (e.g., medium vs. high) and whether any class is systematically misclassified.
                        </Caption>
                    </FigureBlock>
                </Section>

                {/* SYSTEM / DEPLOYMENT */}
                <Section>
                    <h3>System and Deployment</h3>
                    <p>
                        TrichMind is implemented as a modern web prototype with ML integration. The client is built with <b>Next.js</b>, <b>TypeScript</b>,
                        and <b>styled-components</b>. The ML model is served through a <b>FastAPI</b> inference API. The project is container-friendly via <b>Docker</b>
                        and is deployed with the client on <b>Vercel</b> and server-side services on <b>Render</b>.
                    </p>

                    <PrimaryCTA href="https://trichmind.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Open the live app
                    </PrimaryCTA>

                    <SecondaryCTA href="https://github.com/girlierazon84/TrichMind" target="_blank" rel="noopener noreferrer">
                        View on GitHub
                    </SecondaryCTA>
                </Section>
            </Container>
        </ProjectSection>
    );
};

export default TrichMind;
