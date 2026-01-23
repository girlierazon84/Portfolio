// client/src/components/projects/EduForecast.tsx

"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

import DSBackground from "../../assets/images/DS_bg.jpg";

// Figures
import BaselineForecastRegion01 from "../../assets/images/Baseline-Forecast-Check-Region01.png";
import GrundCostPerChild from "../../assets/images/Grundskola-Cost-Per-Child-2007-2022.png";
import GrundCurrentYoY from "../../assets/images/Grundskola-Current-YoY-PCT-Distribution.png";
import GrundFixedYoY from "../../assets/images/Grundskola-Fixed-YoY-PCT-Distribution.png";
import GymCostPerChild from "../../assets/images/Gymnasieskola-Cost-Per-Child-2007-2022.png";
import GymCurrentYoY from "../../assets/images/Gymnasieskola-Current-YoY-PCT-Distribution.png";
import GymFixedYoY from "../../assets/images/Gymnasieskola-Fixed-YoY-PCT-Distribution.png";
import NatCurrentTotals from "../../assets/images/National-Edu-Cost-Total-Current-Nominal.png";
import NatFixedTotals from "../../assets/images/National-Edu-Cost-Total-Fixed-Real.png";
import RegionCurrentPerStudent from "../../assets/images/Region01-Cost-Per-Student-Current.png";
import RegionFixedPerStudent from "../../assets/images/Region01-Cost-Per-Student-Fixed.png";
import RegionStudents from "../../assets/images/Region01-Forecast-Students-Sum.png";
import RegionCurrentTotals from "../../assets/images/Region01-Totals-Current.png";
import RegionFixedTotals from "../../assets/images/Region01-Totals-Fixed.png";


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

const Title = styled.h1`
    font-size: 2.1rem;
    font-weight: 800;
    background-image: linear-gradient(225deg, #0cc4a8, #f3c408, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`;

const Subtitle = styled.h2`
    font-size: 1.4rem;
    font-weight: 520;
    color: var(--primary-color);
    max-width: 820px;

    @media (max-width: 768px) {
        font-size: 1.1rem;
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

const SectionBlock = styled(motion.section)`
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

const FigureRow = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const FigureImage = styled(Image)`
    border-radius: 0.65rem;
    width: 100%;
    height: auto;
    object-fit: contain;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(0, 0, 0, 0.12);

    @media (max-width: 768px) {
        height: 230px;
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

const CTAStack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    align-items: center;
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

/**----------------------
    Component
-------------------------*/
const EduForecast: React.FC = () => {
    return (
        <ProjectSection>
            <Container>
                {/* HEADER */}
                <Header>
                    <Title>Education Costs &amp; Birth Growth Forecasting</Title>
                    <Subtitle>
                        A Python + Streamlit pipeline that forecasts births, student cohorts (0–19),
                        and Swedish education costs for grundskola and gymnasieskola – with proper
                        handling of current vs fixed price bases.
                    </Subtitle>

                    <MetaLinks>
                        <PillLink
                            href="https://edu-costs-sweden-prognos.streamlit.app/Forecast_and_Costs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Streamlit dashboard
                        </PillLink>
                        <PillLink
                            href="https://github.com/girlierazon84/Education_Costs_Birth_Growth_Forecasting"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub repo
                        </PillLink>
                    </MetaLinks>
                </Header>

                {/* OVERVIEW */}
                <SectionBlock>
                    <h3>Project overview</h3>
                    <p>
                        EduForecast is my end-to-end forecasting project for Swedish education planning.
                        Starting from SCB births data (1968–2023), I forecast births per län, transform
                        them into age-specific student cohorts (0–19), and combine them with historical
                        cost-per-child tables to project education costs for grundskola (7–16) and
                        gymnasieskola (17–19) up to 2030.
                    </p>
                    <p>
                        The core is a reproducible Python pipeline that writes clean CSV artifacts under{" "}
                        <code>artifacts/</code>, and a Streamlit dashboard that lets users explore
                        forecasts by region, school type, and price basis.
                    </p>
                </SectionBlock>

                {/* PIPELINE + REPO LAYOUT */}
                <SectionBlock>
                    <h3>Pipeline and repository layout</h3>
                    <p>
                        The project is structured as a small Python package (<code>eduforecast</code>)
                        with configuration-driven behavior:
                    </p>
                    <ul>
                        <li>
                            <b>Births forecasting</b>: per-region time series (1968 → 2023) with
                            models like exponential smoothing, drift, and naive baselines.
                        </li>
                        <li>
                            <b>Cohort logic</b>: turn births into age-specific population (0–19) using
                            simple survival / migration assumptions.
                        </li>
                        <li>
                            <b>Cost projection</b>: multiply forecast students by historical cost per
                            child (current + fixed prices) and extrapolate beyond 2022.
                        </li>
                        <li>
                            <b>Artifacts</b>: forecasts, model metrics, regional roll-ups, and
                            national totals exported as CSV for dashboards and reporting.
                        </li>
                    </ul>

                    <Callout>
                        <p>
                            <b>Key artifacts</b> include:
                        </p>
                        <p>• <code>birth_forecast_2024_2030.csv</code></p>
                        <p>• <code>population_0_19_forecast_2024_2030.csv</code></p>
                        <p>• <code>education_costs_forecast_2024_2030.csv</code></p>
                        <p>• Roll-ups such as national totals and per-region summaries</p>
                    </Callout>
                </SectionBlock>

                {/* CURRENT VS FIXED */}
                <SectionBlock>
                    <h3>Using costs correctly: current vs fixed prices</h3>
                    <p>
                        The cost outputs are always produced in two parallel price bases:
                        <b> Current_Total_Cost_kr</b> (nominal) and <b>Fixed_Total_Cost_kr</b> (real,
                        fixed-price). The Streamlit dashboard forces you to choose a basis via a
                        selector so you cannot accidentally add them together.
                    </p>

                    <Callout>
                        <p>
                            In one early exploration I saw a number like <b>110&nbsp;B SEK</b> for
                            gymnasieskolan 2024. That was actually:
                        </p>
                        <p>• Fixed total ≈ 57.5&nbsp;B SEK</p>
                        <p>• Current total ≈ 53.0&nbsp;B SEK</p>
                        <p>• <b>Wrong</b> “total” = Fixed + Current ≈ 110.5&nbsp;B SEK</p>
                        <p>
                            When compared to an SCB reference of ~55&nbsp;B SEK, the{" "}
                            <b>current-price</b> forecast is the correct basis and lands very close
                            (≈0.96×).
                        </p>
                    </Callout>
                </SectionBlock>

                {/* COST PER CHILD FIGURES */}
                <SectionBlock>
                    <h3>Historical cost per child</h3>

                    <FigureRow>
                        <FigureBlock>
                            <FigureImage
                                src={GrundCostPerChild}
                                alt="Grundskola cost per child, 2007–2022"
                            />
                            <FigCaption>
                                <b>Figure 1.</b> Grundskola cost per child in current vs fixed prices.
                                Real costs grow more smoothly; nominal costs pick up inflation.
                            </FigCaption>
                        </FigureBlock>

                        <FigureBlock>
                            <FigureImage
                                src={GymCostPerChild}
                                alt="Gymnasieskola cost per child, 2007–2022"
                            />
                            <FigCaption>
                                <b>Figure 2.</b> Gymnasieskola cost per child. Both school types show
                                steady real-price growth with nominal acceleration after 2015.
                            </FigCaption>
                        </FigureBlock>
                    </FigureRow>

                    <FigureRow>
                        <FigureBlock>
                            <FigureImage
                                src={GrundCurrentYoY}
                                alt="Grundskola current YoY percentage distribution"
                            />
                            <FigCaption>
                                <b>Figure 3.</b> Year-on-year % changes in grundskola costs (current).
                                Most years lie in a 2–4&nbsp;% band, with a few higher-inflation years.
                            </FigCaption>
                        </FigureBlock>

                        <FigureBlock>
                            <FigureImage
                                src={GrundFixedYoY}
                                alt="Grundskola fixed YoY percentage distribution"
                            />
                            <FigCaption>
                                <b>Figure 4.</b> Real (fixed-price) grundskola YoY changes. This is the
                                distribution I use when extrapolating future cost per child.
                            </FigCaption>
                        </FigureBlock>
                    </FigureRow>

                    <FigureRow>
                        <FigureBlock>
                            <FigureImage
                                src={GymCurrentYoY}
                                alt="Gymnasieskola current YoY percentage distribution"
                            />
                            <FigCaption>
                                <b>Figure 5.</b> Gymnasieskola YoY (current). Inflation + policy shifts
                                show up clearly here.
                            </FigCaption>
                        </FigureBlock>

                        <FigureBlock>
                            <FigureImage
                                src={GymFixedYoY}
                                alt="Gymnasieskola fixed YoY percentage distribution"
                            />
                            <FigCaption>
                                <b>Figure 6.</b> Real gymnasieskola YoY changes after inflation
                                adjustment.
                            </FigCaption>
                        </FigureBlock>
                    </FigureRow>
                </SectionBlock>

                {/* NATIONAL & REGIONAL FORECASTS */}
                <SectionBlock>
                    <h3>Forecasted totals and regional drill-downs</h3>

                    <FigureRow>
                        <FigureBlock>
                            <FigureImage
                                src={NatCurrentTotals}
                                alt="National education cost totals, current prices"
                            />
                            <FigCaption>
                                <b>Figure 7.</b> National education cost totals (current prices) for
                                grundskola and gymnasieskola, 2024–2030.
                            </FigCaption>
                        </FigureBlock>

                        <FigureBlock>
                            <FigureImage
                                src={NatFixedTotals}
                                alt="National education cost totals, fixed prices"
                            />
                            <FigCaption>
                                <b>Figure 8.</b> Same totals in fixed prices. This is better for
                                comparing growth paths independent of inflation.
                            </FigCaption>
                        </FigureBlock>
                    </FigureRow>

                    <FigureRow>
                        <FigureBlock>
                            <FigureImage
                                src={RegionStudents}
                                alt="Region 01 forecasted students over time"
                            />
                            <FigCaption>
                                <b>Figure 9.</b> Region 01 (Stockholms län) forecasted student counts
                                by school type. These flows drive the cost projections.
                            </FigCaption>
                        </FigureBlock>

                        <FigureBlock>
                            <FigureImage
                                src={BaselineForecastRegion01}
                                alt="Baseline forecast check for Region 01 births"
                            />
                            <FigCaption>
                                <b>Figure 10.</b> Birth forecast vs history for Region 01 — a quick
                                visual check that the baseline model behaves reasonably.
                            </FigCaption>
                        </FigureBlock>
                    </FigureRow>

                    <FigureRow>
                        <FigureBlock>
                            <FigureImage
                                src={RegionCurrentTotals}
                                alt="Region 01 totals, current prices"
                            />
                            <FigCaption>
                                <b>Figure 11.</b> Region 01 totals in current prices. This is what
                                municipalities would compare with budget numbers.
                            </FigCaption>
                        </FigureBlock>

                        <FigureBlock>
                            <FigureImage
                                src={RegionFixedTotals}
                                alt="Region 01 totals, fixed prices"
                            />
                            <FigCaption>
                                <b>Figure 12.</b> Region 01 totals in fixed prices, useful for
                                long-term real growth analysis.
                            </FigCaption>
                        </FigureBlock>
                    </FigureRow>

                    <FigureRow>
                        <FigureBlock>
                            <FigureImage
                                src={RegionCurrentPerStudent}
                                alt="Region 01 cost per student, current prices"
                            />
                            <FigCaption>
                                <b>Figure 13.</b> Cost per student (current) in Region 01, for both
                                grundskola and gymnasieskola.
                            </FigCaption>
                        </FigureBlock>

                        <FigureBlock>
                            <FigureImage
                                src={RegionFixedPerStudent}
                                alt="Region 01 cost per student, fixed prices"
                            />
                            <FigCaption>
                                <b>Figure 14.</b> Real cost per student in Region 01, smoothing out
                                inflation to show underlying spending growth.
                            </FigCaption>
                        </FigureBlock>
                    </FigureRow>
                </SectionBlock>

                {/* MODEL QUALITY */}
                <SectionBlock>
                    <h3>Model quality and metrics</h3>
                    <p>
                        For each region I compare simple baselines (naive and drift) with exponential
                        smoothing using a 2019–2023 test window. The pipeline records{" "}
                        <b>MAE</b>, <b>RMSE</b>, and <b>SMAPE</b> and then picks the best model per
                        region into a <code>best_models_births.csv</code> summary.
                    </p>
                    <p>
                        Stockholm, for example, achieves MAE ≈ 930 births and SMAPE ≈ 1.7&nbsp;% with
                        exponential smoothing — strong enough for medium-term planning, while still
                        leaving room for more advanced models in a future iteration.
                    </p>
                </SectionBlock>

                {/* DASHBOARD + CONCLUSION */}
                <SectionBlock>
                    <h3>Dashboard experience</h3>
                    <p>
                        The Streamlit dashboard ties everything together. It reads only from the
                        <code>artifacts/</code> folder, so the forecasting pipeline can evolve
                        independently from the UI. The main pages are:
                    </p>
                    <ul>
                        <li>
                            <b>EDA</b> – explores historical births and cost coverage.
                        </li>
                        <li>
                            <b>Model comparison</b> – best model per region + metrics.
                        </li>
                        <li>
                            <b>Forecast &amp; Costs</b> – births, cohorts, and education costs with a{" "}
                            <b>price basis selector</b>.
                        </li>
                        <li>
                            <b>Costs dashboard</b> – a focused view on cost levels and growth.
                        </li>
                    </ul>
                    <p>
                        Overall, EduForecast turns SCB statistics into an interpretable, extensible
                        forecasting system that can support both national and regional education
                        planning.
                    </p>
                </SectionBlock>

                {/* CTAs */}
                <CTAStack>
                    <PrimaryCTA
                        href="https://edu-costs-sweden-prognos.streamlit.app/Forecast_and_Costs"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open the live dashboard
                    </PrimaryCTA>
                    <SecondaryCTA
                        href="https://github.com/girlierazon84/Education_Costs_Birth_Growth_Forecasting"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View the repository
                    </SecondaryCTA>
                </CTAStack>
            </Container>
        </ProjectSection>
    );
};

export default EduForecast;
