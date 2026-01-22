// client/src/components/projects/TrichMind.tsx
"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

import DSBackground from "../../assets/images/DS_bg.jpg";
import TrichMindLogo from "../../assets/images/app_logo.png";

// ✅ Keep only the most important visuals (per your note)
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
    gap: 2.4rem;

    @media (max-width: 768px) {
        padding: 1.5rem;
        gap: 2rem;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
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
    gap: 0.9rem;

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
        line-height: 1.9;
        color: var(--primary-color);
        text-align: justify;

        @media (max-width: 768px) {
            font-size: 0.88rem;
            line-height: 1.55;
        }
    }

    ul {
        list-style: disc;
        margin-left: 1.5rem;
    }
`;

const FigureBlock = styled.figure`
    margin: 0.2rem 0 0;
    display: grid;
    gap: 0.55rem;
`;

const FigureImage = styled(Image)`
    border-radius: 0.6rem;
    width: 100%;
    height: auto;
    object-fit: contain;

    @media (max-width: 768px) {
        height: 260px;
        justify-self: center;
    }
`;

const FigureCaption = styled.figcaption`
    font-size: 0.9rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.82);

    @media (max-width: 768px) {
        font-size: 0.82rem;
    }
`;

const Callout = styled.div`
    border-radius: 0.85rem;
    padding: 1rem 1.1rem;
    background: rgba(17, 24, 39, 0.28);
    border: 1px solid rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(12px);

    p {
        margin: 0.2rem 0;
        text-align: left;
        line-height: 1.6;
    }

    b {
        color: #fff;
    }
`;

const GitHubButton = styled.a`
    display: inline-block;
    margin: 0.7rem auto 0;
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

                {/* OVERVIEW (kept short) */}
                <Section>
                    <h3>What is TrichMind?</h3>
                    <p>
                        TrichMind is a research-driven ML + app prototype that estimates short-term relapse risk for trichotillomania
                        using anonymous self-report survey data. The prototype integrates a FastAPI inference backend with a Next.js
                        client (TypeScript + styled-components), designed as a supportive self-management tool (not a diagnostic system).
                    </p>
                </Section>

                {/* EDA (minimal visuals + clear takeaways) */}
                <Section>
                    <h3>EDA highlights</h3>
                    <p>
                        To keep the story clear, the page shows only five figures: demographics, behaviour patterns, two correlation views,
                        and the confusion matrix. Together, they summarise <b>who</b> participated, <b>how</b> behaviours cluster, and <b>how well</b>{" "}
                        the model separates risk levels.
                    </p>

                    <Callout>
                        <p>
                            <b>Key findings (EDA report — 2026-01-03):</b>
                        </p>
                        <p>• Mean age: <b>32.39</b> (median: <b>31</b>)</p>
                        <p>• Top gender: <b>Female</b></p>
                        <p>• Top country: <b>USA</b></p>
                        <p>• Top pulling frequency: <b>Daily</b></p>
                        <p>• Top awareness level: <b>Sometimes</b></p>
                        <p>• Entries with “how_long_stopped”: <b>61</b></p>
                    </Callout>

                    <FigureBlock>
                        <FigureImage src={Demographics} alt="Survey demographics" />
                        <FigureCaption>
                            <b>Demographics:</b> who responded to the survey (age distribution + background variables).
                        </FigureCaption>
                    </FigureBlock>

                    <FigureBlock>
                        <FigureImage src={BehaviourAwareness} alt="Pulling frequency and awareness distributions" />
                        <FigureCaption>
                            <b>Behaviour patterns:</b> pulling frequency and awareness while pulling (often “sometimes”), supporting the idea
                            that habit-driven behaviour is common.
                        </FigureCaption>
                    </FigureBlock>

                    <FigureBlock>
                        <FigureImage src={CorrHeatmapNumeric} alt="Numeric correlation heatmap (age, onset, severity)" />
                        <FigureCaption>
                            <b>Numeric correlations:</b> relationships among age, age of onset, and current pulling severity.
                        </FigureCaption>
                    </FigureBlock>

                    <FigureBlock>
                        <FigureImage src={CorrHeatmapUnified} alt="Unified feature correlation heatmap" />
                        <FigureCaption>
                            <b>Unified feature correlations:</b> a broader view including engineered/encoded variables (e.g., years since onset,
                            frequency/awareness encodings, emotion intensity sum, coping activity sum, trigger count).
                        </FigureCaption>
                    </FigureBlock>
                </Section>

                {/* RESULTS (single key figure) */}
                <Section>
                    <h3>Model results (at a glance)</h3>
                    <p>
                        The confusion matrix below shows how the model performs across the three classes (low/medium/high). The project has
                        seen strong results in recent runs, but given the dataset size, the focus is on careful validation and iterative improvement.
                    </p>

                    <FigureBlock>
                        <FigureImage src={ConfusionCombined} alt="Confusion matrices (counts and normalized)" />
                        <FigureCaption>
                            <b>Confusion matrix:</b> counts + normalized view of predictions by class.
                        </FigureCaption>
                    </FigureBlock>
                </Section>

                {/* TECH / DEPLOYMENT */}
                <Section>
                    <h3>Tech & deployment</h3>
                    <ul>
                        <li>
                            <b>Client:</b> Next.js, TypeScript, styled-components (deployed on Vercel)
                        </li>
                        <li>
                            <b>ML inference:</b> FastAPI (designed for containerized deployment with Docker; server can be hosted separately, e.g., Render)
                        </li>
                        <li>
                            <b>Goal:</b> supportive insights + trends + coping suggestions (not medical advice)
                        </li>
                    </ul>
                </Section>

                {/* Links */}
                <GitHubButton href="https://trichmind.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Open the live app
                </GitHubButton>

                <GitHubButton href="https://github.com/girlierazon84/TrichMind" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                </GitHubButton>
            </Container>
        </ProjectSection>
    );
};

export default TrichMind;
