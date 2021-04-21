import spawn from '../../Npc/vars/spawn';
import { SPACE, NPC } from '../vars/tileTypes';
import { MAP_SIZE_WIDTH, MAP_SIZE_HEIGHT } from '../vars/mapSize';
const createTile = ({type = SPACE, location = {x: 0, y: 0}}) => ({ type, location })
// mapArray = 32 px version of map
const buildMap = (name, mapArray) => {
  // Build map base on 2D map array
  let modified = new Array(MAP_SIZE_HEIGHT).fill(new Array(MAP_SIZE_WIDTH));
  console.log('mapArray: ', mapArray);
  mapArray.forEach((row, r) =>
    row.forEach((col, c) => {
      // for each block
      for (let h = 0; h < 4; h++) {
        for (let w = 0; w < 4; w++) {
          modified[r * 4 + h][c * 4 + w] = createTile({
            type: col, // SPACE, WALL OR DOOR
            location: {x: c, y: r}
          })
        }
      }
    })
  )
  // Add in NPC's
  const npcs = spawn[name];
  for (const coordinates in npcs){
    const npc = npcs[coordinates];
    const {width, height} = npc.sprite.size;
    for (let h = 0; h < height; h++) {
      for (let w = 0; w < width; w++) {
        modified[npc.location.y + h][npc.location.x + w] = 
          createTile({
            type: NPC,
            location: npc.location
          })
      }
    }
  };
  return modified;
}
export default buildMap;