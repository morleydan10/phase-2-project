import ExampleBlog from "./ExampleBlog"

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

    //example blog object
    let exampleBlogs = [
        {
            id: 1,
            name: "Example One",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 2,
            name: "Example Two",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 3,
            name: "Example Three",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
        },
        {
            id: 4,
            name: "Example Four",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
        }
    ] 

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
                    <img src="https://jiffyshirts.imgix.net/f3e7b11b3e7479.png?ixlib=rb-0.3.5&auto=format&fit=fill&fill=solid&trim-color=FFFFFF&trim=color&trim-tol=8&w=307&h=480&q=80&dpr=2" height="100px" alt="image of the number 1"/>
                    <div className="card-content"  style={{backgroundColor: tertiary, color: handleBodyFont(bodyFont)}}>
                        <h3 style={{color: handleHeaderFont(titleFont)}}>Shirts</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button style={{backgroundColor: accent, color: handleBodyFont(bodyFont)}}>Shop</button>
                    </div>
                </div>
                <div className="card" style={{backgroundColor: secondary}}>
                    <img src="https://m.media-amazon.com/images/I/91Si7MRnZSL._AC_SY879_.jpg" height="100px" alt="image of the number 1"/>
                    <div className="card-content" style={{backgroundColor: tertiary, color: handleBodyFont(bodyFont)}}>
                        <h3 style={{color: handleHeaderFont(titleFont)}}>Pants</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button style={{backgroundColor: accent, color: handleBodyFont(bodyFont)}}>Shop</button>
                    </div>
                </div>
                <div className="card" style={{backgroundColor: secondary}}>
                    <img src="https://media.gq.com/photos/5dd6b6bcf9da710009892404/master/w_1600%2Cc_limit/07-golden-age-of-coats-gq-november-2019.jpg" height="100px" alt="image of the number 1"/>
                    <div className="card-content" style={{backgroundColor: tertiary, color: handleBodyFont(bodyFont)}}>
                        <h3 style={{color: handleHeaderFont(titleFont)}}>Coats</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button style={{backgroundColor: accent, color: handleBodyFont(bodyFont)}}>Shop</button>
                    </div>
                </div>
                <div className="card" style={{backgroundColor: secondary}}>
                    <img src="https://cdn.inksoft.com/images/products/14782/products/18-772/Royal/front/Original.png?decache=637926958551200000" height="100px" alt="image of the number 1"/>
                    <div className="card-content" style={{backgroundColor: tertiary, color: handleBodyFont(bodyFont)}}>
                        <h3 style={{color: handleHeaderFont(titleFont)}}>Hats</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button style={{backgroundColor: accent, color: handleBodyFont(bodyFont)}}>Shop</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="example">
            <div className="blog-holder" style={{backgroundColor: handleBackgroundColors(background)}}>
                {exampleBlogs.map((blog) => {
                    return <ExampleBlog
                    key={blog.id}
                    blog={blog}
                    primary={primary}
                    secondary={secondary}
                    tertiary={tertiary}
                    accent={accent}
                    background={background}
                    titleFont={titleFont}
                    bodyFont={bodyFont}
                    handleBackgroundColors={handleBackgroundColors}
                    handleHeaderFont={handleHeaderFont}
                    handleBodyFont={handleBodyFont}
                    />
                })}
            </div>
        </div>
    </div>
    )
}

export default ColorPalletExamples;