import PlayerRepository from '../../domain/repositories/PlayerRepository';
import Player from '../../domain/models/Player';

class CreatePlayerUseCase {
  constructor(private playerRepository: PlayerRepository) {}

  async execute(player: Player): Promise<Player> {
    // Verificar si el nombre del jugador ya existe
    const existingPlayer = await this.playerRepository.findByName(player.name);
    if (existingPlayer) {
      throw new Error('El nombre del jugador ya está en uso');
    }

    // Guardar el jugador en el repositorio
    const createdPlayer = await this.playerRepository.create(player);

    return createdPlayer;
  }
}

export default CreatePlayerUseCase;



