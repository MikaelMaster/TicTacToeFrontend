'use client';

import { useTranslation } from 'react-i18next';
import '../globals.css';
import '../../../i18n';

export default function JoinLayout({ children }: { children: Readonly<React.ReactNode> }) {
    const { t } = useTranslation();
    
    return (
        <>
            <head>
                <title>{t("title_join")}</title>
                <meta name="description" content={t("description")} />
            </head>

            <body>
                {children}
            </body>
        </>
    );
};