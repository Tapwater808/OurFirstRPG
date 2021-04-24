import Actor from '../../Actor';
import directions from '../../Actor/vars/directions';

const Apple= ({position}) => {
    const charSize = { width: 4, height: 4 };
    return (
      <Actor
        image='url(./Assets/Apple.jpeg)'
        position={position}
        size={charSize}
        step={0}
        dir={directions.DOWN}
      />
    );
  }
  export default Apple;

  export const NAME = 'Apple'

  export const MESSAGES = [
    'Yum, an apple!'
  ];