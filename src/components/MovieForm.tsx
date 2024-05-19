import React, { useEffect } from "react";
import "./MovieForm.css";
import { useForm } from "react-hook-form";
import { addMovie, editMovie } from "../services/fetchData";
import { IMovie } from "./Movies";
import { mapUIMovieToBackendMovie } from "../helpers/mapper";
import { useParams } from "next/navigation";

interface IMovieForm {
    isAddMovie: boolean;
    movie?: any;
    setIsAddedMovie?: (value: boolean) => void;
    setIsEdited?: (value: boolean) => void;
    handleOnClose: any;
}


export default function MovieForm({ isAddMovie, movie, setIsAddedMovie, setIsEdited, handleOnClose }: IMovieForm) {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const params = useParams();

    useEffect(() => {
        if (movie) {
            setValue("movieName", movie.movieName);
            setValue("duration", movie.duration);
            setValue("description", movie.description);
            setValue("imgUrl", movie.imgUrl);
            setValue("rating", movie.rating)
            setValue("releaseYear", movie.releaseYear)
        }
    }, [movie, setValue])
    const onSubmit = async (data: IMovie) => {
        const backendMovie = mapUIMovieToBackendMovie(data);
        if (isAddMovie) {
            try {
                await addMovie(backendMovie);
                setIsAddedMovie?.(true);
            } catch (err) {
                const message = `Something went wrong during movie adding. Please try again. Error: ${err?.message}`;
                throw new Error(message);
            }

        } else {
            try {
                const backendMovie = mapUIMovieToBackendMovie(data);
                backendMovie.id = Number(params?.movieId);
                await editMovie(backendMovie);
                setIsEdited?.(false);
            } catch (err) {
                const message = `Something went wrong during movie editing. Please try again. Error: ${err?.message}`;
                throw new Error(message);
            }

        }
        handleOnClose();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formColumn">
                <div id="user-input">

                    <label>TITLE</label>
                    <input
                        type="text"
                        {...register("movieName", { required: true })}
                    />
                    {errors.movieName && <p style={{ color: 'white' }}>Title is required</p>}

                    <label>MOVIE URL</label>
                    <input
                        type="text"
                        placeholder="https://"
                        {...register("imgUrl", {
                            required: true,
                            pattern: /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/,
                        })}
                    />
                    {errors.imgUrl && <p style={{ color: 'white' }}>Please check movie URL</p>}

                    <label>GENRE</label>
                    <select
                        name="Select Genre"
                        multiple
                        {...register("relevantGenres", { required: true })}
                    >
                        {!isAddMovie ? movie && movie.relevantGenres?.map((genre) =>
                            <option value={genre}>{genre}</option>) :
                            <>
                                <option value="Crime">Crime</option>
                                <option value="Documentary">Documentary</option>
                                <option value="Horror">Horror</option>
                                <option value="Comedy">Comedy</option>
                            </>
                        }

                    </select>

                </div>
                <div id="user-input-right">

                    <label>RELEASE DATE</label>
                    <input
                        type="date"
                        {...register("releaseYear", { required: true })}
                    />

                    <label>RATING</label>
                    <input
                        type="text"
                        placeholder="7.8"
                        {...register("rating", {
                            required: true,
                            pattern: /^(?:0|[1-9]\d*)(?:\.\d)?$/
                        })}
                    />
                    {errors.rating && <p style={{ color: 'white' }}>Please check Rating number</p>}

                    <label>RUNTIME</label>
                    <input
                        type="number"
                        placeholder="minutes"
                        {...register("duration", { required: true })}
                    />

                </div>
            </div>
            <div id="user-input">

                <label>OVERVIEW</label>
                <textarea className="inputMovieDesc"
                          placeholder="Movie Description"
                          {...register("description", {
                              required: true,
                              maxLength: 3000,
                          })}
                />
                {errors.description &&
                    <p style={{ color: 'white' }}>Overview should contain not more than 3000 symbols</p>}

            </div>
            <div className="movieFormButton">
                <button type="reset" className="resetButton">RESET</button>
                <button type="submit" className="submitButton">SUBMIT</button>
            </div>
        </form>
    )
}