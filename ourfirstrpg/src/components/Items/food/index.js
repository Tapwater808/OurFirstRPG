import Actor from '../Actor';

const Item = ({ sprite, position, size }) => {
  return (
    <Actor
      image={`url(./Assets/${sprite}.png)`}
      position={position}
      size={size}
      step={0}
    />
  );
}
export default Item;