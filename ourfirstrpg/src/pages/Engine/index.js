import './index.css';
import Player from '../../components/Player';
import Map from '../../components/Map';
import Main from '../../components/Menu';
import Inventory from '../../components/Inventory';
import Guy1 from '../../components/Npc/Guy1/Guy1'
import {useState} from 'react';
import useKeydown from '../../hooks/useKeydown';
import useWalk from '../../components/Actor/actions/useWalk';
import directions from '../../components/Actor/vars/directions';
import {UNIT as unit} from '../../components/Map/vars/mapSize';

import DialogBox from '../../components/DialogBox/DialogBox'

const Engine = () => {
  const map = Map();
  const menu = Main();
  const inventory = Inventory();
  const [playerPos, setPlayerPos] = useState({x: 10, y: 10});
  const playerSize = {width: 32, height: 32};
  const {gesture, dir, walk} = useWalk(
    map,
    setPlayerPos,
    {
      x: playerSize.width/unit,
      y: playerSize.height/unit
    }
  );
  
  const handleHello = () => {
    console.log("position", playerPos);
    if (
        (playerPos.x > 50 && playerPos.x < 60) &&
        (playerPos.y > 110 && playerPos.y < 120) 
     ) {
      console.log('hello');
    } else{
      console.log('Sorry you are not close enough');
    }
  }
  
  useKeydown((e) => {
    if (e.code === "KeyE") handleHello();
    const facing = e.key.replace('Arrow', '').toUpperCase();
    if (!directions.hasOwnProperty(facing)) return;
    e.preventDefault();
    walk(facing);
  });
  
  return (
    <div className="zone-container">
      <Player
        position={playerPos}
        size={playerSize}
        gesture={gesture}
        dir={dir}
      />
      {/* <Guy1 initPos={{x: 6, y: 6}} map={map} playerLocation={playerPos}/> */}
      <Main menu={menu}/>
      <Inventory invent={inventory}/>
      {/* <Guy1 initPos={{x: 5, y: 5}} map={startingMap} /> */}
      <DialogBox />
    </div>
  );
}

export default Engine;