import React, { useState } from "react";

function SavedColorPallets({ myPallets }) {

    return (
        <div>
            <h1>My Saved Pallets</h1>
            <div className="pallet-container">
                {myPallets}
            </div>
        </div>
    )
}

export default SavedColorPallets;