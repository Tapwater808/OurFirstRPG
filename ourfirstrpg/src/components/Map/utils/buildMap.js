import spawn from '../../Npc/vars/spawn';
import { SPACE, NPC } from '../vars/tileTypes';

const createTile = ({type = SPACE, location = {x: 0, y: 0}}) => ({ type, location })

const buildMap = (name, mapArray) => {
  // Build map base on 2D map array
  const modified = mapArray.map((row, r) =>
    row.map((col, c) => createTile({
      type: col, // SPACE, WALL OR DOOR
      location: {x: c, y: r}
    }))
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