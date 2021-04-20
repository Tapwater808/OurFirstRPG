import {MAP_SIZE_WIDTH, MAP_SIZE_HEIGHT} from '../mapSize';
import {SPACE, WALL} from '../tileTypes';

let house = new Array(MAP_SIZE_HEIGHT).fill(new Array(MAP_SIZE_WIDTH).fill(SPACE));
house[parseInt(MAP_SIZE_HEIGHT/2)] = new Array(MAP_SIZE_WIDTH).fill(WALL);

export default house;