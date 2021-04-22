import {MAP_SIZE_WIDTH, MAP_SIZE_HEIGHT} from '../../Map/vars/mapSize';
import {SPACE, DOOR, ITEM} from '../vars/tileTypes';

const isObstacle = (map, next, {width, height}) => {
    const limit = {
      x: MAP_SIZE_WIDTH - 1 - width,
      y: MAP_SIZE_HEIGHT - 1 - height
    }
    // Check if next position is boundary
    const isBoundary = next.x < 0 || next.x > limit.x || next.y < 0 || next.y > limit.y;
    if (isBoundary) return true;
    
    // Check if next position is wall 
    const corners = [
      map[next.y][next.x],
      map[next.y][Math.min(limit.x, next.x + width - 1)],
      map[Math.min(limit.y, next.y + height - 1)][next.x],
      map[Math.min(limit.y, next.y + height - 1)][Math.min(limit.x, next.x + width - 1)],
    ]
    const isPassable = corners.reduce((current, corner) =>
      current && ((corner.type === SPACE) || (corner.type === ITEM) || (corner.type === DOOR)),
      true
    );
    return !isPassable;
}

export default isObstacle;