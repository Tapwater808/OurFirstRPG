
import Actor from '../Actor';
import useKeydown from '../../hooks/useKeydown';
import useWalk from '../Actor/actions/useWalk';
import directions from '../Actor/vars/directions';
import {UNIT as unit} from '../Map/vars/mapSize';

const Player = ({initPos, map}) => {
  const size = { width: 32/unit, height: 32/unit };
  const {position, step, dir, walk} = useWalk(initPos, map, size);
  
  useKeydown((e) => {
    const dir = e.key.replace('Arrow', '').toUpperCase();
    if (!directions.hasOwnProperty(dir)) return;
    e.preventDefault();
    walk(dir);
  });

  return (
    <Actor
      image='url(./Assets/Player.png)'
      position={position}
      size={size}
      step={step}
      dir={dir}
    />
  );
}
export default Player;