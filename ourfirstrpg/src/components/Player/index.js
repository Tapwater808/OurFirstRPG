
import Actor from '../Actor';
import {UNIT as unit} from '../Map/vars/mapSize';

const Player = ({position, size, gesture, dir}) => {
  const info = {
    image: 'url(./Assets/Player.png)',
    position: {
      x: position.x * unit,
      y: position.y * unit
    },
    size,
    gesture,
    dir
  };
  console.log(info);
  return (
    <Actor
      image='url(./Assets/Player.png)'
      position={{
        x: position.x * unit,
        y: position.y * unit
      }}
      size={size}
      step={gesture}
      dir={dir}
    />
  );
}
export default Player;