import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ColorSelector from "./ColorSelector";
import ColorPallet from "./ColorPallet";


function ColorStudio() {
    //Selected color hook
    const [color, setColor] = useState({r: 255, g: 255, b: 255, a: 1});

    function setColorContainer(x) {
        setColor(x)
    }

    //Color Pallet Colors
    const[primary, setPrimary] = useState("rgba(255, 255, 255, 1)")
    const[secondary, setSecondary] = useState("rgba(255, 255, 255, 1)")
    const[tertiary, setTertiary] = useState("rgba(255, 255, 255, 1)")
    const[accent, setAccent] = useState("rgba(255, 255, 255, 1)")


    return (
        <>
            <ColorSelector color={color} setColor={setColorContainer}/>
            <ColorPallet 
            color={color}
            primary={primary}
            setPrimary={setPrimary}
            secondary={secondary}
            setSecondary={setSecondary}
            tertiary={tertiary}
            setTertiary={setTertiary}
            accent={accent}
            setAccent={setAccent}
            />
            <div>
                
            </div>
        </>
    )
}

export default ColorStudio;


// function handleSubmit(e) {
    //         e.preventDefault();
            
            
    //         const newPallet = [{
    //             primary: {},
    //             secondary: {},
    //             tertiary: {},
    //             quarternary: {}
    //         }
    //     ]
    
    //     fetch("http://localhost:3000/pallets")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         onAddPallet(data)
    //     }), [] 
    // };