import "./MovieForm.css";


export default function MovieForm({ movie, handleSubmit}) {
    return (
        <form>
            <div className="formColumn">
                <div id="user-input">
                    <label>TITLE</label>
                    <input type="text" value={ movie && movie.movieName}/>

                    <label>MOVIE URL</label>
                    <input
                        type="text"
                        placeholder="https://"
                    />
                    <label>GENRE</label>
                    <select name="Select Genre">
                        <option value="0">Crime</option>
                        <option value="1">Documuentary</option>
                        <option value="2">Horror</option>
                        <option value="2">Comedy</option>
                    </select>

                </div>
                <div id="user-input-right">
                    <label>RELEASE DATE</label>
                    <input  type="date" />

                    <label>RATING</label>
                    <input
                        type="number"
                        placeholder="7.8"
                        value={movie && movie.rating}
                    />
                    <label>RUNTIME</label>
                    <input type="text" placeholder="minutes" value={movie && movie.duration}/>
                </div>
            </div>
            <div id="user-input">
                <label>OVERVIEW</label>
                <textarea className="inputMovieDesc"
                       type="text"
                       value={movie && movie.description}
                       placeholder="Movie Description"
                />
            </div>
            <div className="movieFormButton">
                <button  className="resetButton">RESET</button>
                <button onClick={handleSubmit} className="submitButton">SUBMIT</button>
            </div>
        </form>
    )
}