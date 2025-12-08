// client/src/app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Providers from "./providers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


// Metadata for the portfolio site
export const metadata: Metadata = {
  title: "G.Q.R. - Portfolio",
  description:
    "Portfolio built with Next.js, TypeScript, styled-components & MERN backend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="app-container">
            <Navbar />
            <main className="page-content">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
