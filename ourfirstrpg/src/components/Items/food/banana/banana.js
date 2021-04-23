import Actor from '../../Actor';
import directions from '../../Actor/vars/directions';

const Banana = ({position}) => {
    const charSize = { width: 4, height: 4 };
    return (
      <Actor
        image='url(./Assets/Banana.png)'
        position={position}
        size={charSize}
        step={0}
        dir={directions.DOWN}
      />
    );
  }
  export default Banana;

  export const NAME = 'Banana'

  export const MESSAGES = [
    'Yum, a banana!'
  ];