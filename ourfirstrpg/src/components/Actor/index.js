import Sprite from '../Sprite';
import { DOWN } from './vars/directions';
import {UNIT as unit} from '../Map/vars/mapSize';

const Actor = ({
  image,
  size={width: 4, height: 4},
  position={x: 0, y: 0},
  step = 0,
  dir=DOWN
}) => {
  const {width, height} = size;
  const {x, y} = position;
  return (
    <Sprite
      image = {image}
      position={{x: x * unit, y: y * unit}}
      status = {{
        x: step * width * unit,
        y: dir * height * unit,
        width: width * unit,
        height: height * unit,
      }}
    />
  )
}

export default Actor;