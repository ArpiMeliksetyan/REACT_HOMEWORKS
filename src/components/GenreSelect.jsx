import "./GenreSelect.css"

export default function GenreSelect({genreNames, selectedGenreName, onSelect}) {
    return (
        <div>
            {genreNames.map((genreName, index) =>
                <li key={index} className="genreList">
                    <button
                        onClick={()=> onSelect(selectedGenreName)}
                        className={selectedGenreName === genreName ? "genreButton selected" : "genreButton"}>
                        {genreName}
                    </button>
                </li>)}
        </div>
    )
}
