"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreatePlayerUseCase_1 = __importDefault(require("../../application/usecase/CreatePlayerUseCase"));
class PlayerController {
    constructor() {
        this.createPlayerUseCase = new CreatePlayerUseCase_1.default();
    }
    createPlayer(req, res) {
        res.send('Answering from controller');
        const player = req.body;
        res.send(this.createPlayerUseCase.createPlayer(player));
    }
}
exports.default = PlayerController;
