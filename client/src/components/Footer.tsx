// client/src/components/Footer.tsx
"use client";

import React from "react";
import styled from "styled-components";
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon
} from "@mui/icons-material";
import { motion } from "framer-motion";
import DSBackground from "../assets/images/DS_bg.jpg";


/* =========================
    Styled Components
   ========================= */
const FooterContainer = styled.footer`
  width: 100%;
  color: var(--primary-color);
  z-index: 30;
  overflow: hidden;
  margin-top: auto; /* let it sit at bottom when content is short */

  background: url(${DSBackground.src}) center/cover no-repeat;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(10px); /* 🔒 keep blur */
    z-index: -1;
  }

  position: relative;
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.85rem 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 1rem 2.5rem;
    flex-direction: row;
    align-items: center;
  }
`;

// Left side: text block
const TextBlock = styled.div`
  text-align: center;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const TopLine = styled.div`
  font-size: 0.8rem;
  opacity: 0.85;
  margin-bottom: 0.15rem;
`;

const NameRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.35rem;
  align-items: baseline;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const NameLabel = styled.span`
  font-size: 0.85rem;
  opacity: 0.8;
`;

const NameHighlight = styled.span`
  font-size: 1.05rem;
  font-weight: 900;
  letter-spacing: 0.03em;
  background-image: linear-gradient(270deg, #f3c408, #0cc4a8, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Professions = styled.p`
  margin-top: 0.2rem;
  font-size: 0.75rem;
  line-height: 1.5;
  opacity: 0.9;
  max-width: 520px;

  @media (min-width: 768px) {
    font-size: 0.78rem;
  }
`;

const Tagline = styled(motion.p)`
  margin-top: 0.35rem;
  font-size: 0.8rem;
  font-style: italic;
  font-weight: 700;
  color: var(--fourthly-color);

  @media (min-width: 768px) {
    font-size: 0.78rem;
  }
`;

// Right side: social icons
const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const IconButton = styled(motion.a)`
  width: 38px;
  height: 38px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.6);
  backdrop-filter: blur(8px);

  color: var(--primary-color);
  text-decoration: none;
  cursor: pointer;

  transition: border-color 0.25s ease, background 0.25s ease;

  &:hover {
    border-color: #f3c408;
    background: radial-gradient(circle at 30% 10%, #0cc4a8 0, #020617 60%);
  }

  &.linkedin {
    svg {
      color: #0a66c2;
    }
  }

  &.github {
    svg {
      color: #c4b5fd;
    }
  }

  &.email {
    svg {
      color: #fbbf24;
    }
  }

  svg {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    width: 34px;
    height: 34px;

    svg {
      font-size: 1.2rem;
    }
  }
`;

/* =========================
    Footer Component
   ========================= */

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterInner>
        <TextBlock>
          <TopLine>© {year} • Portfolio</TopLine>

          <NameRow>
            <NameLabel>Created by</NameLabel>
            <NameHighlight>Girlie Quindao Razon</NameHighlight>
          </NameRow>

          <Professions>
            Junior Data Scientist · ML Developer · BI Analyst · Data Analyst ·
            Data Engineer · MERN Stack Developer
          </Professions>

          <Tagline
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Gather. Query. Refine.
          </Tagline>
        </TextBlock>

        <SocialLinks>
          <IconButton
            href="mailto:girlie.razon84@gmail.com"
            aria-label="Send email to Girlie"
            className="email"
            whileHover={{ scale: 1.08, y: -1 }}
            whileTap={{ scale: 0.96 }}
          >
            <EmailIcon />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/in/girlie-razon"
            aria-label="Visit LinkedIn profile"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -1 }}
            whileTap={{ scale: 0.96 }}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            href="https://github.com/girlierazon84"
            aria-label="Visit GitHub profile"
            className="github"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -1 }}
            whileTap={{ scale: 0.96 }}
          >
            <GitHubIcon />
          </IconButton>
        </SocialLinks>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
