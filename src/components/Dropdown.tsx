import React from "react";
import "../components/DropDown.css"
import { useSearchParams } from "react-router-dom";

const sortingTypes = ['RELEASE DATE', 'TITLE'];
export const sortingSearchMap = {
    'RELEASE DATE': 'release_date',
    'TITLE': 'title',
};


export default function Dropdown() {
    const [_, setSearchParams] = useSearchParams();

    function handleDropdownClick(type) {
        setSearchParams((prev) => {
            prev.set("sortBy", sortingSearchMap[type]);
            return prev;
        });
    }

    return (
        <div className="dropDownContainer">
            {sortingTypes.map(type => <button onClick={() => handleDropdownClick(type)}
                                              className="dropDownButton">{type}</button>)}
        </div>
    )
}