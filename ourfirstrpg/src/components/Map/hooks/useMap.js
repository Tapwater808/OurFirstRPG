import {useState, useRef} from 'react';
import maps from '../vars/maps';
import buildMap from '../utils/buildMap';

const useMap = (mapName) => {
  const name = useRef(mapName);
  const [map, setMap] = useState(buildMap(mapName, maps[mapName]));
  
  const updateMap = (mName) => {
    const newMap = maps[mName];
    name.current = mName;
    setMap(buildMap(mName, newMap));
  };

  return [name.current, map, updateMap]
}
export default useMap;