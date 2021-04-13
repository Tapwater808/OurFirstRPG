import Sprite from '../Sprite';
import { DOWN } from './vars/directions';

const Actor = ({
  image,
  size={width: 32, height: 32},
  position={x: 0, y: 0},
  step = 0,
  dir=DOWN
}) => {
  const {width, height} = size;
  return (
    <Sprite
      image = {image}
      position={position}
      status = {{
        x: step*width,
        y: dir*height,
        width: width,
        height: height
      }}
    />
  )
}

export default Actor;