import mapSize from './vars/mapSize';

const Map = () => {
  let initMap = new Array(mapSize.y).fill(new Array(mapSize.x).fill(0));
  initMap[22] = new Array(mapSize.x).fill(1);
  return initMap;
}

export default Map;