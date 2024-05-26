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
class CreatePlayerUseCase {
    constructor(playerRepository) {
        this.playerRepository = playerRepository;
    }
    execute(player) {
        return __awaiter(this, void 0, void 0, function* () {
            // Verificar si el nombre del jugador ya existe
            const existingPlayer = yield this.playerRepository.findByName(player.name);
            if (existingPlayer) {
                throw new Error('El nombre del jugador ya está en uso');
            }
            // Guardar el jugador en el repositorio
            const createdPlayer = yield this.playerRepository.create(player);
            return createdPlayer;
        });
    }
}
exports.default = CreatePlayerUseCase;
