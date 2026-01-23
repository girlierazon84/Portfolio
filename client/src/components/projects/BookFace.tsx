// client/src/components/projects/BookFace.tsx

// client/src/components/projects/BookFace.tsx

"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

import DSBackground from "../../assets/images/DS_bg.jpg";
import BookFaceLogo from "../../assets/images/BookFace-logo.png";

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
    gap: 1rem;
    text-align: center;
`;

const LogoRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
`;

const LogoImage = styled(Image)`
    width: 72px;
    height: auto;

    @media (max-width: 768px) {
        width: 60px;
    }
`;

const Wordmark = styled.img`
    height: 44px;
    width: auto;
    display: block;

    @media (max-width: 768px) {
        height: 38px;
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

// Static wordmark image (from original CRA app)
const BOOKFACE_WORDMARK =
    "https://see.fontimg.com/api/rf5/K74zp/ZjA0ZDIwYjE0YzZmNDIzYjkzNzA1ZTg1OTgwZGM3MTQudHRm/Qm9va0ZhY2U/motterdam.png?r=fs&h=98&w=1500&fg=000000&bg=FFFFFF&tb=1&s=65";

/**----------------------
    Component
-------------------------*/
const BookFace: React.FC = () => {
    return (
        <ProjectSection>
            <Container>
                <Header>
                    <LogoRow>
                        <LogoImage
                            src={BookFaceLogo}
                            alt="BookFace logo"
                            width={72}
                            height={72}
                            priority
                        />
                        <Wordmark src={BOOKFACE_WORDMARK} alt="BookFace wordmark" />
                    </LogoRow>

                    <Subtitle>
                        Fullstack MERN social app with JWT auth, media uploads, and cloud
                        deployment on Render + Vercel.
                    </Subtitle>

                    <MetaLinks>
                        <PillLink
                            href="https://bookface-fullstack-mern.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live app (Vercel)
                        </PillLink>
                        <PillLink
                            href="https://bookface-nwjl.onrender.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Backend API (Render)
                        </PillLink>
                        <PillLink
                            href="https://github.com/girlierazon84/Bookface_Fullstack_MERN"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub repo
                        </PillLink>
                    </MetaLinks>
                </Header>

                {/* OVERVIEW */}
                <Section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3>Overview</h3>
                    <p>
                        BookFace is a fullstack MERN social application where users can
                        register, log in and out, customize their profile, and share posts
                        with optional media uploads. It was built as a capstone-style
                        project to practice end-to-end web app design: authentication,
                        authorization, file uploads, validation, and production deployment.
                    </p>
                    <p>
                        The frontend is a React + TypeScript SPA styled with
                        styled-components and powered by Axios for API calls. The backend
                        is a Node.js + Express + TypeScript API, using MongoDB Atlas for
                        persistence and Cloudinary for media hosting. The system is
                        deployed with the backend on Render and the frontend on Vercel.
                    </p>
                </Section>

                {/* FEATURES */}
                <Section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                >
                    <h3>Core features</h3>
                    <Callout>
                        <p>
                            <b>Account & security</b>
                        </p>
                        <ul>
                            <li>Register, login, and logout with JSON Web Tokens (JWT).</li>
                            <li>Auth-protected routes on both client and server.</li>
                        </ul>

                        <p>
                            <b>Social feed</b>
                        </p>
                        <ul>
                            <li>View a feed of posts from all users.</li>
                            <li>Create new posts with text and optional media.</li>
                        </ul>

                        <p>
                            <b>Media uploads with validation</b>
                        </p>
                        <ul>
                            <li>Avatar: max 5MB, image only.</li>
                            <li>Cover photo: max 8MB, image only.</li>
                            <li>
                                Post media: max 25MB per file, up to 4 files (image or video).
                            </li>
                        </ul>
                    </Callout>
                </Section>

                {/* ARCHITECTURE */}
                <Section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h3>Architecture & tech stack</h3>
                    <ul>
                        <li>
                            <b>Frontend:</b> React + TypeScript (CRA), styled-components,
                            Axios.
                        </li>
                        <li>
                            <b>Backend:</b> Node.js, Express, TypeScript, modular structure
                            (controllers, routes, services, middlewares, schemas, utils).
                        </li>
                        <li>
                            <b>Database:</b> MongoDB Atlas with a dedicated{" "}
                            <code>bookface-mern</code> database.
                        </li>
                        <li>
                            <b>Media hosting:</b> Cloudinary for avatars, cover photos, and
                            post media.
                        </li>
                        <li>
                            <b>Deployment:</b> Backend on Render, frontend on Vercel with
                            environment-specific API base URLs.
                        </li>
                    </ul>
                </Section>

                {/* DEV & DEPLOYMENT */}
                <Section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    <h3>Development & deployment</h3>
                    <p>
                        Locally, the backend runs on <b>http://localhost:3001</b> and the
                        frontend on <b>http://localhost:3000</b>. Environment variables
                        configure MongoDB, Cloudinary, and JWT secrets for development and
                        production.
                    </p>
                    <ul>
                        <li>
                            <b>Backend local env:</b>{" "}
                            <code>backend/.env (SERVER_PORT, MONGO_URI, DB_NAME, CLOUDINARY_*, JWT_SECRET)</code>
                        </li>
                        <li>
                            <b>Frontend local env:</b>{" "}
                            <code>frontend/.env (REACT_APP_API_BASE_URL)</code>
                        </li>
                        <li>
                            <b>Render:</b> builds the backend from <code>backend/</code>{" "}
                            with <code>npm ci && npm run build</code>, then{" "}
                            <code>npm start</code>.
                        </li>
                        <li>
                            <b>Vercel:</b> builds the frontend from <code>frontend/</code>{" "}
                            using <code>npm run build</code> (CRA preset).
                        </li>
                    </ul>
                </Section>

                {/* ISSUES */}
                <Section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3>Common issues & hardening</h3>
                    <Callout>
                        <p>
                            <b>CORS & environments</b>
                        </p>
                        <p>
                            CORS is configured with a <code>CORS_ORIGINS</code> environment
                            variable. In production it includes the Vercel frontend URL:
                        </p>
                        <p>
                            <code>
                                CORS_ORIGINS=https://bookface-fullstack-mern.vercel.app
                            </code>
                        </p>
                        <p>
                            For local development, localhost is added as well.
                        </p>

                        <p>
                            <b>MongoDB Atlas connectivity</b>
                        </p>
                        <p>
                            When deploying to Render, MongoDB Atlas needs Render&apos;s IP
                            range whitelisted under <i>Network Access</i>. During
                            development, <code>0.0.0.0/0</code> is a quick but less strict
                            option.
                        </p>

                        <p>
                            <b>Upload failures</b>
                        </p>
                        <p>
                            Validation errors such as “Media file is too large (max 25MB per
                            file)” come from the backend guardrails — users are encouraged to
                            compress or trim media before posting.
                        </p>
                    </Callout>
                </Section>

                {/* CTAs */}
                <CTAStack>
                    <PrimaryCTA
                        href="https://bookface-fullstack-mern.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open the live app
                    </PrimaryCTA>
                    <SecondaryCTA
                        href="https://github.com/girlierazon84/Bookface_Fullstack_MERN"
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

export default BookFace;
