import Actor from '../Actor';
import directions from '../../Actor/vars/directions';

const Apple = ({position, size, gesture, dir}) => {
  return (
    <Actor
      image='url(./Assets/Apple.jpg)'
      position={position}
      size={size}
      step={gesture}
      dir={directions.DOWN}
    />
  );
}
export default Apple;

export const NAME = 'Apple'

export const MESSAGES = [
  'Yum, an apple!'
];