import React from "react";
import { Metadata } from "next";
import '../index.css';

export const metadata: Metadata = {
    title: 'React App',
    description: 'Web site created with Next.js.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <div id="root">{children}</div>
        <script type="module" src="/src/index.tsx"></script>
        </body>
        </html>
    )
}