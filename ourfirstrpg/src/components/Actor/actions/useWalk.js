import { useState } from 'react';
import directions from '../vars/directions';
import movements, {stepSize} from '../vars/movements';
import mapSize, {UNIT as unit} from '../../Map/vars/mapSize';

// Parameters:
//   map:         the grid representation of the map
//   setPosition: function to update position of character
//   charSize:    size of character (in grid)
const useWalk = (map, setPosition, charSize) => {
  const [gesture, setGesture] = useState(0);
  const [dir, setDir] = useState(0);
  
  const move = (dir) => {
    setPosition(prev => {
      const next = {
        x: prev.x + movements[dir].x,
        y: prev.y + movements[dir].y
      }
      const offset = {
        x: mapSize.x - 1 - charSize.width,
        y: mapSize.y - 1 - charSize.height
      }
      
      const isBoundary = next.x < 0 || next.x > offset.x || next.y < 0 || next.y > offset.y;
      if (isBoundary) return prev;
      
      const isWall = map[next.y][next.x] === 1;
      return isWall ? prev: next
    });
  }

  const walk = (dir) => {
    setGesture((prev) => prev < 2 ? prev + 1 : 0);
    setDir((prev) => {
      if (prev === directions[dir]) move(dir);
      return directions[dir]
    });
  }
  
  return {
    gesture,
    dir,
    walk
  }
}

export default useWalk;