import { useState } from 'react';
import movements from '../vars/movements';

const useWalk = (update, isObstacle) => {
  const [gesture, setGesture] = useState(0);
  const [dir, setDir] = useState(0);
  
  const move = (direction) => {
    update(prev => {
      const next = {
        x: prev.x + movements[direction].x,
        y: prev.y + movements[direction].y
      }
      console.log('next: ', next);
      const loc = isObstacle(next) ? prev : next;
      return [direction, loc];
    });
  }
  const walk = (direction) => {
    setGesture((prev) => prev < 2 ? prev + 1 : 0);
    setDir((prev) => {
      prev === direction ? move(direction) : update(loc => [direction, loc]);
      return direction;
    });
  }
  return [gesture, dir, walk]
}
export default useWalk;