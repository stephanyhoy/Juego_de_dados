import { Game } from '../../domain/models/Game'; // Importa la interfaz Game desde el archivo game.ts

// Define la interfaz GameDTO basada en la interfaz Game
interface GameDTO extends Omit<Game, 'createdAt'> { // Omitimos el campo 'createdAt' ya que no se genera aquí
  isWinner: boolean; // Agregamos el campo 'isWinner' que no está en la interfaz Game original
}

// Definición de la clase CreateGameUseCase
export class CreateGameUseCase {
  static execute(playerId: string): GameDTO {
    // Lógica para crear un nuevo juego
    const dice1 = rollDice();
    const dice2 = rollDice();
    const isWinner = dice1 + dice2 === 7;
    const id = generateUniqueId();
    const createdAt = new Date(); // Genera la fecha de creación actual
    
    // Crear un nuevo objeto GameDTO
    const game: GameDTO = {
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

// Funciones auxiliares (simuladas)
function rollDice(): number {
  // Lógica para lanzar un dado (simulado)
  return Math.floor(Math.random() * 6) + 1; // Números aleatorios entre 1 y 6
}

function generateUniqueId(): string {
  // Lógica para generar un ID único (simulado)
  return Math.random().toString(36).substring(2); // Genera una cadena aleatoria
}
