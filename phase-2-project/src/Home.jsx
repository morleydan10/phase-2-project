import { NavLink } from "react-router-dom";

function Home() {
    return (
        <main>
            <div className="background-image-div" style={{ backgroundImage: `url('https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51CJu3t4PvL._AC_SL1024_.jpg')` }}>
                    <div className="homepage-div">
                        <h1 className="page-heading">Welcome!</h1>
                        <div className="homepage-text">
                            <p>Welcome to the CSS Color Palette! Using our Color Studio, generate color palettes to use on all of your latest projects!</p>
                            <p>Here are some examples of what you can do using our website:</p>
                            <div className="samples-div">
                            {/* samples here */}
                            </div>
                        </div>
                        <div>
                            <NavLink to="/ColorStudio">
                                <button className="get-started-button">Click    here to get started</button>
                            </NavLink>
                        </div>
                    </div>
            </div>

        </main>
    )
}

export default Home;