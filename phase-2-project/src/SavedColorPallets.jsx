import React, { useState, useEffect } from "react";
import SavedPalletCard from "./SavedPalletCard";

function SavedColorPallets() {

    const [savedPallets, setSavedPallets] = useState([]);

    useEffect(() => {
        fetch("https://color-pallets.onrender.com/pallets")
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
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
                name={pallet.name}
                primary={pallet.primary}
                secondary={pallet.secondary}
                tertiary={pallet.tertiary}
                accent={pallet.accent}
                background={pallet.background}
                titleFont={pallet.titleFont}
                bodyFont={pallet.bodyFont}
                onDelete={() => onDelete(pallet)}
                />
                )})
            }
            
            function onDelete (deletedCard) {
                    setSavedPallets(prevPallets => prevPallets.filter((pallet) => pallet.id !== deletedCard.id));
                }
        
            
            return (
                <div>
                    <h1 className="page-heading">My Saved Palettes</h1>
                    <div className="saved-pallet-container" >
                    {renderSavePallets(savedPallets)}
                    </div>
                </div>
    )
}

export default SavedColorPallets;