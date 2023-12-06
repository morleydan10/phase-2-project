import { useState } from "react";


function ColorPalletExamples({primary, secondary, tertiary, accent, background, titleFont, bodyFont}) {

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

    function handleHeaderFont(value) {
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

    function handleBodyFont(value) {
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
        <div className="samples-container">
        <div className="example" style={{backgroundColor: handleBackgroundColors(background)}}>
            <header style={{backgroundColor: primary, color: handleHeaderFont(titleFont), borderColor: "black"}}>
                <h2 style={{color: handleHeaderFont(titleFont)}}>Welcome</h2>
                <nav style={{color: handleBodyFont(bodyFont)}}>
                    <span style={{backgroundColor: tertiary}}>Home</span><span style={{backgroundColor: tertiary}}>About</span><span style={{backgroundColor: tertiary}}>Sources</span>
                </nav>
            </header>
            <div className="jumbotron" style={{backgroundColor: secondary}}>
                <div>
                    <h3 style={{backgroundColor: tertiary, color: handleHeaderFont(titleFont)}}>Header</h3>
                    <p style={{color: handleBodyFont(bodyFont)}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button style={{backgroundColor: accent, color: handleBodyFont(bodyFont)}}>Click Here</button>
                </div>
            </div>
        </div>
        <div className="example">
            <div className="card-holder" style={{backgroundColor: handleBackgroundColors(background)}}>
                <div className="card" style={{backgroundColor: secondary}}>
                    <img src="https://i.pinimg.com/736x/24/8e/1e/248e1e4f38522a9179f8c7b3ac3b1508.jpg" height="100px" alt="image of the number 1"/>
                    <div className="card-content"  style={{backgroundColor: tertiary, color: handleBodyFont(bodyFont)}}>
                        <h3 style={{color: handleHeaderFont(titleFont)}}>Shirts</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button style={{backgroundColor: accent}}>Shop</button>
                    </div>
                </div>
                <div className="card" style={{backgroundColor: secondary}}>
                    <img src="https://static.vecteezy.com/system/resources/previews/010/157/211/original/carpenter-pants-work-skate-straight-leg-flat-technical-drawing-illustration-blank-workwear-streetwear-mock-up-template-for-design-and-tech-packs-cad-vector.jpg" height="100px" alt="image of the number 1"/>
                    <div className="card-content" style={{backgroundColor: tertiary, color: handleBodyFont(bodyFont)}}>
                        <h3 style={{color: handleHeaderFont(titleFont)}}>Pants</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button style={{backgroundColor: accent}}>Shop</button>
                    </div>
                </div>
                <div className="card" style={{backgroundColor: secondary}}>
                    <img src="https://img.freepik.com/premium-vector/vector-illustration-men-s-trench-coat-front-back-views_469364-225.jpg?w=360" height="100px" alt="image of the number 1"/>
                    <div className="card-content" style={{backgroundColor: tertiary, color: handleBodyFont(bodyFont)}}>
                        <h3 style={{color: handleHeaderFont(titleFont)}}>Coats</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button style={{backgroundColor: accent}}>Shop</button>
                    </div>
                </div>
                <div className="card" style={{backgroundColor: secondary}}>
                    <img src="https://static.vecteezy.com/system/resources/previews/010/157/208/non_2x/trucker-hat-snapback-technical-drawing-illustration-blank-streetwear-mock-up-template-for-design-and-tech-packs-cad-strap-mesh-vector.jpg" height="100px" alt="image of the number 1"/>
                    <div className="card-content" style={{backgroundColor: tertiary, color: handleBodyFont(bodyFont)}}>
                        <h3 style={{color: handleHeaderFont(titleFont)}}>Hats</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button style={{backgroundColor: accent}}>Shop</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="example">
            <div className="blog-holder">
            </div>
        </div>
    </div>
    )
}

export default ColorPalletExamples;