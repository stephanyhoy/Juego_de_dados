"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateGameUseCase_1 = require("../application/usecase/CreateGameUseCase");
class GameController {
    createGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const playerId = req.body.playerId; // Obtener el ID del jugador del cuerpo de la solicitud
                // Validar la entrada del usuario
                if (!playerId) {
                    return res.status(400).json({ error: 'Player ID is required' });
                }
                // Ejecutar el caso de uso para crear un juego
                const game = CreateGameUseCase_1.CreateGame.execute(playerId);
                // Devolver la respuesta con el juego creado
                res.status(201).json({
                    message: 'Game created successfully',
                    game,
                });
            }
            catch (error) {
                // Manejar errores específicos y devolver una respuesta de error adecuada
                if (error instanceof PlayerNotFoundError) {
                    return res.status(404).json({ error: 'Player not found' });
                }
                res.status(500).json({ error: error.message });
            }
        });
    }
}
exports.default = GameController;
