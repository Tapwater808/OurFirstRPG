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