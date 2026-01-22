// client/src/components/projects/TrichMind.tsx

"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

import DSBackground from "../../assets/images/DS_bg.jpg";
import TrichMindLogo from "../../assets/images/app_logo.png";

// ✅ Keep only the most informative figures
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
    max-width: 1050px;
    width: 100%;
    background: rgba(17, 24, 39, 0.14);
    border: 1px solid rgba(255, 255, 255, 0.14);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
    border-radius: 1rem;
    padding: 3rem;
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    gap: 2.25rem;

    @media (max-width: 768px) {
        padding: 1.5rem;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.1rem;
    text-align: center;
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
    font-size: 1.75rem;
    font-weight: 520;
    color: var(--primary-color);
    max-width: 820px;

    @media (max-width: 768px) {
        font-size: 1.2rem;
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
    font-weight: 750;
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
    gap: 0.95rem;

    h3 {
        font-size: 1.55rem;
        font-weight: 780;
        background-image: linear-gradient(225deg, #0cc4a8, #f3c408, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media (max-width: 768px) {
            font-size: 1.2rem;
            font-weight: 500;
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

const FigureBlock = styled.div`
    margin-top: 0.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const FigureImage = styled(Image)`
    border-radius: 0.65rem;
    width: 100%;
    height: auto;
    object-fit: contain;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(0, 0, 0, 0.12);

    @media (max-width: 768px) {
        height: 250px;
        align-self: center;
    }
`;

const FigCaption = styled.p`
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.82);
    text-align: left;

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
    margin: 0.2rem auto 0;
    padding: 0.8rem 2.1rem;
    background: transparent;
    color: var(--primary-color);
    font-weight: 800;
    text-decoration: none;
    border-radius: 0.8rem;
    text-align: center;
    border: 2px solid transparent;
    background-image: linear-gradient(#111827, #111827),
        linear-gradient(90deg, #f3c408, #0cc4a8, #a78bfa);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    transition: transform 0.25s ease, filter 0.25s ease;

    &:hover {
        color: #111827;
        background: linear-gradient(90deg, #f3c408, #0cc4a8, #a78bfa);
        transform: translateY(-3px);
        filter: brightness(1.02);
    }
`;

const SecondaryCTA = styled.a`
    display: inline-block;
    margin: 0 auto;
    padding: 0.75rem 2rem;
    background: rgba(17, 24, 39, 0.22);
    color: var(--primary-color);
    font-weight: 780;
    text-decoration: none;
    border-radius: 0.8rem;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.18);

    transition: transform 0.25s ease, filter 0.25s ease;

    &:hover {
        transform: translateY(-2px);
        filter: brightness(1.06);
    }
`;

const CTAStack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    align-items: center;
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
                        TrichMind is my thesis-based personal project investigating whether supervised machine learning can estimate short-term relapse risk in trichotillomania (hair-pulling disorder). Using an anonymous survey dataset, I built a practical prototype: a mobile / web app that outputs a risk level (low / medium / high), surfaces patterns that may be contributing to risk, and encourages calm, compassionate coping reflection.
                    </p>
                    <p>
                        The system is split into two parts: an ML inference service built with <b>FastAPI</b>, and an application layer built
                        on a MERN-style stack. On the server side I use <b>Node.js + Express + MongoDB</b> (containerized with <b>Docker</b>) to
                        handle user data and application logic, while the client is <b>Next.js + TypeScript + styled-components</b>. The prototype is
                        deployed with the client on <b>Vercel</b>, and server-side services can be hosted on <b>Render</b>.
                    </p>
                </Section>

                {/* DATA & EDA */}
                <Section>
                    <h3>Data and EDA summary</h3>
                    <p>
                        Before modeling, I ran an exploratory analysis to understand who answered the survey and how pulling is described in
                        day-to-day life.
                    </p>

                    <Callout>
                        <p>
                            <b>EDA highlights</b> (snapshot):
                        </p>
                        <p>• Mean age: <b>32.39</b> (median: <b>31</b>)</p>
                        <p>• Top gender: <b>Female</b></p>
                        <p>• Top country: <b>USA</b></p>
                        <p>• Most common pulling frequency: <b>Daily</b></p>
                        <p>• Most common awareness level: <b>Sometimes</b></p>
                        <p>• Entries with “how_long_stopped”: <b>61</b></p>
                    </Callout>

                    <FigureBlock>
                        <FigureImage src={Demographics} alt="Demographics overview" />
                        <FigCaption>
                            <b>Figure 1.</b> Demographics overview. This figure provides context for the sample (who responded), which helps interpret the
                            model results responsibly. It’s also useful for spotting skews that might affect generalization.
                        </FigCaption>
                    </FigureBlock>

                    <FigureBlock>
                        <FigureImage src={BehaviourAwareness} alt="Pulling frequency and awareness distributions" />
                        <FigCaption>
                            <b>Figure 2.</b> Pulling frequency and awareness. This makes the “shape” of the behavior visible: many respondents describe
                            frequent pulling and only partial awareness, which supports modeling both habit-driven and emotionally triggered patterns.
                        </FigCaption>
                    </FigureBlock>
                </Section>

                {/* CORRELATION */}
                <Section>
                    <h3>Feature relationships</h3>
                    <p>
                        There are two correlation views that answer different questions. The first is a simple,
                        numeric-only correlation among core variables. The second includes engineered/encoded features that the model actually uses.
                    </p>

                    <FigureBlock>
                        <FigureImage src={CorrHeatmapNumeric} alt="Numeric correlation heatmap (age, age of onset, pulling severity)" />
                        <FigCaption>
                            <b>Figure 3.</b> Numeric correlation (age, age of onset, pulling severity). This is a quick “sanity check” view: it shows how
                            basic demographic timing relates to severity.
                        </FigCaption>
                    </FigureBlock>

                    <FigureBlock>
                        <FigureImage src={CorrHeatmapUnified} alt="Unified feature correlation heatmap" />
                        <FigCaption>
                            <b>Figure 4.</b> Unified feature correlation. This expands the view to include engineered variables such as <i>years since onset</i>,
                            encoded pulling frequency/awareness, emotion intensity sum, coping activity sum, and trigger count. Clusters here hint at where the
                            model may be “seeing” chronicity, emotion load, and coping behavior moving together.
                        </FigCaption>
                    </FigureBlock>
                </Section>

                {/* MODELLING & EVAL */}
                <Section>
                    <h3>Modeling and evaluation</h3>
                    <p>
                        The modeling task is multi-class classification: <b>low</b>, <b>medium</b>, and <b>high</b> risk. I trained and compared several
                        classifiers (Logistic Regression, Random Forest, Gradient Boosting, and MLP), with cross-validation and tuning.
                    </p>

                    <p>
                        In the latest runs, one baseline model is reported at <b>0.92</b> test accuracy (Gradient Boosting), and a tuned model run achieved{" "}
                        <b>1.00</b> accuracy on a smaller held-out split (tuned Random Forest). Because the dataset is modest, I treat these numbers as
                        <b> encouraging</b> but not “final proof” — the next step is broader validation.
                    </p>

                    <FigureBlock>
                        <FigureImage src={ConfusionCombined} alt="Confusion matrices (counts and normalized)" />
                        <FigCaption>
                            <b>Figure 5.</b> Confusion matrices (counts + normalized). This is the clearest single evaluation figure: it shows where the model
                            gets decisions right and where it confuses classes. The normalized view is especially helpful because it shows performance per class
                            rather than being dominated by whichever class is largest.
                        </FigCaption>
                    </FigureBlock>

                    <p>
                        In the deployed experience, the prediction is delivered through the FastAPI inference service. The application layer (Node/Express/Mongo)
                        handles user sessions and persistence, while the Next.js client focuses on interaction and presentation.
                    </p>
                </Section>

                {/* CONCLUSION */}
                <Section>
                    <h3>Conclusion</h3>
                    <p>
                        TrichMind connects a small but expressive survey dataset to a real prototype: data exploration → feature engineering → model training and
                        evaluation → API-based inference → user-facing app. The main takeaway is not “perfect prediction,” but the demonstration that supportive,
                        non-triggering feedback can be built around patterns people already recognize — severity, awareness, chronicity, emotional load, and context.
                    </p>
                </Section>

                {/* CTAs */}
                <CTAStack>
                    <PrimaryCTA href="https://trichmind.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Open the live app
                    </PrimaryCTA>
                    <SecondaryCTA href="https://github.com/girlierazon84/TrichMind" target="_blank" rel="noopener noreferrer">
                        View the repository
                    </SecondaryCTA>
                </CTAStack>
            </Container>
        </ProjectSection>
    );
};

export default TrichMind;
