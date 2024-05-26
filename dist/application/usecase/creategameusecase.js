"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGameUseCase = void 0;
// Definición de la clase CreateGameUseCase
class CreateGameUseCase {
    static execute(playerId) {
        // Lógica para crear un nuevo juego
        const dice1 = rollDice();
        const dice2 = rollDice();
        const isWinner = dice1 + dice2 === 7;
        const id = generateUniqueId();
        const createdAt = new Date(); // Genera la fecha de creación actual
        // Crear un nuevo objeto GameDTO
        const game = {
            id,
            playerId,
            dice1,
            dice2,
            createdAt,
            result: isWinner // 'result' es equivalente a 'isWinner' en la interfaz Game original
        };
        // Devolver el objeto GameDTO creado
        return game;
    }
}
exports.CreateGameUseCase = CreateGameUseCase;
// Funciones auxiliares (simuladas)
function rollDice() {
    // Lógica para lanzar un dado (simulado)
    return Math.floor(Math.random() * 6) + 1; // Números aleatorios entre 1 y 6
}
function generateUniqueId() {
    // Lógica para generar un ID único (simulado)
    return Math.random().toString(36).substring(2); // Genera una cadena aleatoria
}
