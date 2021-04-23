import { DOOR } from '../../Map/vars/tileTypes';
import wrapPoint from '../vars/wrapPoint';

const findDoor = (mapName, map, loc) => {
  const corners = [
    map[loc.y][loc.x],
    map[loc.y + 1][loc.x + 1]
  ];
  const doorTile = corners.find(tile => tile.type === DOOR);
  return doorTile ? wrapPoint[mapName][`${doorTile.location.x},${doorTile.location.y}`] : null
}
export default findDoor;