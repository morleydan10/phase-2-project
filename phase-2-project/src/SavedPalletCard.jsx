import React from "react";
import { NavLink } from "react-router-dom";

function SavedPalletCard({ id, primary, secondary, tertiary, quarternary, background, titleFont, bodyFont}) {
    return (
        <div className="saved-pallet-container">
            {/* try and get css to load in rows instead of columns */}
            <h2 className="saved-pallet-heading">Saved Palette {id}</h2>
            <div className="card-color-div">
                <div className="card-primary" style={{ backgroundColor: primary }}></div>
                <div className="card-secondary" style={{ backgroundColor: secondary }}></div>
                <div className="card-tertiary" style={{ backgroundColor: tertiary }}></div>
                <div className="card-quarternary" style={{ backgroundColor: quarternary }}></div>
            </div>
            <div className="button-div">
                {/* Need to change path to new load page */}
                <NavLink  to="/ColorStudio">
                    <button className="load-button">Load</button>
                </NavLink>
                <button className="delete-button">Delete</button>
            </div>
        </div>
    )

}

export default SavedPalletCard;