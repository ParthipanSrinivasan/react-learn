import { useState } from "react";
import { createRoot } from 'react-dom/client';

const FavoriteColor = () =>{
    const [color, setColor] = useState("red");
return (
    <>
    <h1>My USing Testying {color}</h1>
    <button
    type="button"
    onClick={()=>setColor("blue")}
    >
    Blue
    </button>
    </>
)
}

export default FavoriteColor;