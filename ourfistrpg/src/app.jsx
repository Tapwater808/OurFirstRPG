import React from "react";
import Actor from "./components/Actor/index";

export default function App(){
    
        const data = {
                w: 32,
                h: 32,
            };   
    return(
        <div className = "zone-container">
            <Actor sprite = {`./components/Assets/Player.png`} data={data}></Actor>
        </div>
    );
}