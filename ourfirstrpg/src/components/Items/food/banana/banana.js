import Actor from '../Actor';

const Banana= ({position, size, gesture, dir}) => {
  return (
    <Actor
      image='url(./Assets/Banana.png)'
      position={position}
      size={size}
      step={gesture}
      dir={dir}
    />
  );
}
export default Banana;

export const NAME = 'Banana'

export const MESSAGES = [
  'Yum, a Banana!'
];