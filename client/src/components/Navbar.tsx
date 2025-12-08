// client/src/components/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import DSBackground from "../assets/images/DS_bg.jpg";
import PortfolioLogo from "../assets/images/portfolio_logo.png";


/**----------------------
    Styled Components
-------------------------*/
// Animation for mobile menu fade down
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

// Navbar container with dynamic background based on scroll
const NavbarContainer = styled.nav<{ $isScrolled: boolean }>`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  position: sticky;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease;

  /* background image stays the same */
  background: url(${DSBackground.src}) center/cover no-repeat;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ $isScrolled }) =>
      $isScrolled ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.45)"};
    backdrop-filter: blur(12px); /* 🔒 keep same blur */
    z-index: -1;
    transition: background 0.3s ease;
  }
`;

// Inner wrapper to constrain width
const NavbarInner = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0.6rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 0.8rem 2rem;
  }
`;

// ✅ Style the Next.js Link itself (modern API)
const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
`;

// Logo image styling
const LogoImage = styled(Image)`
  height: auto;
  width: 90px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    width: 110px;
  }
`;

// Desktop menu styling
const DesktopMenu = styled.ul`
  display: none;
  gap: 1.75rem;
  font-family: "Oxygen", sans-serif;
  list-style: none;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`;

// Menu item styling (also a styled Next Link)
const MenuItem = styled(Link)`
  color: var(--primary-color, #fbbf24);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.03em;
  position: relative;
  text-transform: uppercase;

  &:hover {
    color: var(--fifthly-color, #fbbf24);
  }

  &:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #fbbf24;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

// Hamburger button styling – circular glassmorphism
const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.6);
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(10px);
  padding: 0;
  cursor: pointer;
  position: relative;
  z-index: 60;

  @media (min-width: 768px) {
    display: none;
  }
`;

// Hamburger line styling – centered within the circle
const Line = styled.span<{ $isOpen?: boolean; $index: number }>`
  position: absolute;
  left: 50%;
  width: 1.5rem;
  height: 0.125rem;
  background-color: var(--fifthly-color, #fbbf24);
  border-radius: 9999px;
  transition: all 0.3s ease;
  transform-origin: center;
  transform: translateX(-50%);

  ${({ $index, $isOpen }) =>
    $index === 0 &&
    `
      top: ${$isOpen ? "1.35rem" : "1rem"};
      transform: translateX(-50%) ${$isOpen ? "rotate(45deg)" : "rotate(0)"};
    `}

  ${({ $index, $isOpen }) =>
    $index === 1 &&
    `
      top: 1.35rem;
      opacity: ${$isOpen ? 0 : 1};
    `}

  ${({ $index, $isOpen }) =>
    $index === 2 &&
    `
      top: ${$isOpen ? "1.35rem" : "1.7rem"};
      transform: translateX(-50%) ${$isOpen ? "rotate(-45deg)" : "rotate(0)"};
    `}
`;

// Mobile menu overlay styling
const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.96);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;
  font-family: "Oxygen", sans-serif;
  font-size: 1.3rem;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 0.4s ease-in-out;
  animation: ${({ $isOpen }) => ($isOpen ? fadeDown : "none")} 0.4s ease forwards;
  z-index: 40;

  ${MenuItem} {
    font-size: 1.4rem;
  }
`;

// Links array
const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

// Navbar component
const Navbar: React.FC = () => {
  // State for mobile menu and scroll detection
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect to darken navbar background slightly
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarContainer $isScrolled={isScrolled}>
      <NavbarInner>
        {/* Logo */}
        <LogoLink href="/" aria-label="Go to home">
          <LogoImage
            src={PortfolioLogo}
            alt="Girlie Q. Razon Logo"
            priority
            sizes="(max-width: 768px) 90px, 110px"
          />
        </LogoLink>

        {/* Desktop navigation */}
        <DesktopMenu>
          {links.map((link) => (
            <li key={link.href}>
              <MenuItem href={link.href}>{link.name}</MenuItem>
            </li>
          ))}
        </DesktopMenu>

        {/* Mobile hamburger */}
        <HamburgerButton
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {[0, 1, 2].map((i) => (
            <Line key={i} $index={i} $isOpen={isOpen} />
          ))}
        </HamburgerButton>
      </NavbarInner>

      {/* Mobile overlay menu */}
      <MobileMenu $isOpen={isOpen}>
        {links.map((link) => (
          <MenuItem
            key={link.href}
            href={link.href}
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
