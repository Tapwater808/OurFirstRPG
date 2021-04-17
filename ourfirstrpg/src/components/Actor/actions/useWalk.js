import { useState } from 'react';
import directions from '../vars/directions';
import movements from '../vars/movements';

const useWalk = (update, isObstacle) => {
  const [gesture, setGesture] = useState(0);
  const [dir, setDir] = useState(0);
  
  const move = (dir) => {
    update(prev => {
      const next = {
        x: prev.x + movements[dir].x,
        y: prev.y + movements[dir].y
      }
      const pos = isObstacle(next) ? prev : next;
      return [dir, pos];
    });
  }

  const walk = (dir) => {
    setGesture((prev) => prev < 2 ? prev + 1 : 0);
    setDir((prev) => {
      prev === directions[dir] ? move(dir) : update(pos => [dir, pos]);
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