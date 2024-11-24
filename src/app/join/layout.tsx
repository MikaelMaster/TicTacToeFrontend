import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "Join Game - Tic Tac Toe",
    description: "Join a game of Tic Tac Toe.",
}

export default function JoinGameLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en-US">
            <body>
                {children}
            </body>
        </html>
    )
}