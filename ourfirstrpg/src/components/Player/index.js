import Actor from '../Actor';

const Player = ({position, size, gesture, dir}) => {
  return (
    <Actor
      image='url(./Assets/Player.png)'
      position={position}
      size={size}
      step={gesture}
      dir={dir}
    />
  );
}
export default Player;