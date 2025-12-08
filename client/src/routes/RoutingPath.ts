// client/src/routes/RoutingPath.ts

/**-----------------------------------------------------------------
    Central definition of route paths used across the portfolio.
    These paths correspond to your Next.js routes in `src/app`.
--------------------------------------------------------------------*/
// Define the routing paths as constants
const RoutingPath = {
    HOME: "/" as const,
    ABOUT: "/about" as const,
    SKILLS: "/skills" as const,
    PROJECTS: "/projects" as const,
    CONTACT: "/contact" as const,
    TRICHMIND: "/projects/trichmind" as const,
} as const;

// Define a type that represents the keys of the RoutingPath object
export type RoutingPathKey = keyof typeof RoutingPath;

export default RoutingPath;
