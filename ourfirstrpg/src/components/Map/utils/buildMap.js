import spawn from '../../Npc/vars/spawn';
import {UNIT as unit} from '../vars/mapSize';
const buildMap = (name, mapArray) => {
  const modified = JSON.parse(JSON.stringify(mapArray));
  const npcs = spawn[name];
  
  for (const coordinates in npcs){
    const npc = npcs[coordinates];
    const {width, height} = npc.sprite.size;
    for (let h = 0; h < height/unit; h++) {
      for (let w = 0; w < width/unit; w++){
        modified[npc.location.y + h][npc.location.x + w] = 1
      }
    }
  };
  return modified;
}
export default buildMap;