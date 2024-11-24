import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Tic Tac Toe",
    description: "Play Tic Tac Toe with your friends."
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en-US">
            <body className="bg-gray-900 text-white">
                {children}
            </body>
        </html>
    )
}