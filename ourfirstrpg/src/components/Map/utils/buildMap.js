import spawn from '../../Npc/vars/spawn';
import itemSpawn from '../../Items/vars/spawn';
import wrapPoint from '../../Door/vars/wrapPoint';
import { NPC, DOOR, ITEM } from '../vars/tileTypes';
import { MAP_SIZE_WIDTH, MAP_SIZE_HEIGHT } from '../vars/mapSize';
const createTile = ({type, location}) => ({ type, location })

const buildMap = (name, mapArray) => {
  let modified = new Array(MAP_SIZE_HEIGHT).fill(new Array(MAP_SIZE_WIDTH).fill(null));
  modified = modified.map((row,r) => 
    row.map((col,c) => 
      createTile({
        type: mapArray[Math.floor(r * .25)][Math.floor(c * .25)],
        location: { x: c, y: r }
      })
    )
  )
  // Add in Doors
  const doors = wrapPoint[name];
  for (const coordinates in doors){
    const door = doors[coordinates];
    for (let h = 0; h < door.height; h++) {
      for (let w = 0; w < door.width; w++) {
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

    // Add in Items
    const items = itemSpawn[name];
    for (const coordinates in items){
      const item = items[coordinates];
      const {width, height} = item.sprite.size;
      for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
          modified[item.location.y + h][item.location.x + w] = 
            createTile({
              type: ITEM,
              location: item.location
            })
        }
      }
    }

  return modified;
}
export default buildMap;