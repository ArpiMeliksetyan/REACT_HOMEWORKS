import "./DeleteMovieForm.css"

export default function DeleteMovieForm({ handleConfirmClick }) {

    return (
        <>
            <div>
                <h3 className="deleteConfirmation">Are you sure you want to delete this movie?</h3>
            </div>
            <div className='deleteButtonContainer'>
                <button className="deleteButton" onClick={handleConfirmClick}>CONFIRM</button>
            </div>
        </>
    )
}