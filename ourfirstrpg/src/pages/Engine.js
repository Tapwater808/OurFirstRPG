import Sprite from "../components/Sprites";
import Actor from "../components/Actor/index";

const Engine = () => {
  const data = {
    w: 32,
    h: 32,
};   
  return (
    <Sprite>    
      
<div className = "zone-container">
  <Actor sprite = {`./components/Assets/Player.png`} data={data}></Actor>
</div></Sprite>

  );
}

export default Engine;