// src/components/Footer.tsx
import React from "react";
import styled from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../../src/index.css";
import DSBackground from "../assets/images/DS_bg.jpg"; // ✅ Import background
import { motion } from "framer-motion";

const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 1.5rem;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.3);
    z-index: 50;
    overflow: hidden;

    // Background with dark overlay + blur
    background: url(${DSBackground}) center/cover no-repeat;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.7); // ✅ Dark overlay
        backdrop-filter: blur(6px); // ✅ Blur effect
        z-index: -1;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem 3rem;
    }
`;

const FooterText = styled.div`
    text-align: center;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;

    @media (min-width: 768px) {
        text-align: left;
        margin-bottom: 0;
    }
`;

const Tagline = styled(motion.p)`
    margin-top: 0.5rem;
    font-size: 0.85rem;
    font-style: italic;
    font-weight: bold;
    color: var(--fourthly-color);

    @media (min-width: 768px) {
        font-size: 0.75rem;
    }
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 1.5rem;

    a {
        color: var(--primary-color);
        transition: transform 0.3s ease, color 0.3s ease;
        display: flex;

        &:hover {
            transform: scale(1.2);
        }
    }

    @media (max-width: 480px) {
        gap: 1rem;
    }
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterText>
                © {new Date().getFullYear()} Girlie Quindao Razon | Junior Data Scientist | ML Developer | BI Analyst | Data Analyst | Data Engineer | MERN Stack Developer
                <Tagline
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                >
                    Gather. Query. Refine.
                </Tagline>
            </FooterText>
            <SocialLinks>
                <a href="mailto:girlie.razon84@gmail.com" aria-label="Email">
                    <EmailIcon fontSize="large" />
                </a>
                <a
                    href="https://www.linkedin.com/in/girlie-razon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    style={{ color: "#0A66C2" }}
                >
                    <LinkedInIcon fontSize="large" />
                </a>
                <a
                    href="https://github.com/girlierazon84"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    style={{ color: "#6e5494" }}
                >
                    <GitHubIcon fontSize="large" />
                </a>
            </SocialLinks>
        </FooterContainer>
    );
};

export default Footer;
