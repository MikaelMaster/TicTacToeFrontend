'use client'

import { useState } from "react"

export function JoinGameContent() {
    const [joinOption, setJoinOption] = useState<'RANDOM' | 'SPECIFY'>("RANDOM")

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#1a1a2e] text-white">
            <h1 className="text-4xl font-bold text-[#00aaff] mb-8">Tic Tac Toe</h1>

            {/* Slider Toggle */}
            <div className="relative flex items-center justify-between w-64 bg-gray-700 rounded-full p-1">
                <button
                    className={`w-1/2 text-center py-2 rounded-full transition ${joinOption === "RANDOM" ? "bg-[#00aaff] text-[#1a1a2e]" : "text-white"
                        }`}
                    onClick={() => setJoinOption("RANDOM")}
                >
                    Partida Aleatória
                </button>
                <button
                    className={`w-1/2 text-center py-2 rounded-full transition ${joinOption === "SPECIFY" ? "bg-[#00aaff] text-[#1a1a2e]" : "text-white"
                        }`}
                    onClick={() => setJoinOption("SPECIFY")}
                >
                    Escolher Adversário
                </button>
            </div>

            {/* Conteúdo Condicional */}
            <div className="flex flex-col items-center space-y-4 w-full max-w-sm">
                {joinOption === "RANDOM" ? (
                    <button className="w-full py-2 bg-[#00aaff] text-white rounded-md hover:bg-[#0088cc] transition">
                        Buscar Partida Rápida
                    </button>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Digite o nome do adversário"
                            className="w-full px-4 py-2 text-black rounded-md border-2 border-[#00aaff] focus:outline-none focus:border-[#00ffcc] transition"
                        />
                        <button className="w-full py-2 bg-[#00aaff] text-white rounded-md hover:bg-[#0088cc] transition">
                            Encontrar Adversário
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}