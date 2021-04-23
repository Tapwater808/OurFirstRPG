import Actor from '../Actor';
import directions from '../../Actor/vars/directions';

const Banana= ({position, size, gesture, dir}) => {
  return (
    <Actor
      image='url(./Assets/Banana.png)'
      position={position}
      size={size}
      step={gesture}
      dir={directions.DOWN}
    />
  );
}
export default Banana;

export const NAME = 'Banana'

export const MESSAGES = [
  'Yum, a Banana!'
];