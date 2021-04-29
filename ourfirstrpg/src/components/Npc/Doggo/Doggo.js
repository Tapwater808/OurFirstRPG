import Actor from '../../Actor';
import directions from '../../Actor/vars/directions';

const Spooder = ({position}) => {
    const charSize = { width: 4, height: 4 };
    return (
      <Actor
        image='url(./Assets/Spooder.png)'
        position={position}
        size={charSize}
        step={0}
        dir={directions.DOWN}
      />
    );
  }
  export default Spooder;