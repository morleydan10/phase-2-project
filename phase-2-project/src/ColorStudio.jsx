import { RgbaColorPicker } from "react-colorful";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function ColorStudio() {
//use state for RGBAColorPicker
    const [color, setColor] = useState({r: 255, g: 255, b: 255, a: 1});
    const [hexColor, setHexColor] =useState("#ffffff")

    function handleColorSet(e) {
        setColor(e)
        let newHex = rgbToHex(e.r, e.g, e.b)
        setHexColor(newHex)
    }

//colors to Hex
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    let r2 = 0
    let g2 = 0
    let b2 = 0

        r2 = parseInt(r, 10)
        g2 = parseInt(g, 10)
        b2 = parseInt(b, 10)

    return "#" + componentToHex(r2) + componentToHex(g2) + componentToHex(b2);
  }

//colors to RGB
function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

//handles manual RGB changes
function handleColorChange(e){
    if(e.target.id === "a" && e.target.value <= 1 && e.target.value >= 0){
    let newColor = {...color,[e.target.id]: e.target.value}
    setColor(newColor)
    let newHexColor = rgbToHex(newColor.r, newColor.g, newColor.b)
    setHexColor(newHexColor)
    } else if(e.target.value <= 255 && e.target.value > -1 && e.target.id !== "a") {
    let newColor = {...color,[e.target.id]: e.target.value}
    setColor(newColor)
    let newHexColor = rgbToHex(newColor.r, newColor.g, newColor.b)
    setHexColor(newHexColor)
    } 
}

//handles manual hex entries
  function handleHexColorChange(e) {
    setHexColor(e.target.value)

    let newRGBColor = hexToRgb(e.target.value)
    if(newRGBColor === null) {
        setColor({r: 255, g: 255, b: 255, a: 1})
    } else {
        setColor({...newRGBColor, a: 1})
    }
  }




    function handleSubmit(e) {
        e.preventDefault();
        
        
        const newPallet = [{
            primary: {},
            secondary: {},
            tertiary: {},
            quarternary: {}
        }
    ]

    fetch("http://localhost:3000/pallets")
    .then((res) => res.json())
    .then((data) => {
        onAddPallet(data)
    }), [] 
};


    return (
        <div>
            <RgbaColorPicker color={color} onChange={handleColorSet} />
            <div className="color-detail-conatiner">
                <div>
                    <div className="red">
                        <label htmlFor="r">Red Value</label>
                        <br/>
                        <input id="r" value={color.r} onChange={handleColorChange}/>
                    </div>
                    <div className="green">
                        <label htmlFor="g">Green Value</label>
                        <br/>
                        <input id="g" value={color.g} onChange={handleColorChange}/>
                    </div>
                    <div className="blue">
                        <label htmlFor="b">Blue Value</label>
                        <br/>
                        <input id="b" value={color.b} onChange={handleColorChange}/>
                    </div>
                    <div className="transparency">
                        <label htmlFor="a">Transparency Value</label>
                        <br/>
                        <input id="a" value={color.a} onChange={handleColorChange}/>
                    </div>
                    <div className="Hex">
                        <label htmlFor="hex">Hex Value</label>
                        <br/>
                        <input id="hex" value={hexColor} onChange={handleHexColorChange}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorStudio;


