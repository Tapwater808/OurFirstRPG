import './index.css';
import Player from '../../components/Player';
import Map from '../../components/Map';

const Engine = () => {
  const startingMap = Map();
  return (
    <div className="zone-container">
      <Player initPos={{x: 2, y: 0}} map={startingMap}/>
    </div>
  );
}

export default Engine;