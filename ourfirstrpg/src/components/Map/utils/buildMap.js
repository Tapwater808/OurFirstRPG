import spawn from '../../Npc/vars/spawn';
import wrapPoint, {SIZE as DOORSIZE} from '../../Door/vars/wrapPoint';
import { SPACE, NPC, DOOR } from '../vars/tileTypes';

const createTile = ({type = SPACE, location = {x: 0, y: 0}}) => ({ type, location })

const buildMap = (name, mapArray) => {
  // Build map base on 2D map array
  const modified = mapArray.map((row, r) =>
    row.map((col, c) => createTile({
      type: col, // SPACE, WALL
      location: {x: c, y: r}
    }))
  )
  // Add in Doors
  const doors = wrapPoint[name];
  for (const coordinates in doors){
    const door = doors[coordinates];
    for (let h = 0; h < DOORSIZE.height; h++) {
      for (let w = 0; w < DOORSIZE.width; w++) {
        modified[door.location.y + h][door.location.x + w] = 
          createTile({
            type: DOOR,
            location: door.location,
          })
      }
    }
  }

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
  }
  return modified;
}
export default buildMap;