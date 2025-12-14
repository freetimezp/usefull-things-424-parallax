import React from "react";

import "../src/style.css";

import LenisProvider from "../components/LenisProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-white text-black">
                <LenisProvider />
                {children}
            </body>
        </html>
    );
}
