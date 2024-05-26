import { Request, Response } from 'express';
import { CreateGame } from '../application/usecase/CreateGameUseCase';

class GameController {
  async createGame(req: Request, res: Response) {
    try {
      const playerId = req.body.playerId; // Obtener el ID del jugador del cuerpo de la solicitud

      // Validar la entrada del usuario
      if (!playerId) {
        return res.status(400).json({ error: 'Player ID is required' });
      }

      // Ejecutar el caso de uso para crear un juego
      const game = CreateGame.execute(playerId);

      // Devolver la respuesta con el juego creado
      res.status(201).json({
        message: 'Game created successfully',
        game,
      });
    } catch (error) {
      // Manejar errores específicos y devolver una respuesta de error adecuada
      if (error instanceof PlayerNotFoundError) {
        return res.status(404).json({ error: 'Player not found' });
      }
      res.status(500).json({ error: error.message });
    }
  }

  // Otros métodos del controlador del juego (por ejemplo, obtener juegos, eliminar juegos, etc.)
}

export default GameController;
