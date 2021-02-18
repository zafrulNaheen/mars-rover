export class ScanCommand {
  constructor(private readonly commandString: string) {}

  getMovingSteps(): MovingStep[] {
    return [];
  }
}

// for every move add to array path coordinates
export interface MovingStep {
  direction: directions;
  X: number;
  Y: number;
}

type PositionStep = Step.FORWARD | Step.BACKWARD;

type DirectionStep = Step.ROTATE_LEFT | Step.ROTATE_RIGHT;

export enum Step {
  FORWARD = 'F',
  BACKWARD = 'B',
  ROTATE_RIGHT = 'R',
  ROTATE_LEFT = 'L'
}

enum directions {
  EAST,
  WEST,
  NORTH,
  SOUTH
}
