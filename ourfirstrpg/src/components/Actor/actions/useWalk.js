import { useState } from 'react';
import directions from '../vars/directions';
import movements, {stepSize} from '../vars/movements';
import mapSize from '../../Map/vars/mapSize';

// Get numeric express for character's step and dir
const useWalk = (initPos={ x:0, y:0 }, map, charSize) => {
  const [position, setPosition] = useState(initPos);
  const [step, setStep] = useState(0);
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
    setStep((prev) => prev < 2 ? prev + 1 : 0);
    setDir((prev) => {
      if (prev === directions[dir]) move(dir);
      return directions[dir]
    });
  }
  
  return {
    position: {
      x: position.x * stepSize,
      y: position.y * stepSize,
    },
    size: {
      width: charSize.width * stepSize,
      height: charSize.height * stepSize
    },
    step,
    dir,
    walk
  }
}

export default useWalk;