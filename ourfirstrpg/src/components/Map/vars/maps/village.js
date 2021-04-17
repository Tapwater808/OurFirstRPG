import {MAP_SIZE_WIDTH, MAP_SIZE_HEIGHT} from '../mapSize';

let village = new Array(MAP_SIZE_HEIGHT).fill(new Array(MAP_SIZE_WIDTH).fill(0));
village[parseInt(MAP_SIZE_HEIGHT/2)] = new Array(MAP_SIZE_WIDTH).fill(1);

export default village;