import { useState } from "react";
import ColorSelector from "./ColorSelector";
import ColorPallet from "./ColorPallet";
import ColorPalletExamples from "./ColorPalletExamples";
import Filter from "bad-words";
import Header from "./Header";



function ColorStudio() {
    //sets seleected color
    const [selectedColor, setSelectedColor] = useState("primary")

    //Selected color hook
    const [color, setColor] = useState({r: 255, g: 255, b: 255, a: 1});

    function setColorContainer(x) {
        setColor(x)
    }

    //Color Pallet Colors
    const[primary, setPrimary] = useState("rgba( 105 , 50 , 50 , 1 )")
    const[secondary, setSecondary] = useState("rgba( 255 , 255 , 255 , 1 )")
    const[tertiary, setTertiary] = useState("rgba( 255 , 255 , 255 , 1 )")
    const[accent, setAccent] = useState("rgba( 255 , 255 , 255 , 1 )")
    const[background, setBackground] = useState("white")
    const[titleFont, setTitleFont] = useState("black")
    const[bodyFont, setBodyFont] = useState("black")
    const[palleteName, setPalleteName] = useState("")

    //Handles saving of pallets
    function handleSave() {
        const newPallet = {
          primary: primary,
          secondary: secondary,
          tertiary: tertiary,
          accent: accent,
          background: background,
          titleFont: titleFont,
          bodyFont: bodyFont,
          name: palleteName
        }


        fetch("https://color-pallets.onrender.com/pallets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPallet)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        alert("Palette successfully saved.")
    }
    //Pallete naming
    //Profanity Filter
    var customFilter = new Filter({ placeHolder: '*'});
 
    function scrubName(name) {
        if(name.length > 0) {
            if(/^[A-Za-z0-9_ ]+$/.test(name)) {
            let nameWithNoCursing = customFilter.clean(name)
            let isValidName =  /^[A-Za-z0-9_ ]+$/.test(nameWithNoCursing)
            return isValidName
            } else {
                return false
            }
        } else {
            return true 
        }
    }

    function handleName(e) {
        if(scrubName(e.target.value)) {
            setPalleteName(e.target.value)
        }

    }
    

    return (
        <div className="color-studio-page">
            <Header />
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
            <div className="new-area">
                <div className="set-name">
                    <label htmlFor="pallet-name">Palette Name:</label>
                    <input type="text" id="pallet-name" onChange={handleName} value={palleteName} maxLength="20"/>
                </div>
                <button className="new-pallet-button" onClick={handleSave}>Save Palette</button>
            </div>
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
        </div>
    )
}

export default ColorStudio;

