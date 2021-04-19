import { useState } from 'react';
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
      const loc = isObstacle(next) ? prev : next;
      return [dir, loc];
    });
  }
  const walk = (dir) => {
    setGesture((prev) => prev < 2 ? prev + 1 : 0);
    setDir((prev) => {
      prev === dir ? move(dir) : update(loc => [dir, loc]);
      return dir;
    });
  }
  return [gesture, dir, walk]
}
export default useWalk;