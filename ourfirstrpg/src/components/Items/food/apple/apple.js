import Actor from '../Actor';

const Apple = ({position, size, gesture, dir}) => {
  return (
    <Actor
      image='url(./Assets/Apple.jpg)'
      position={position}
      size={size}
      step={gesture}
      dir={dir}
    />
  );
}
export default Apple;