import React from "react";
import { NavLink } from "react-router-dom";

const cssClass = ({ isActive, isPending }) => 
    isPending ? "pending" : isActive ? "active" : "navlink";

function NavBar() {
    return (
        <div className="navbar">
            <nav id="nav"> 
                <NavLink className={cssClass} to="/">Home</NavLink>
                <NavLink className={cssClass} to="/ColorStudio">Color Studio</NavLink>
                <NavLink className={cssClass} to="/Pallets">My Saved Palettes</NavLink>
            </nav>
        </div>
            
    )
}

export default NavBar;