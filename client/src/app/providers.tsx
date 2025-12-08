// client/src/app/providers.tsx
"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../assets/global/styles/globalStyles";
import theme from "../assets/global/styles/theme";


// Provider component to wrap the app with ThemeProvider and Global Styles
export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
}
