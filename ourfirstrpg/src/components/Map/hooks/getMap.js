import maps from '../vars/maps';
import buildMap from '../utils/buildMap';
//Map Images
import houseImage from '../images/PlayerHouseResize.jpeg';
import worldImage from '../images/ProjectWorldResize.jpeg';

const images = {
    'house': houseImage,
    'world': worldImage
}

const getMap = (mapName) => {
  const map = buildMap(mapName, maps[mapName]);
  const mapImg = images[mapName];

  return [map, mapImg]
}
export default getMap;