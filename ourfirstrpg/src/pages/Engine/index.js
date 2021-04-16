import './index.css';
import Player from '../../components/Player';
import Map from '../../components/Map';
import Main from '../../components/Menu';
import Inventory from '../../components/Inventory';
// import Guy1 from '../../components/Npc/Guy1/Guy1'

import DialogBox from '../../components/DialogBox/DialogBox'

const Engine = () => {
  const startingMap = Map();
  const menu = Main();
  const inventory = Inventory();
  return (
    <div className="zone-container">
      <Player initPos={{x: 2, y: 0}} map={startingMap}/>
      <Main menu={menu}/>
      <Inventory invent={inventory}/>
      {/* <Guy1 initPos={{x: 5, y: 5}} map={startingMap} /> */}
      <DialogBox />
    </div>
  );
}

export default Engine;