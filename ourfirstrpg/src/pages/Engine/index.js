import './index.css';
import Player from '../../components/Player';
import Map from '../../components/Map';
import Guy1 from '../../components/Npc/Guy1/Guy1'

const Engine = () => {
  const startingMap = Map();
  return (
    <div className="zone-container">
      <Player initPos={{x: 2, y: 0}} map={startingMap}/>
      <Guy1 initPos={{x: 6, y: 6}} map={startingMap} />
    </div>
  );
}

export default Engine;