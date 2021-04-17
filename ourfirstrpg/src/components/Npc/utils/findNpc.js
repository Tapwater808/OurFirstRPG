import spawn from '../vars/spawn';

const findNpc = (mapName, pos, dir, playerSize) => {
  const npcs = spawn[mapName];
  const inSight = {
    'DOWN': 
      npcs[`${pos.x - 1},${pos.y + playerSize.height}`] ||
      npcs[`${pos.x},${pos.y + playerSize.height}`] ||
      npcs[`${pos.x + 1},${pos.y + playerSize.height}`],
    'LEFT':
      npcs[`${pos.x - 4},${pos.y - 1}`] ||
      npcs[`${pos.x - 4},${pos.y}`] ||
      npcs[`${pos.x - 4},${pos.y + 1}`],
    'RIGHT':
      npcs[`${pos.x + playerSize.width},${pos.y - 1}`] ||
      npcs[`${pos.x + playerSize.width},${pos.y}`] ||
      npcs[`${pos.x + playerSize.width},${pos.y + 1}`],
    'UP':
      npcs[`${pos.x - 1},${pos.y - 4}`] ||
      npcs[`${pos.x},${pos.y - 4}`] ||
      npcs[`${pos.x + 1},${pos.y - 4}`],
  }
  return inSight[dir];
}

export default findNpc;