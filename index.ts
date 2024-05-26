import express, { Request, Response } from 'express';
import PlayerController from './infraestructure/controller/PlayerController';
const app = express();
const PORT = process.env.PORT || 3000;

const playerController = new PlayerController();



app.get('/player', (req: Request, res: Response) => {
    playerController.createPlayer(req, res);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
