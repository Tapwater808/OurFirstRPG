import './index.css';
import Player from '../../components/Player';
import Main from '../../components/Menu';
import Inventory from '../../components/Inventory';
import Guy1 from '../../components/Npc/Guy1/Guy1';
import {useRef, useState} from 'react';
import useKeydown from '../../hooks/useKeydown';
import useWalk from '../../components/Actor/actions/useWalk';
import directions from '../../components/Actor/vars/directions';
import useMap from '../../components/Map/hooks/useMap';
import DialogBox from '../../components/DialogBox/DialogBox';
import isObstacle from '../../components/Map/utils/isObstacle';
import findNpc from '../../components/Npc/utils/findNpc';

const Engine = () => {
  const menu = Main();
  const inventory = Inventory();

  const initMap = 'village';
  const [mapName, map, updateMap] = useMap(initMap)
  
  const [playerPos, setPlayerPos] = useState({x: 10, y: 10});
  const [talkableNPC, setTalkableNPC] = useState();

  const messageIndex = useRef(-1);
  const [message, setMessage] = useState('');
  const [speaker, setSpeaker] = useState('');
  
  const [dialogVisibility, setDialogVisibility] = useState(false);
  const playerSize = {width: 4, height: 4};

  const update = (getUpdate) => {
    const [dir, pos] = getUpdate(playerPos);
    setPlayerPos(pos);
    const found = findNpc(mapName, pos, dir, playerSize);
    setTalkableNPC(found);
  }

  const {gesture, dir, walk} = useWalk(
    update,
    (next) => {
      return isObstacle(map, next, playerSize)
    },
  );
  
  const handleInteraction = () => {
    if (talkableNPC) {
      if (!dialogVisibility) {
        setDialogVisibility(true);
        setSpeaker(talkableNPC.name);
      }
      if (messageIndex.current < talkableNPC.dialog.length - 1) {
        setMessage(talkableNPC.dialog[messageIndex.current + 1]);
        messageIndex.current = messageIndex.current + 1;
      } else {
        setDialogVisibility(false);
        setMessage('');
        setSpeaker('');
        messageIndex.current = -1;
      }
    }
  }
  
  useKeydown((e) => {
    if (e.code === "KeyE") handleInteraction();
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
      <Guy1 position={{x: 12, y: 16}}/>
      <Main menu={menu}/>
      <Inventory invent={inventory}/>
      <DialogBox isVisible={dialogVisibility} name={speaker} message={message} />
    </div>
  );
}

export default Engine;