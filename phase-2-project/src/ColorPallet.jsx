import { useEffect } from "react";

function ColorPallet({color, setPrimary, setSecondary, setTertiary, setAccent, primary, secondary, tertiary, accent, setBackground, setTitleFont, setBodyFont, selectedColor, setSelectedColor, background, titleFont, bodyFont}) {
    
    //converts color to string
    function colorStringify(color) {
        return `rgba( ${color.r} , ${color.g} , ${color.b} , ${color.a} )`
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
    }, [color])

    //handles selection
    function handleSelection(e) {
        setSelectedColor(e.target.id)
    }

    //handles background/font colors
    function handlesSecondarySelection(e) {
        let id = e.target.id

        if(id === "background") {
            setBackground(e.target.value)
        } else if (id === "title-font") {
            setTitleFont(e.target.value)
        } else if (id === "body-font") {
            setBodyFont(e.target.value)
        }
    }

    return(
        <>
            <h1 className="collor-pallet-title">Color Pallet</h1>
            <div id="pallet-container">
                <div className={selectedColor === "primary" ? "colorActive" : "color"} id="primary-color" >
                    <h2>Primary Color</h2>
                    <div id="primary" onClick={handleSelection} style={{backgroundColor: primary}}></div>
                </div>
                <div className={selectedColor === "secondary" ? "colorActive" : "color"} id="secondary-color">
                    <h2>Secondary Color</h2>
                    <div id="secondary" onClick={handleSelection} style={{backgroundColor: secondary}}></div>
                </div>
                <div className={selectedColor === "tertiary" ? "colorActive" : "color"} id="tertiary-color" >
                    <h2>Tertiary Color</h2>
                    <div id="tertiary" onClick={handleSelection} style={{backgroundColor: tertiary}}></div>
                </div>
                <div className={selectedColor === "accent" ? "colorActive" : "color"} id="accent-color" >
                    <h2>Accent Color</h2>
                    <div id="accent" onClick={handleSelection} style={{backgroundColor: accent}}></div>
                </div>
            </div>
            <div className="secondaries-container">
                    <div className="secondary-value">
                        <label htmlFor="background" >Background Color:</label>
                        <select id="background" onChange={handlesSecondarySelection} value={background}>
                            <option value="white">White</option>
                            <option value="black">Black</option>
                            <option value="primary">Primary</option>
                            <option value="secondary">Secondary</option>
                            <option value="tertiary">Tertiary</option>
                            <option value="accent">Accent</option>
                        </select>
                    </div>
                    <div className="secondary-value">
                        <label htmlFor="title-font" >Title Font Color:</label>
                        <select id="title-font" onChange={handlesSecondarySelection} value={titleFont}>
                            <option value="black">Black</option>
                            <option value="white">White</option>
                            <option value="primary">Primary</option>
                            <option value="secondary">Secondary</option>
                            <option value="tertiary">Tertiary</option>
                            <option value="accent">Accent</option>
                        </select>
                    </div>
                    <div className="secondary-value">
                        <label htmlFor="body-font" >Body Font Color:</label>
                        <select id="body-font" onChange={handlesSecondarySelection} value={bodyFont}>
                            <option value="black">Black</option>
                            <option value="white">White</option>
                            <option value="primary">Primary</option>
                            <option value="secondary">Secondary</option>
                            <option value="tertiary">Tertiary</option>
                            <option value="accent">Accent</option>
                        </select>
                    </div>
            </div>
        </>
    )
}

export default ColorPallet;
