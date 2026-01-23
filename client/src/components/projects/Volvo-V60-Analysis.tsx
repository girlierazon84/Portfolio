// client/src/components/projects/Volvo-V60-Analysis.tsx

"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

import DSBackground from "../../assets/images/DS_bg.jpg";

// EDA & modelling figures
import DistPriceAll from "../../assets/images/Rplot-Distribution-Price-Volvo-V60-Car.png";
import DistPriceSplits from "../../assets/images/Distribution-Target-Variable-Train-Validation-Test-Dataset.png";
import PairsPlot from "../../assets/images/Rplot-Pairs-Target-Feature-Variables.png";
import CorrHeatmap from "../../assets/images/Corr-Heatmap-Numeric-Data.png";

import ScatterHpFuel from "../../assets/images/Scatter-Plot-Car-Price-VS-Horsepower-By-Fuel-Type.png";
import ScatterHpGearbox from "../../assets/images/Scatter-Plot-Car-Price-VS-Horsepower-BY-Gearbox-Type.png";
import ScatterMileageFuel from "../../assets/images/Scatter-Plot-Car-Price-VS-Mileage-BY-Fuel-Type.png";
import ScatterMileageGearbox from "../../assets/images/Scatter-Plot-Car-Price-VS-Mileage-By-Gearbox-Type.png";

import AddedVariablePlots from "../../assets/images/Added-Variable-Plots.png";
import MultiCollinearityAll from "../../assets/images/Check-All-Models-MultiCollinearity-Plots.png";

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
    gap: 1.75rem; /* tighter to avoid large vertical gaps */

    @media (max-width: 768px) {
        padding: 1.5rem;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 800;
    background-image: linear-gradient(225deg, #0cc4a8, #f3c408, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1.6rem;
    }
`;

const Subtitle = styled.h2`
    font-size: 1.1rem;
    font-weight: 520;
    color: var(--primary-color);
    max-width: 820px;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 0.98rem;
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
    gap: 0.85rem;

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

/**----------------------
    Component
-------------------------*/
const VolvoV60Analysis: React.FC = () => {
    return (
        <ProjectSection>
            <Container>
                <Header>
                    <Title>Volvo V60 Price Prediction – Multiple Linear Regression</Title>
                    <Subtitle>
                        Using 352 real Volvo V60 listings (2018–2023), I built and validated
                        multiple linear regression models to explain and predict car prices from
                        model year, mileage, fuel type, gearbox, and horsepower.
                    </Subtitle>

                    <MetaLinks>
                        <PillLink
                            href="https://github.com/girlierazon84/Kunskapskontrollen_R_Programmering"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub repo (R analysis)
                        </PillLink>
                    </MetaLinks>
                </Header>

                {/* DATASET OVERVIEW */}
                <Section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3>Dataset and structure</h3>
                    <p>
                        The Volvo V60 dataset contains <b>352 observations</b> and <b>6
                        variables</b>: <i>Model_Year</i>, <i>Mileage</i>, <i>Fuel</i>,{" "}
                        <i>Gearbox</i>, <i>Horsepower</i>, and <i>Price</i>. Model years range
                        from <b>2018</b> to <b>2023</b>, with mileage between{" "}
                        <b>567</b> and <b>48,582</b> km. Fuel types are{" "}
                        <b>Diesel</b> (185 cars), <b>Gasoline</b> (74), and{" "}
                        <b>Hybrid</b> (93). Most cars have automatic gearboxes (338 vs 14
                        manual), and horsepower ranges from <b>150</b> to{" "}
                        <b>463</b> hp. Prices span <b>129,900</b>–<b>599,900</b> SEK.
                    </p>
                    <p>
                        For modelling, the data was split into three disjoint sets:
                    </p>
                    <ul>
                        <li>Training set: <b>248</b> rows</li>
                        <li>Validation set: <b>53</b> rows</li>
                        <li>Test set: <b>51</b> rows</li>
                    </ul>

                    <FigureBlock>
                        <FigureImage
                            src={DistPriceAll}
                            alt="Overall distribution of Volvo V60 prices"
                        />
                        <FigCaption>
                            <b>Figure 1.</b> Overall price distribution for all 352 Volvo V60
                            listings. Prices are concentrated around 250,000–360,000 SEK with a
                            long right tail for higher-spec cars.
                        </FigCaption>
                    </FigureBlock>
                </Section>

                {/* TARGET DISTRIBUTION & SPLITS */}
                <Section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                >
                    <h3>Target distribution across train, validation, and test</h3>
                    <p>
                        Before modelling, I checked whether the <i>Price</i> distribution was
                        comparable across the train, validation, and test splits. This helps
                        ensure that performance metrics truly reflect generalisation rather than
                        data quirks in any single split.
                    </p>

                    <FigureBlock>
                        <FigureImage
                            src={DistPriceSplits}
                            alt="Price distribution across train, validation, and test datasets"
                        />
                        <FigCaption>
                            <b>Figure 2.</b> Side-by-side histograms of{" "}
                            <i>Price</i> in the train, validation, and test sets. All three splits
                            preserve a similar unimodal shape and range, which supports fair model
                            validation and testing.
                        </FigCaption>
                    </FigureBlock>
                </Section>

                {/* RELATIONSHIPS & CORRELATIONS */}
                <Section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h3>Price relationships with core features</h3>
                    <p>
                        I next looked at how <i>Price</i> moves with model year, mileage,
                        horsepower, and the categorical features. These plots give intuition for
                        the signs and shapes we expect from the regression coefficients.
                    </p>

                    <FigureBlock>
                        <FigureImage
                            src={PairsPlot}
                            alt="Scatterplot matrix of price vs key features"
                        />
                        <FigCaption>
                            <b>Figure 3.</b> Scatterplot pairs of <i>Price</i> against{" "}
                            <i>Model_Year</i>, <i>Mileage</i>, <i>Horsepower</i>,{" "}
                            <i>Fuel</i>, and <i>Gearbox</i>. Newer cars and more powerful cars
                            clearly sell for more, while higher mileage pulls prices down.
                        </FigCaption>
                    </FigureBlock>

                    <FigureBlock>
                        <FigureImage
                            src={CorrHeatmap}
                            alt="Correlation heatmap of numeric and dummy-encoded features"
                        />
                        <FigCaption>
                            <b>Figure 4.</b> Correlation heatmap for numeric and dummy-encoded
                            features. Price is strongly positively correlated with{" "}
                            <i>Model_Year</i> (≈0.72) and <i>Horsepower</i> (≈0.64), and
                            strongly negatively correlated with <i>Mileage</i> (≈-0.64).
                            Hybrid fuel and horsepower are highly correlated (≈0.83), while diesel
                            is negatively associated with horsepower and price.
                        </FigCaption>
                    </FigureBlock>
                </Section>

                {/* SCATTER PLOTS */}
                {/* Removed scroll-triggered animation here so this block always renders */}
                <Section>
                    <h3>Horsepower, mileage, and price by fuel and gearbox</h3>
                    <p>
                        To separate engine and transmission effects, I plotted price against
                        horsepower and mileage, faceted by fuel type and gearbox. Linear{" "}
                        <code>geom_smooth()</code> trends clarify how each factor behaves
                        conditionally.
                    </p>

                    <FigureBlock>
                        <FigureImage
                            src={ScatterHpFuel}
                            alt="Scatter plot: price vs horsepower by fuel type"
                        />
                        <FigCaption>
                            <b>Figure 5.</b> Price vs. horsepower by fuel type. Hybrids cluster at
                            higher horsepower and higher prices, while diesel cars are more often
                            mid-power, mid-price. This pattern supports positive horsepower and
                            fuel-type effects in the regression.
                        </FigCaption>
                    </FigureBlock>

                    <FigureBlock>
                        <FigureImage
                            src={ScatterHpGearbox}
                            alt="Scatter plot: price vs horsepower by gearbox type"
                        />
                        <FigCaption>
                            <b>Figure 6.</b> Price vs. horsepower by gearbox. Automatics dominate
                            the higher price and horsepower range, whereas manuals tend to be
                            slightly cheaper and less powerful.
                        </FigCaption>
                    </FigureBlock>

                    <FigureBlock>
                        <FigureImage
                            src={ScatterMileageFuel}
                            alt="Scatter plot: price vs mileage by fuel type"
                        />
                        <FigCaption>
                            <b>Figure 7.</b> Price vs. mileage by fuel type. Across all fuels,
                            higher mileage lowers price, but the slope is steepest among hybrids,
                            reflecting how buyers penalise wear more strongly on premium
                            powertrains.
                        </FigCaption>
                    </FigureBlock>

                    <FigureBlock>
                        <FigureImage
                            src={ScatterMileageGearbox}
                            alt="Scatter plot: price vs mileage by gearbox type"
                        />
                        <FigCaption>
                            <b>Figure 8.</b> Price vs. mileage by gearbox. Both automatics and
                            manuals lose value as mileage increases, with automatics starting from
                            a higher base level.
                        </FigCaption>
                    </FigureBlock>
                </Section>

                {/* MODELLING */}
                <Section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3>Multiple linear regression model</h3>
                    <p>
                        I compared a baseline <b>intercept-only</b> model to a{" "}
                        <b>multiple linear regression</b> including{" "}
                        <i>Model_Year</i>, <i>Mileage</i>, <i>Fuel</i>, <i>Gearbox</i>, and{" "}
                        <i>Horsepower</i>.
                    </p>

                    <Callout>
                        <p>
                            <b>Final model (training set, n = 248):</b>
                        </p>
                        <ul>
                            <li>
                                <b>R²:</b> 0.843
                            </li>
                            <li>
                                <b>Adjusted R²:</b> 0.839
                            </li>
                            <li>
                                <b>Residual standard error (σ):</b> ≈ 35,020 SEK
                            </li>
                            <li>
                                <b>Key coefficients:</b>
                                <ul>
                                    <li>
                                        <i>Model_Year</i>: +21,060 SEK per year (p &lt; 2e-16)
                                    </li>
                                    <li>
                                        <i>Mileage</i>: −5.18 SEK per kilometre (p &lt; 2e-16)
                                    </li>
                                    <li>
                                        <i>Horsepower</i>: +779 SEK per hp (p &lt; 2e-16)
                                    </li>
                                    <li>
                                        <i>FuelHybrid</i>: −58,090 SEK vs gasoline (p ≈ 1.3e-7)
                                    </li>
                                    <li>
                                        <i>FuelGasoline</i>: −14,120 SEK vs diesel baseline
                                        (p ≈ 0.017)
                                    </li>
                                    <li>
                                        <i>GearboxManual</i>: −25,660 SEK vs automatic (p ≈
                                        0.029)
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <p>
                            Overall, newer model years and more horsepower push prices up,
                            whereas higher mileage, manual gearboxes, and certain fuel types pull
                            prices down.
                        </p>
                    </Callout>
                </Section>

                {/* MULTICOLLINEARITY & ADDED VARIABLE PLOTS */}
                <Section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                >
                    <h3>Multicollinearity checks and partial relationships</h3>
                    <p>
                        Because some predictors are correlated (for example, hybrids tend to be
                        newer and more powerful), I checked multicollinearity diagnostics (e.g.
                        VIF) and visualised partial relationships using added-variable plots.
                        Competing candidate models showed very similar information criteria
                        (AIC, BIC) and R², so the chosen specification balances performance and
                        interpretability.
                    </p>

                    <FigureBlock>
                        <FigureImage
                            src={MultiCollinearityAll}
                            alt="Multi-collinearity diagnostics for the linear models"
                        />
                        <FigCaption>
                            <b>Figure 9.</b> Multi-collinearity and model diagnostic plots across
                            candidate regressions. Despite some correlation between{" "}
                            <i>Horsepower</i> and <i>FuelHybrid</i>, VIF values remain in an
                            acceptable range and information criteria are nearly identical across
                            subset models, supporting the chosen specification.
                        </FigCaption>
                    </FigureBlock>

                    <FigureBlock>
                        <FigureImage
                            src={AddedVariablePlots}
                            alt="Added-variable plots for each predictor in the chosen model"
                        />
                        <FigCaption>
                            <b>Figure 10.</b> Added-variable (partial regression) plots for the
                            final model. Each panel shows the unique contribution of a predictor
                            after controlling for the others. The strong positive slopes for{" "}
                            <i>Model_Year</i> and <i>Horsepower</i>, and the negative slope
                            for <i>Mileage</i>, visually reinforce the coefficient estimates.
                        </FigCaption>
                    </FigureBlock>
                </Section>

                {/* MODEL PERFORMANCE & INTERVALS */}
                <Section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3>Model validation and performance</h3>
                    <p>
                        I evaluated the chosen regression model on the validation and test sets
                        using RMSE to quantify typical prediction errors.
                    </p>

                    <Callout>
                        <ul>
                            <li>
                                <b>Training RMSE:</b> ≈ 34,523 SEK
                            </li>
                            <li>
                                <b>Validation RMSE:</b> ≈ 32,170 SEK
                            </li>
                            <li>
                                <b>Test RMSE:</b> ≈ 41,046 SEK
                            </li>
                        </ul>
                        <p>
                            The similar magnitudes across splits suggest that the model
                            generalises reasonably well, with no obvious overfitting to the
                            training data.
                        </p>
                    </Callout>

                    <p>
                        Beyond point predictions, I also computed confidence intervals for the
                        mean price and prediction intervals for individual listings, giving a
                        more honest sense of uncertainty when pricing a single car.
                    </p>
                </Section>

                {/* CONCLUSION */}
                <Section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                >
                    <h3>Conclusion</h3>
                    <p>
                        This Volvo V60 study shows that a well-specified multiple linear
                        regression can explain around <b>84%</b> of the price variance using a
                        handful of interpretable features. Newer cars with more horsepower and
                        automatic gearboxes are worth more, while higher mileage and certain fuel
                        types reduce price. The combination of EDA, subset selection,
                        multicollinearity checks, and validation/test RMSE gives confidence that
                        the model is both interpretable and practically useful as a pricing
                        tool—while still leaving room for future extensions with non-linear or
                        machine-learning models.
                    </p>
                </Section>

                {/* CTA */}
                <CTAStack>
                    <PrimaryCTA
                        href="https://github.com/girlierazon84/Kunskapskontrollen_R_Programmering"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View the full R project on GitHub
                    </PrimaryCTA>
                </CTAStack>
            </Container>
        </ProjectSection>
    );
};

export default VolvoV60Analysis;
