import React from "react";
import { sortingTypes } from "../App";
import "../components/DropDown.css"
import { CurrentSelection } from "./SortControl";

interface IDropDown {
    setCurrentSelection: (value: (((prevState: CurrentSelection) => CurrentSelection) | CurrentSelection)) => void
}

export default function Dropdown({ setCurrentSelection }: IDropDown) {
    return (
        <div className="dropDownContainer">
            {sortingTypes.map(type => <button onClick={() => setCurrentSelection(type as CurrentSelection)}
                                              className="dropDownButton">{type}</button>)}
        </div>
    )
}