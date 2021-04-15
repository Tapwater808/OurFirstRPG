import mapSize from './vars/mapSize';

const Map = () => {
  let initMap = new Array(mapSize.y).fill(new Array(mapSize.x).fill(0));
  initMap[parseInt(mapSize.y/2)] = new Array(mapSize.x).fill(1);
  return initMap;
}

export default Map;