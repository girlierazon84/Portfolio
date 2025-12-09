// client/src/app/page.tsx
"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Project";
import Contact from "../components/Contact";


/**----------------------
    Styled Components
-------------------------*/
// Main container – prevent horizontal scroll & add breathing room
const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  scroll-behavior: smooth;
  overflow-x: hidden;
  padding-block: 3rem;

  @media (min-width: 768px) {
    gap: 5rem;
    padding-block: 4rem;
  }
`;

// Section wrapper (motion-enabled)
const Section = styled(motion.section)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  scroll-margin-top: 5rem; /* still useful for in-page anchors */

  @media (min-width: 768px) {
    padding: 5rem 3rem;
  }
`;

// Full-width Animated Divider
const Divider = styled(motion.hr)`
  border: none;
  height: 2px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 3rem;
  border-radius: 999px;
  background: linear-gradient(225deg, #f3c408, #0cc4a8, #a78bfa);
  box-shadow:
    0 0 8px rgba(167, 139, 250, 0.5),
    0 0 16px rgba(12, 196, 168, 0.35);

  @media (max-width: 768px) {
    height: 1.5px;
    margin-bottom: 2.25rem;
  }
`;

// Fade-in for sections
const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// Divider animation
const dividerVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 },
};

/**----------------------------
    Main HomePage Component
-------------------------------*/
export default function HomePage() {
  return (
    <HomeContainer>
      {/* Hero */}
      <Section id="hero">
        <Hero />
      </Section>

      <Divider
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={dividerVariants}
        style={{ transformOrigin: "center" }}
      />

      {/* About */}
      <Section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={fadeInVariants}
      >
        <About />
      </Section>

      <Divider
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={dividerVariants}
        style={{ transformOrigin: "center" }}
      />

      {/* Skills */}
      <Section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={fadeInVariants}
      >
        <Skills />
      </Section>

      <Divider
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={dividerVariants}
        style={{ transformOrigin: "center" }}
      />

      {/* Projects */}
      <Section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        variants={fadeInVariants}
      >
        <Projects />
      </Section>

      <Divider
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={dividerVariants}
        style={{ transformOrigin: "center" }}
      />

      {/* Contact */}
      <Section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        variants={fadeInVariants}
      >
        <Contact />
      </Section>
    </HomeContainer>
  );
}
