import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchForm from "../SearchForm";

describe("SearchForm component", () => {
  const onSearchMocked = jest.fn();
  const initialSearchQuery = "Initial query";

  it("should render correctly", () => {
    render(
      <SearchForm
        initialSearchQuery={initialSearchQuery}
        onSearch={onSearchMocked}
      />
    );
    expect(screen.getByRole("SearchFormComponent")).toBeTruthy();
  });
  it("should render initial value provided in props", () => {
    render(
      <SearchForm
        initialSearchQuery={initialSearchQuery}
        onSearch={onSearchMocked}
      />
    );
    expect(screen.getByDisplayValue(initialSearchQuery)).toBeInTheDocument();
  });
  it("should call onChange prop with proper value after typing to the input and click Search button", () => {
    const newQuery = "New Query";

    render(
      <SearchForm
        initialSearchQuery={initialSearchQuery}
        onSearch={onSearchMocked}
      />
    );
    fireEvent.change(screen.getByRole("SearchInput"), {
      target: { value: newQuery },
    });
    fireEvent.click(screen.getByRole("SearchButton"));
    expect(screen.getByDisplayValue(newQuery)).toBeInTheDocument();
    expect(onSearchMocked).toHaveBeenCalledWith(newQuery);
  });
  it("should call onChange prop with proper value after typing to the input and click Enter key", () => {
    const newQuery = "New Query";
    render(
      <SearchForm
        initialSearchQuery={initialSearchQuery}
        onSearch={onSearchMocked}
      />
    );
    const input = screen.getByRole("SearchInput");
    fireEvent.change(input, { target: { value: newQuery } });
    input.focus();
    userEvent.keyboard("{enter}");
    expect(screen.getByDisplayValue(newQuery)).toBeInTheDocument();
    expect(onSearchMocked).toHaveBeenCalledWith(newQuery);
  });
});
