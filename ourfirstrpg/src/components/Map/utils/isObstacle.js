import {MAP_SIZE_WIDTH, MAP_SIZE_HEIGHT} from '../../Map/vars/mapSize';

const isObstacle = (map, next, playerSize) => {

    const limit = {
      x: MAP_SIZE_WIDTH - 1 - playerSize.width,
      y: MAP_SIZE_HEIGHT - 1 - playerSize.height
    }
    // Check if next position is boundary
    const isBoundary = next.x < 0 || next.x > limit.x || next.y < 0 || next.y > limit.y;
    if (isBoundary) return true;

    // Check if next position is wall 
    const corners = [
      map[next.y][next.x],
      map[next.y][Math.min(limit.x, next.x + playerSize.width - 1)],
      map[Math.min(limit.y, next.y + playerSize.height - 1)][next.x],
      map[Math.min(limit.y, next.y + playerSize.height - 1)][Math.min(limit.x, next.x + playerSize.width - 1)],
    ]
    const isWall = corners.includes(1)
    if (isWall) return true;

    return false;
}

export default isObstacle;