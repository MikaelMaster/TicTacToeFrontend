'use client'

import { useState } from "react"

export function JoinGameContent() {
    const [option, setOption] = useState<"random" | "choose">("random")

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#1a1a2e] text-white">
            {/* Título */}
            <h1 className="text-4xl font-bold text-[#00aaff] mb-8">Tic Tac Toe</h1>

            {/* Slider de opções */}
            <div className="flex space-x-4 mb-8">
                <button
                    className={`px-4 py-2 border-2 rounded-md ${
                        option === "random"
                            ? "bg-[#00aaff] text-[#1a1a2e]"
                            : "border-[#00aaff] text-white"
                    } hover:bg-[#00aaff] hover:text-[#1a1a2e] transition`}
                    onClick={() => setOption("random")}
                >
                    Partida Aleatória
                </button>
                <button
                    className={`px-4 py-2 border-2 rounded-md ${
                        option === "choose"
                            ? "bg-[#00aaff] text-[#1a1a2e]"
                            : "border-[#00aaff] text-white"
                    } hover:bg-[#00aaff] hover:text-[#1a1a2e] transition`}
                    onClick={() => setOption("choose")}
                >
                    Escolher Adversário
                </button>
            </div>

            {/* Conteúdo Condicional */}
            <div className="flex flex-col items-center space-y-4 w-full max-w-sm">
                {option === "random" ? (
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