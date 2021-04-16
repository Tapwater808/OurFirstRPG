import Actor from '../../Actor';
import useWalk from '../../Actor/actions/useWalk';
import directions from '../../Actor/vars/directions';
const Guy1 = ({initPos, map}) => {
    const charSize = { width: 2, height: 2 };
    const {position, size, step, dir, walk} = useWalk(initPos, map, charSize);
    return (
      <Actor
        image='url(./Assets/BadGuy1.png)'
        position={position}
        size={size}
        step={step}
        dir={dir}
      />
    );
  }
  export default Guy1;