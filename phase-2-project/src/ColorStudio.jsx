import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ColorSelector from "./ColorSelector";
import ColorPallet from "./ColorPallet";
import ColorPalletExamples from "./ColorPalletExamples";


function ColorStudio() {
    //sets seleected color
    const [selectedColor, setSelectedColor] = useState("primary")

    //Selected color hook
    const [color, setColor] = useState({r: 255, g: 255, b: 255, a: 1});

    function setColorContainer(x) {
        setColor(x)
    }

    //Color Pallet Colors
    const[primary, setPrimary] = useState("rgba( 255 , 255 , 255 , 1 )")
    const[secondary, setSecondary] = useState("rgba( 255 , 255 , 255 , 1 )")
    const[tertiary, setTertiary] = useState("rgba( 255 , 255 , 255 , 1 )")
    const[accent, setAccent] = useState("rgba( 255 , 255 , 255 , 1 )")
    const[background, setBackground] = useState("rgba( 255 , 255 , 255 , 1 )")
    const[titleFont, setTitleFont] = useState("rgba( 0 , 0 , 0 , 1 )")
    const[bodyFont, setBodyFont] = useState("rgba( 0 , 0 , 0 , 1 )")

    return (
        <>
            <ColorSelector 
            color={color} 
            setColor={setColorContainer}
            selectedColor={selectedColor}
            primary={primary}
            secondary={secondary}
            tertiary={tertiary}
            accent={accent}
            />
            <ColorPallet
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            background={background}
            setBackground={setBackground}
            titleFont={titleFont}
            setTitleFont={setTitleFont}
            bodyFont={bodyFont}
            setBodyFont={setBodyFont}
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
            <ColorPalletExamples 
            background={background}
            titleFont={titleFont}
            bodyFont={bodyFont}
            color={color}
            primary={primary}
            secondary={secondary}
            tertiary={tertiary}
            accent={accent} 
            />
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