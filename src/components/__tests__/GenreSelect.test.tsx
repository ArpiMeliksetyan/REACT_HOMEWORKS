import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import GenreSelect from "../GenreSelect";

describe("GenreSelect component", () => {
    const genreNames = ["Drama", "Melodrama", "Fantasy", "Comedy", "Historical"];
    const onSelectMocked = jest.fn();

    it("should render correctly", () => {
        render(
            <GenreSelect
                genreNames={genreNames}
                selectedGenreName={genreNames[0]}
                onSelect={onSelectMocked}
            />
        );
        expect(screen.getByRole("GenreSelectComponent")).toBeTruthy();
    });
    it("should render all genres  provided in props", () => {
        render(
            <GenreSelect
                genreNames={genreNames}
                selectedGenreName={genreNames[0]}
                onSelect={onSelectMocked}
            />
        );
        genreNames.map((genreName) => {
            expect(screen.getByText(genreName)).toBeInTheDocument();
        });
    });
    it("should highligh selected prop passed in props", async () => {
        render(
            <GenreSelect
                genreNames={genreNames}
                selectedGenreName={genreNames[0]}
                onSelect={onSelectMocked}
            />
        );
        expect(screen.getByRole("0genreButton")).toHaveClass("genreButton selected");
    });
    it('should call onChange callback and passes correct genre in arguments after clicking on genre button', () => {
        render(
            <GenreSelect
                genreNames={genreNames}
                selectedGenreName={genreNames[0]}
                onSelect={onSelectMocked}
            />
        );
        fireEvent.click(screen.getByRole("0genreButton"))
        expect(onSelectMocked).toBeCalledWith(genreNames[0]);
    });
});
