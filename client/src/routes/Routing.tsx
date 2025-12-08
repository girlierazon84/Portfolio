// client/src/routes/Routing.tsx
"use client";

import React from "react";
import RoutingPath from "./RoutingPath";
import Home from "../pages/Home";
import About from "../pages/AboutPage";
import Skills from "../pages/SkillsPage";
import Projects from "../pages/ProjectsPage";
import Contact from "../pages/ContactPage";
import TrichMind from "../components/projects/TrichMind";


/**------------------------------------------------------------------------
    In Next.js, routing is handled by the `app/` or `pages/` directory,
    so we no longer use `react-router-dom` here.
    This file now simply exports a route config object you can
    reference elsewhere if needed (e.g. for navigation).
---------------------------------------------------------------------------*/
// Route configuration array
export const routesConfig = [
    { path: RoutingPath.HOME, label: "Home", Component: Home },
    { path: RoutingPath.ABOUT, label: "About", Component: About },
    { path: RoutingPath.SKILLS, label: "Skills", Component: Skills },
    { path: RoutingPath.PROJECTS, label: "Projects", Component: Projects },
    { path: RoutingPath.CONTACT, label: "Contact", Component: Contact },
    { path: RoutingPath.TRICHMIND, label: "TrichMind", Component: TrichMind },
];

// Optional: a trivial component so imports like `import { Routing }` don't explode.
// In a pure Next.js setup you normally wouldn't use this at all.
const Routing: React.FC = () => {
  // You could render <Home /> here or nothing at all.
    return <Home />;
};

export default Routing;
