import './index.css';
import Player from '../../components/Player';
import Map from '../../components/Map';
import Main from '../../components/Menu';
import Inventory from '../../components/Inventory';

const Engine = () => {
  const startingMap = Map();
  const menu = Main();
  const inventory = Inventory();
  return (
    <div className="zone-container">
      <Player initPos={{x: 2, y: 0}} map={startingMap}/>
      <Main menu={menu}/>
      <Inventory invent={inventory}/>
    </div>
  );
}

export default Engine;