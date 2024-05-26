export interface Game {
    id: string;
    playerId: string;
    dice1: number;
    dice2: number;
    createdAt: Date;
    result: boolean;
  }