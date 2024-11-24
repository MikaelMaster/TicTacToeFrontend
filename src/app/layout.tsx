import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
    title: "Tic Tac Toe",
    description: "Play Tic Tac Toe with your friends."
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en-US">
            <body className={`${inter.className} bg-[var(--background-1)] min-h-screen`}>
                <Toaster position="bottom-center" />
                {children}
            </body>
        </html>
    )
}