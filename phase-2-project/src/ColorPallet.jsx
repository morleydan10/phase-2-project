import { useState, useEffect } from "react";

function ColorPallet({color, setPrimary, setSecondary, setTertiary, setAccent, primary, secondary, tertiary, accent}) {

    //sets seleected color
    const [selectedColor, setSelectedColor] = useState("")
    
    //converts color to string
    function colorStringify(color) {
        return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
    }

    let colorString = colorStringify(color)

    //setcolor based on selections

    useEffect(() => {
        if(selectedColor === "primary") {
            setPrimary(colorString)
        } else if (selectedColor === "secondary") {
            setSecondary(colorString)
        } else if (selectedColor === "tertiary") {
            setTertiary(colorString)
        } else if (selectedColor === "accent") {
            setAccent(colorString)
        }
    }, [color, selectedColor])

    //handles selection
    function handleSelection(e) {
        setSelectedColor(e.target.id)
    }


    return(
        <div id="pallet-container">
                <div id="primary-color" >
                    <h2>Primary Color</h2>
                    <div id="primary" onClick={handleSelection} style={{backgroundColor: primary}}>x</div>
                </div>
                <div id="secondary-color">
                    <h2>Secondary Color</h2>
                    <div id="secondary" onClick={handleSelection} style={{backgroundColor: secondary}}>x</div>
                </div>
                <div id="tertiary-color" >
                    <h2>Tertiary Color</h2>
                    <div id="tertiary" onClick={handleSelection} style={{backgroundColor: tertiary}}>x</div>
                </div>
                <div id="accent-color" >
                    <h2>Accent Color</h2>
                    <div id="accent" onClick={handleSelection} style={{backgroundColor: accent}}>x</div>
                </div>
            </div>
    )
}

export default ColorPallet;