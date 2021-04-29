// CSS Stylesheet
import './engine.css';
// Components
import Player from '../../components/Player';
import Main from '../../components/Menu';
import Inventory from '../../components/Inventory';
import DialogBox from '../../components/DialogBox/DialogBox';
import Npc from '../../components/Npc';
// Hooks
import {useRef, useState, useMemo} from 'react';
import useKeydown from '../../hooks/useKeydown';
import useWalk from '../../components/Actor/actions/useWalk';
import getMap from '../../components/Map/utils/getMap';
// Variables
import directions from '../../components/Actor/vars/directions';
import spawn from '../../components/Npc/vars/spawn';
// Util Functions
import isObstacle from '../../components/Map/utils/isObstacle';
import findInteractable from '../../components/Map/utils/findInteractable';
import findDoor from '../../components/Door/utils/findDoor';

const Engine = () => {
  const menu = Main();
  const inventory = Inventory();

  const [mapName, setMapName] = useState('house');
  const [map, mapImg] = useMemo(() => getMap(mapName), [mapName]);
  const npcs = spawn[mapName];
  
  const [playerLocation, setPlayerLoc] = useState({x: 12, y: 20});
  const [interactable, setInteractable] = useState(null);

  const msgIndex = useRef(-1);
  const [message, setMsg] = useState('');
  const [speaker, setSpeaker] = useState('');
  
  const [dialogVisibility, setDialogVisibility] = useState(false);
  const playerSize = {width: 4, height: 4};

  const update = (getUpdate) => {
    const [dir, loc] = getUpdate(playerLocation);
    const door = findDoor(mapName, map, loc);
    if (door) {
      setMapName(door.to);
      setPlayerLoc(door.spawnPlayerAt);
    } else {
      setPlayerLoc(loc);
      const found = findInteractable(mapName, map, loc, dir, playerSize);
      setInteractable(found);
    //  console.log('Found', found);
    }
  }

  const [gesture, dir, walk] = useWalk(
    update,
    (next) => isObstacle(map, next, playerSize),
  );
  
  const handleInteraction = () => {
    if (!interactable) return msgIndex.current = -1;

    if (!dialogVisibility) {
      setDialogVisibility(true);
      setSpeaker(interactable.name);
    }

    if (msgIndex.current < interactable.dialog.length - 1) {
      setMsg(interactable.dialog[msgIndex.current + 1]);
      msgIndex.current = msgIndex.current + 1;
    } else {
      setDialogVisibility(false);
      setMsg('');
      setSpeaker('');
      msgIndex.current = -1;
    }
  }
  
  useKeydown((e) => {
    // Interact Button 'E'
    if (e.code === 'KeyE') handleInteraction();
    // Arrow Key
    const facing = e.key.replace('Arrow', '').toUpperCase();
    if (!directions.hasOwnProperty(facing)) return;
    e.preventDefault();
    walk(directions[facing]);
  });
  
  return (
    <div className='zone-container'
      style={{backgroundImage: `url(${mapImg})`}}
    >
      <Player
        position={playerLocation}
        size={playerSize}
        gesture={gesture}
        dir={dir}
      />
      {
        npcs ? Object.entries(npcs).map(([key, {sprite, location}]) =>
          <Npc
            key={key}
            sprite={sprite.avatar}
            position={location}
            size={sprite.size}
          />
        ) : ''
      }
      <div className="buttons">
        <Main menu={menu}/>
        <Inventory invent={inventory}/>
      </div>
      <DialogBox
        isVisible={dialogVisibility}
        name={speaker}
        message={message}
      />
    </div>
  );
}

export default Engine;