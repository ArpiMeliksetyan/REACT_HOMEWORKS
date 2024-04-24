import "../components/SortControl.css";
import Arrow from "../assets/images/Arrow.png";
import React from "react";
import { useSearchParams } from "react-router-dom";

export enum CurrentSelection {
    RELEASE_DATE = "RELEASE DATE",
    TITLE = "TITLE",
}

interface ISortControl {
    onSelect: () => void;
}

export default function SortControl({onSelect }: ISortControl) {
    const [searchParams] = useSearchParams();

    return (
        <div className="sortControlContainer">
            <span className="sortBy">SORT BY</span>
            <span className="currentSelection">{CurrentSelection[searchParams.get('sortBy')?.toUpperCase()] || CurrentSelection.RELEASE_DATE}</span>
            <button onClick={onSelect} className="sortByButton ">
                   <img className="arrow" src={Arrow} alt="arrow"/>
            </button>
        </div>
    )
}