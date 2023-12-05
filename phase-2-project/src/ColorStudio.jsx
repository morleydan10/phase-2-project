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
    const[background, setBackground] = useState("rgba(255, 255, 255, 1)")
    const[titleFont, setTitleFont] = useState("rgba(0, 0, 0, 1)")
    const[bodyFont, setBodyFont] = useState("rgba(0, 0, 0, 1)")


    //handles continous change of secondary colors
    function handleBackgroundColors(value) {
        if(value === "white"){
            return "rgba(255, 255, 255, 1)"
        } else if (value === "black") {
            return "rgba(0, 0, 0, 1)"
        } else if (value === "primary") {
            return primary
        } else if (value === "secondary") {
            return secondary
        } else if (value === "tertiary") {
            return tertiary
        } else if (value === "accent") {
            return accent
        }
    }


    return (
        <>
            <ColorSelector color={color} setColor={setColorContainer}/>
            <ColorPallet
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
            <div className="samples-container">
                <div className="example" style={{backgroundColor: handleBackgroundColors(background)}}>
                    <header style={{backgroundColor: primary, color: titleFont}}>
                        <h2>Welcome</h2>
                        <nav>
                            <span style={{backgroundColor: tertiary}}>Home</span><span style={{backgroundColor: tertiary}}>About</span><span style={{backgroundColor: tertiary}}>Sources</span>
                        </nav>
                    </header>
                    <div className="jumbotron" style={{backgroundColor: secondary}}>
                        <div>
                            <h3 style={{backgroundColor: tertiary}}>Header</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <button style={{backgroundColor: accent}}>Click Here</button>
                        </div>
                    </div>
                </div>
                <div className="example">
                    <div class="card-holder">
                        <div class="card">
                            <img src="https://i.pinimg.com/736x/24/8e/1e/248e1e4f38522a9179f8c7b3ac3b1508.jpg" height="100px" alt="image of the number 1"/>
                            <h3>Shirt</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button>Shop</button>
                        </div>
                        <div class="card">
                            <img src="https://static.vecteezy.com/system/resources/previews/010/157/211/original/carpenter-pants-work-skate-straight-leg-flat-technical-drawing-illustration-blank-workwear-streetwear-mock-up-template-for-design-and-tech-packs-cad-vector.jpg" height="100px" alt="image of the number 1"/>
                            <h3>Pant</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button>Shop</button>
                        </div>
                        <div class="card">
                            <img src="https://img.freepik.com/premium-vector/vector-illustration-men-s-trench-coat-front-back-views_469364-225.jpg?w=360" height="100px" alt="image of the number 1"/>
                            <h3>Coat</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button>Shop</button>
                        </div>
                        <div class="card">
                            <img src="https://static.vecteezy.com/system/resources/previews/010/157/208/non_2x/trucker-hat-snapback-technical-drawing-illustration-blank-streetwear-mock-up-template-for-design-and-tech-packs-cad-strap-mesh-vector.jpg" height="100px" alt="image of the number 1"/>
                            <h3>Hat</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button>Shop</button>
                        </div>
                    </div>
                </div>
                <div className="example">
                </div>
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