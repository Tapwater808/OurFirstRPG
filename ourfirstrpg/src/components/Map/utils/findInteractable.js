import { DOWN, LEFT, RIGHT, UP } from '../../Actor/vars/directions';
import { NPC, ITEM } from '../vars/tileTypes';
import spawn from '../../Npc/vars/spawn';

const findInteractable = (mapName, map, loc, dir, { width, height }) => {
  const isOnInteractable = (type) => (type === ITEM);
  const isFacingInteractable = (type) => (type === NPC);

  const on = [
    map[loc.y][loc.x],
    map[loc.y][loc.x - 1],
    map[loc.y][loc.x + 1],
    map[loc.y - 1][loc.x],
    map[loc.y - 1][loc.x - 1],
    map[loc.y - 1][loc.x + 1],
    map[loc.y + 1][loc.x],
    map[loc.y + 1][loc.x - 1],
    map[loc.y + 1][loc.x + 1],
  ]

  const inSight = {
    [DOWN]: [
      map[loc.y + height][loc.x],
      map[loc.y + height][loc.x - 1],
      map[loc.y + height][loc.x + 1],
    ],
    [LEFT]: [
      map[loc.y][loc.x - 1],
      map[loc.y - 1][loc.x - 1],
      map[loc.y + 1][loc.x - 1],
    ],
    [RIGHT]: [
      map[loc.y][loc.x + width],
      map[loc.y - 1][loc.x + width],
      map[loc.y + 1][loc.x + width],
    ],
    [UP]: [
      map[loc.y - 1][loc.x],
      map[loc.y - 1][loc.x - 1],
      map[loc.y - 1][loc.x + 1],
    ]
  }
  
  const onEntity = on.find(tile => isOnInteractable(tile.type));
  const inSightEntity = inSight[dir].find(tile => isFacingInteractable(tile.type));

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