// client/src/routes/Routing.tsx
"use client";

import React from "react";
import RoutingPath from "./RoutingPath";

/**------------------------------------------------------------------------
    In Next.js, routing is handled by the `app/` directory, so we do NOT
    use react-router-dom here anymore.

    This file now only exports a route config you can use for things like
    nav menus, breadcrumbs, etc. It does NOT import or render page
    components, which avoids TypeScript/Next build errors.
---------------------------------------------------------------------------*/

// Route configuration array – paths + labels only
export const routesConfig = [
    { path: RoutingPath.HOME, label: "Home" },
    { path: RoutingPath.ABOUT, label: "About" },
    { path: RoutingPath.SKILLS, label: "Skills" },
    { path: RoutingPath.PROJECTS, label: "Projects" },
    { path: RoutingPath.CONTACT, label: "Contact" },
    { path: RoutingPath.TRICHMIND, label: "TrichMind" },
] as const;

/**
 * Optional dummy component:
 * If somewhere you still have `import Routing from "@/routes/Routing";`
 * this will prevent runtime errors. In a pure Next.js setup you
 * normally wouldn't use this component at all.
 */
const Routing: React.FC = () => {
  // Nothing to render – Next.js uses app/ routes instead.
    return null;
};

export default Routing;
