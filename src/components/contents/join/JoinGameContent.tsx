'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoLanguage } from 'react-icons/io5';
import Flag from 'react-world-flags';
import '../../../../i18n';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export function JoinGameContent() {
    const { t, i18n } = useTranslation();
    const [showLangDropdown, setShowLangDropdown] = useState(false);
    const changeLanguage = (lng: string) => {
        localStorage.setItem('lang', lng);
        i18n.changeLanguage(lng);
        setShowLangDropdown(false);
    };

    const [loading, setLoading] = useState(true);

    const [joinOption, setJoinOption] = useState<'RANDOM' | 'SPECIFY'>('RANDOM');
    const [playingCount, setPlayingCount] = useState<string | null>(null);
    const [playerId, setPlayerId] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setPlayingCount((Math.random() * 100).toFixed(0));
            setLoading(false);
        }, 500);
    }, []);

    return (
        <>
            {loading ? (
                <div className='relative flex flex-col items-center justify-center h-screen bg-[#1a1a1e] text-white'>
                    <span className='w-full flex items-center justify-center'>
                        <AiOutlineLoading3Quarters className="animate-spin" size={50} />
                    </span>
                    <p className='text-lg font-semibold mt-5'>
                        {t("loading")}
                    </p>
                </div>
            ) : (
                <div className='relative flex flex-col items-center justify-center h-screen bg-[#1a1a1e] text-white'>
                    <div className="absolute top-4 right-4">
                        <button
                            className="flex items-center space-x-2 px-3 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition relative"
                            onClick={() => setShowLangDropdown(!showLangDropdown)}
                        >
                            <IoLanguage className="text-xl text-[#00aaff]" />
                            <span>{t("language")}</span>
                        </button>

                        <AnimatePresence>
                            {showLangDropdown && (
                                <motion.div
                                    className="absolute right-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg p-2 w-48"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <button
                                        onClick={() => changeLanguage("en")}
                                        className="w-full flex items-center px-2 py-1 hover:bg-gray-700 rounded space-x-2"
                                    >
                                        <Flag className="w-[25%]" code="US" />
                                        <span>English</span>
                                    </button>

                                    <button
                                        onClick={() => changeLanguage("pt")}
                                        className="w-full flex items-center px-2 py-1 hover:bg-gray-700 rounded space-x-2"
                                    >
                                        <Flag className="w-[25%]" code="BR" />
                                        <span>Português</span>
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className='w-full items-center flex flex-col gap-4 mb-10'>
                        <h1 className="text-4xl font-bold text-[#00aaff]">{t("title")}</h1>
                        <div className='w-full items-center flex flex-col gap-1'>
                            <p className='text-xl'>Jogando: <strong>{playingCount}</strong></p>
                            <p className='text-xl'>Seu ID: <strong>{playerId}</strong></p>
                        </div>
                    </div>

                    <AnimatePresence>
                        <motion.div
                            className="overflow-hidden relative flex items-center justify-between w-auto min-w-[450px] bg-gray-700 rounded-full p-1"
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                key="random"
                                className={`w-auto min-w-[165px] text-center py-2 rounded-full cursor-pointer transition-all duration-500 text-white ${joinOption === "RANDOM" ? "bg-[#00aaff]" : ""}`}
                                onClick={() => setJoinOption("RANDOM")}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {t("random_match")}
                            </motion.div>
                            
                            <motion.div
                                key="specify"
                                className={`w-auto min-w-[165px] text-center py-2 rounded-full cursor-pointer transition-all duration-500 text-white ${joinOption === "SPECIFY" ? "bg-[#00aaff]" : ""}`}
                                onClick={() => setJoinOption("SPECIFY")}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {t("choose_opponent")}
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex flex-col items-center space-y-4 w-full max-w-sm">
                        {joinOption === "RANDOM" ? (
                            <button className="mt-20 w-full py-2 bg-[#00aaff] text-white rounded-md hover:bg-[#0088cc] transition">
                                {t("quick_match")}
                            </button>
                        ) : (
                            <>
                                <input
                                    type="text"
                                    placeholder={t("enter_opponent_name")}
                                    className="mt-5 w-full px-4 py-2 text-black rounded-md border-2 border-[#00aaff] focus:outline-none focus:border-[#00ffcc] transition"
                                />
                                <button className="w-full py-2 bg-[#00aaff] text-white rounded-md hover:bg-[#0088cc] transition">
                                    {t("find_opponent")}
                                </button>
                            </>
                        )}
                    </div>
                </div >
            )
            }
        </>
    );
}