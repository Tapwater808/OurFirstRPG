import {UNIT} from '../../Map/vars/mapSize';
import {DOWN, LEFT, RIGHT, UP} from './directions';
export const stepSize = UNIT;

const movements = {
  [DOWN]: { x: 0, y: 1},
  [LEFT]: { x: -1, y: 0},
  [RIGHT]: { x: 1, y: 0},
  [UP]: { x: 0, y: -1 },
}

export default movements;