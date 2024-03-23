import "../components/SortControl.css";
import Arrow from "../assets/images/Arrow.png";
import React from "react";

export enum CurrentSelection {
    RELEASE_DATE = "RELEASE DATE",
    TITLE = "TITLE",
}

interface ISortControl {
    currentSelection: CurrentSelection,
    onSelect: () => void;
}

export default function SortControl({ currentSelection, onSelect }: ISortControl) {
    return (
        <div className="sortControlContainer">
            <span className="sortBy">SORT BY</span>
            <span className="currentSelection">{currentSelection || CurrentSelection.RELEASE_DATE}</span>
            <button onClick={onSelect} className="sortByButton ">
                   <img className="arrow" src={Arrow} alt="arrow"/>
            </button>
        </div>
    )
}