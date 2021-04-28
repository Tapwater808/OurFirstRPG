import maps from '../vars/maps';
import buildMap from './buildMap';
//Map Images
import houseImage from '../images/PlayerHouseResize.jpeg';
import worldImage from '../images/ProjectWorldResize.jpeg';
import dungeonImage from '../images/ProjectDungeonResize.jpeg';
import storeImage from '../images/ProjectStoreResize.jpeg';

const images = {
    'house': houseImage,
    'world': worldImage,
    'dungeon': dungeonImage,
    'store': storeImage,
}

const getMap = (mapName) => {
  const map = buildMap(mapName, maps[mapName]);
  const mapImg = images[mapName];

  return [map, mapImg]
}
export default getMap;