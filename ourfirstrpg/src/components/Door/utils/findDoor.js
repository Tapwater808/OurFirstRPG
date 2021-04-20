import { DOOR } from '../../Map/vars/tileTypes';
import wrapPoint from '../../Door/vars/wrapPoint';

const findDoor = (mapName, map, loc) => {
  const tile = map[loc.y][loc.x];
  
  return tile.type === DOOR ? wrapPoint[mapName][`${loc.x},${loc.y}`] : null
}
export default findDoor;