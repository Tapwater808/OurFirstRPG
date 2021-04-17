import Actor from '../../Actor';
import directions from '../../Actor/vars/directions';

const Guy1 = ({position}) => {
    const charSize = { width: 4, height: 4 };
    return (
      <Actor
        image='url(./Assets/BadGuy1.png)'
        position={position}
        size={charSize}
        step={0}
        dir={directions.DOWN}
      />
    );
  }
  export default Guy1;

  export const NAME = 'Guy1/Wife idk'

  export const MESSAGES = [
    'This is a new test',
    'I am your wife',
    'Make me a sandwich, please :)'
  ];