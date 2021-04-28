import { DOWN, LEFT, RIGHT, UP } from '../../Actor/vars/directions';
import { OUT_OF_BOUND, NPC, ITEM } from '../vars/tileTypes';
import spawn from '../../Npc/vars/spawn';

const findInteractable = (mapName, map, loc, dir, { width, height }) => {
  const isOnInteractable = (type) => (type === ITEM);
  const isFacingInteractable = (type) => (type === NPC);
  
  const on = [];
  for (let h = 0; h < height; h ++)
    for (let w = 0; w < width; w++)
      on.push(map[loc.y + h][loc.x + w])

  const inSight = {
    [DOWN]: map[loc.y + height] ? [
      map[loc.y + height][loc.x],
      map[loc.y + height][loc.x + 1],
      map[loc.y + height][loc.x + 2],
      map[loc.y + height][loc.x + 3],
    ] : new Array(4).fill(undefined),
    [LEFT]: [
      map[loc.y][loc.x - 1] || undefined,
      map[loc.y + 1][loc.x - 1] || undefined,
      map[loc.y + 2][loc.x - 1] || undefined,
      map[loc.y + 3][loc.x - 1] || undefined,
    ],
    [RIGHT]: [
      map[loc.y][loc.x + width] || undefined,
      map[loc.y + 1][loc.x + width] || undefined,
      map[loc.y + 2][loc.x + width] || undefined,
      map[loc.y + 3][loc.x + width] || undefined,
    ],
    [UP]: map[loc.y - 1] ? [
      map[loc.y - 1][loc.x],
      map[loc.y - 1][loc.x + 1],
      map[loc.y - 1][loc.x + 2],
      map[loc.y - 1][loc.x + 3],
    ] : new Array(4).fill(undefined)
  }
  
  const onEntity = on.find(tile => isOnInteractable(tile.type));
  const inSightEntity = inSight[dir].find(tile => isFacingInteractable(tile ? tile.type : OUT_OF_BOUND));

  const interactable =  onEntity || inSightEntity;

  const findInfo = (obj) => {
    const target = {
      [NPC]: spawn[mapName][`${obj.location.x},${obj.location.y}`]
    }
    return target[obj.type]
  }
  return interactable ? findInfo(interactable) : null;
}
export default findInteractable;