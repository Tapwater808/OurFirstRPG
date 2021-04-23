import Actor from '../Actor';
import directions from '../../Actor/vars/directions';

const Item = ({ sprite, position, size }) => {
  return (
    <Actor
      image={`url(./Assets/${sprite}.png)`}
      position={position}
      size={size}
      step={0}
      dir={directions.DOWN}
    />
  );
}
export default Item;