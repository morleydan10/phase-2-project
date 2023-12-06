import { useState, useEffect } from "react";
import ColorSelector from "./ColorSelector";
import ColorPallet from "./ColorPallet";
import ColorPalletExamples from "./ColorPalletExamples";
import { useParams } from "react-router-dom";


function ColorStudio() {
    //sets up params
    const params = useParams();

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

     //use effect for initial upload
     useEffect(() => {
        fetch(`http://localhost:3000/pallets/${params.id}`)
        .then(resp => resp.json())
        .then(data => {
            setPrimary(data.primary)
            setSecondary(data.secondary)
            setTertiary(data.tertiary)
            setAccent(data.acent)
            setBackground(data.background)
            setTitleFont(data.titleFont)
            setBodyFont(data.bodyFont)
        })
    }, [])

    //Handles saving of pallets edits
    function handleEdit() {
        const newPallet = {
          primary: primary,
          secondary: secondary,
          tertiary: tertiary,
          quarternary: accent,
          background: background,
          titleFont: titleFont,
          bodyFont: bodyFont
        }


        fetch(`http://localhost:3000/pallets/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPallet)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

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
            <button className="new-pallet-button" onClick={handleEdit}>Save Edits</button>
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