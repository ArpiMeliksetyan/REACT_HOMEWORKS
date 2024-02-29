import React, { useState } from "react";
import "./SearchForm.css";

interface ISearchForm {
  initialSearchQuery: string;
  onSearch: (value: string) => void;
}

export default function SearchForm({
  initialSearchQuery,
  onSearch,
}: ISearchForm) {
  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchQuery(event.target.value);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>): void {
    if (event.key === "Enter") {
      onSearch(searchQuery);
    }
  }

  function handleSearchButtonClick(): void {
    onSearch(searchQuery);
  }

  return (
    <div>
      <input
        className="searchInput searchInputText"
        type="text"
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className="searchButton searchButtonText"
        onClick={handleSearchButtonClick}
      >
        SEARCH
      </button>
    </div>
  );
}
