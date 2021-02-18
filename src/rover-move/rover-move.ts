import { MovingStep } from './scan-command';

export class RoverMove {
  private roverPath: MovingStep[];
  private currentDirection: string;

  moveExecute(): void {
    // F -> B = new position
    // F -> L | R = new direction
  }
}
