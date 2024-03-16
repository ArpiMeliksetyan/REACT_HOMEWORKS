import {useState} from "react";
import "./SearchForm.css"

export default function SearchForm({initialSearchQuery, onSearch}) {
    const [searchQuery, setSearchQuery] = useState(initialSearchQuery)

    function handleChange(event) {
        setSearchQuery(event.target.value)
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            onSearch(searchQuery);
        }
    }

    return (
        <div>
            <input className="searchInput searchInputText"
                   type="text"
                   value={searchQuery}
                   onChange={handleChange}
                   onKeyDown={handleKeyDown}
            />
            <button className="searchButton searchButtonText" onClick={() => onSearch(searchQuery)}>
                SEARCH
            </button>
        </div>)
}
