import React, { useState, useEffect } from "react";

function SavedColorPallets({ myPallets }) {

    const [savedPallets, setSavedPallets] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/pallets")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
    }, []
    );



    return (
        <div>
            <h1 className="page-heading">My Saved Pallets</h1>
            <div className="pallet-container">
                {myPallets}
            </div>
        </div>
    )
}

export default SavedColorPallets;