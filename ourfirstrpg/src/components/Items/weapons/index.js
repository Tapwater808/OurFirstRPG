import Actor from '../Actor';

const Weapon = ({ sprite, position, size }) => {
  return (
    <Actor
      image={`url(./Assets/${sprite}.png)`}
      position={position}
      size={size}
      step={0}
    />
  );
}
export default Weapon;