
import Actor from '../Actor';
import useKeydown from '../../hooks/useKeydown';
import useWalk from '../Actor/actions/useWalk';
import directions from '../Actor/vars/directions';
const Player = ({initPos, map}) => {
  const charSize = { width: 2, height: 2 };
  const {position, size, step, dir, walk} = useWalk(initPos, map, charSize);
  
  useKeydown((e) => {
    const dir = e.key.replace('Arrow', '').toUpperCase();
    if (!directions.hasOwnProperty(dir)) return;
    e.preventDefault();
    walk(dir);
  });

  return (
    <Actor
      image='url(/m1.png)'
      position={position}
      size={size}
      step={step}
      dir={dir}
    />
  );
}
export default Player;