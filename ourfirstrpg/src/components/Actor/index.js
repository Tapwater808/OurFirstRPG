import React from "react";
import Sprite from "./Sprites/index"

export default function Actor({sprite, data, step = 0, dir =0 }){
    return(
        <div className="zone-container">
            <Sprite 
            image={sprite}
            data= {{
                x: step * w,
                y: dir * h,
                w: 32,
                h: 32,
            }}
            />
        </div>
    )
}