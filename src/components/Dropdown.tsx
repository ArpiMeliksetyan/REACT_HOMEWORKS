import React from "react";
import "../components/DropDown.css"
import { CurrentSelection } from "./SortControl";

interface IDropDown {
    setCurrentSelection: (newValue: CurrentSelection) => void
}

const sortingTypes = ['RELEASE DATE', 'TITLE'];


export default function Dropdown({ setCurrentSelection }: IDropDown) {
    function handleDropdownClick(type) {
        setCurrentSelection(type);
    }

    return (
        <div className="dropDownContainer">
            {sortingTypes.map(type => <button onClick={() => handleDropdownClick(type)}
                                              className="dropDownButton">{type}</button>)}
        </div>
    )
}