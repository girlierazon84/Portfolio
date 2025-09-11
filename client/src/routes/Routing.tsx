import React from "react";
import { Routes, Route } from "react-router-dom";
import RoutingPath from "./RoutingPath";

import Home from "../pages/Home";
import About from "../pages/AboutPage";
import Skills from "../pages/SkillsPage";
import Projects from "../pages/ProjectsPage";
import Contact from "../pages/ContactPage";

export const Routing: React.FC = () => {
    return (
        <Routes>
            <Route path={RoutingPath.HOME} element={<Home />} />
            <Route path={RoutingPath.ABOUT} element={<About />} />
            <Route path={RoutingPath.SKILLS} element={<Skills />} />
            <Route path={RoutingPath.PROJECTS} element={<Projects />} />
            <Route path={RoutingPath.CONTACT} element={<Contact />} />
        </Routes>
    );
};
