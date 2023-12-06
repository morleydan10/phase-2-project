import React from "react";

function SavedPalletCard({ primary, secondary, tertiary, quarternary, backgorund, titleFont, bodyFont}) {
    return (
        <div>
            <h2 className="saved-pallet-heading">Name</h2>
            <div className="card-primary" style={{backgroundColor: {primary}}}></div>
            <div className="card-secondary" style={{backgroundColor: {secondary}}}></div>
            <div className="card-tertiary" style={{backgroundColor: {tertiary}}}></div>
            <div className="card-quarternary" style={{backgroundColor: {quarternary}}}></div>
        </div>
    )

}

export default SavedPalletCard;