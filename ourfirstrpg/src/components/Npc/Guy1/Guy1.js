import { useEffect } from 'react';
import Actor from '../../Actor';
import useWalk from '../../Actor/actions/useWalk';
import directions from '../../Actor/vars/directions';
import {UNIT as unit} from '../../Map/vars/mapSize';

const Guy1 = ({initPos, map, playerLocation}) => {
    const charSize = { width: 32, height: 32 };
    const {position, dir} = useWalk(initPos, map, {
        width: parseInt(charSize.width/unit),
        height: parseInt(charSize.height/unit)
      }
    );
    useEffect(() => {
      
    })

    return (
      <Actor
        image='url(./Assets/BadGuy1.png)'
        position={position}
        size={charSize}
        step={0}
        dir={dir}
      />
    );
  }
  export default Guy1;