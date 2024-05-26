import { Request, Response } from "express"; 
import CreatePlayerUseCase from "../../application/usecase/CreatePlayerUseCase";
export default class PlayerController {


   const createPlayerUseCase = new CreatePlayerUseCase()

   createPlayer(req: Request, res: Response){
    res.send('Answering from controller');
    const player: Player = req.body;
    res.send(this.createPlayerUseCase.createPlayer(player));

   }
}
