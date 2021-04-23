import {useState, useRef} from 'react';
import maps from '../vars/maps';
import buildMap from '../utils/buildMap';
//Map Images
import houseImage from '../images/PlayerHouseResize.jpeg';
import worldImage from '../images/ProjectWorldResize.jpeg';

const images = {
    'house': houseImage,
    'world': worldImage
}

const useMap = (mapName) => {
  const name = useRef(mapName);
  const [map, setMap] = useState(buildMap(mapName, maps[mapName]));
  const [currentMapImage, setMapImg] = useState(images[mapName]);

  const updateMap = (mName) => {
    const newMap = maps[mName];
    name.current = mName;
    setMap(buildMap(mName, newMap));
    console.log(mName);
    setMapImg(images[mName]);
  };

  return [name.current, map, updateMap, currentMapImage]
}
export default useMap;