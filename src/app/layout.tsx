'use client';

import { useEffect } from "react";
import "./globals.css";
import "../../i18n";
import { useTranslation } from "react-i18next";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const { i18n } = useTranslation();
    
    useEffect(() => {
        const savedLanguage = localStorage.getItem('lang');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, []);

    return (
        <html lang="en">
            {children}
        </html>
    );
};