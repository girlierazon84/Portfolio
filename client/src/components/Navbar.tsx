// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import RoutingPath from "../routes/RoutingPath";
import DSBackground from "../assets/images/DS_bg.jpg";
import PortfolioLogo from "../assets/images/portfolio_logo.png"; // ✅ Import logo

// Fade-down animation for mobile menu
const fadeDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

// Navbar Container with glass effect
const NavbarContainer = styled.nav<{ isScrolled: boolean }>`
    width: 100%;
    padding: 0.75rem 3.5rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);

    background: url(${DSBackground}) center/cover no-repeat;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: ${({ isScrolled }) =>
            isScrolled ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.45)"};
        backdrop-filter: blur(12px);
        z-index: -1;
        transition: background 0.3s ease;
    }
    @media (max-width: 768px) {
        padding: 0.5rem 1.5rem 0.5rem 1rem;
    }
`;

// ✅ Logo image
const LogoImage = styled.img`
    height: 80px;
    width: 100px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    @media (min-width: 768px) {
        height: 100%;
    }
`;

// Desktop menu
const DesktopMenu = styled.ul`
    display: none;
    gap: 1.5rem;
    font-family: "Oxygen", sans-serif;

    @media (min-width: 768px) {
        display: flex;
    }
`;

const MenuItem = styled(Link)`
    color: #f9fafb;
    text-decoration: none;
    font-weight: 500;
    position: relative;

    &:hover {
        color: #d1d5db;
    }

    &:after {
        content: "";
        position: absolute;
        width: 0%;
        height: 2px;
        bottom: -3px;
        left: 0;
        background-color: #fbbf24; // amber-400
        transition: width 0.3s ease;
    }

    &:hover:after {
        width: 100%;
    }
`;

// Hamburger button
const HamburgerButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    position: relative;
    border: none;
    background: none;
    cursor: pointer;
    z-index: 60;

    @media (min-width: 768px) {
        display: none;
    }
`;

const Line = styled.span<{ isOpen?: boolean; index: number }>`
    position: absolute;
    width: 1.5rem;
    height: 0.125rem;
    background-color: #fff;
    border-radius: 9999px;
    transition: all 0.3s ease;

    ${({ index, isOpen }) =>
        index === 0 &&
        `
        top: ${isOpen ? "0.875rem" : "0.5rem"};
        transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
    `}
    ${({ index, isOpen }) =>
        index === 1 &&
        `
        top: 0.875rem;
        opacity: ${isOpen ? 0 : 1};
    `}
    ${({ index, isOpen }) =>
        index === 2 &&
        `
        top: ${isOpen ? "0.875rem" : "1.25rem"};
        transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
    `}
`;

// Mobile menu overlay
const MobileMenu = styled.div<{ isOpen: boolean }>`
    position: fixed;
    inset: 0;
    background: rgba(31, 41, 55, 0.95);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    font-family: "Oxygen", sans-serif;
    font-size: 1.5rem;
    transform: ${({ isOpen }) =>
        isOpen ? "translateY(0)" : "translateY(-100%)"};
    transition: transform 0.4s ease-in-out;
    animation: ${({ isOpen }) => (isOpen ? fadeDown : "none")} 0.4s ease forwards;
    z-index: 40;
`;

const links = [
    { name: "Home", path: RoutingPath.HOME },
    { name: "About", path: RoutingPath.ABOUT },
    { name: "Skills", path: RoutingPath.SKILLS },
    { name: "Projects", path: RoutingPath.PROJECTS },
    { name: "Contact", path: RoutingPath.CONTACT },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <NavbarContainer isScrolled={isScrolled}>
            {/* ✅ Logo Image instead of text */}
            <Link to={RoutingPath.HOME}>
                <LogoImage src={PortfolioLogo} alt="Girlie Q. Razon Logo" />
            </Link>

            <DesktopMenu>
                {links.map((link, idx) => (
                    <MenuItem key={idx} to={link.path}>
                        {link.name}
                    </MenuItem>
                ))}
            </DesktopMenu>

            <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
                {[0, 1, 2].map((i) => (
                    <Line key={i} index={i} isOpen={isOpen} />
                ))}
            </HamburgerButton>

            <MobileMenu isOpen={isOpen}>
                {links.map((link, idx) => (
                    <MenuItem
                        key={idx}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </MenuItem>
                ))}
            </MobileMenu>
        </NavbarContainer>
    );
};

export default Navbar;
// ✅ Updated Navbar with background image, logo, and improved styling