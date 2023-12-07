import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SavedPalletCard({ id, primary, secondary, tertiary, accent, background, titleFont, bodyFont, onDelete}) {


    function handleClickDelete() {

        fetch(`http://localhost:3000/pallets/${id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json"
            },
        })
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            onDelete();
        });


    };

    return (
        <div className="saved-pallet-card">
            {/* try to get css to load in rows instead of columns */}
            <h2 className="saved-pallet-heading">Saved Palette {id}</h2>
            <div className="card-color-div">
                <div className="card-primary" style={{ backgroundColor: primary }}></div>
                <div className="card-secondary" style={{ backgroundColor: secondary }}></div>
                <div className="card-tertiary" style={{ backgroundColor: tertiary }}></div>
                <div className="card-quarternary" style={{ backgroundColor: accent }}></div>
            </div>
            <div className="button-div">
                {/* Need to change path to new load page */}
                <NavLink  to={`/ColorStudio/${id}`}>
                    <button className="load-button">Load</button>
                </NavLink>
                <button onClick={handleClickDelete} className="delete-button">Delete</button>
            </div>
        </div>
    )

}

export default SavedPalletCard;