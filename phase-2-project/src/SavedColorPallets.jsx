import React, { useState, useEffect } from "react";
import SavedPalletCard from "./SavedPalletCard";

function SavedColorPallets() {

    const [savedPallets, setSavedPallets] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/pallets")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setSavedPallets(data);
        })
    }, []
    );

    function renderSavePallets (pallets) {
        return pallets.map((pallet) => {
            return(
        
            <SavedPalletCard
                key={pallet.id}
                id={pallet.id}
                primary={pallet.primary}
                secondary={pallet.secondary}
                tertiary={pallet.tertiary}
                quarternary={pallet.quarternary}
                background={pallet.background}
                titleFont={pallet.titleFont}
                bodyFont={pallet.bodyFont}
            />
        )})
    }

    
    return (
        <div>
            <h1 className="page-heading">My Saved Palettes</h1>
            {renderSavePallets(savedPallets)}
        </div>
    )
}

export default SavedColorPallets;