import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieListPage from "./pages/MovieListPage";
import MovieDetails from "./components/MovieDetails";
import MovieListPageHeader from "./components/MovieListPageHeader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MovieListPage/>,
        children: [
            {
                path: '',
                element: <MovieListPageHeader />,
            },
            {
                path: '/:movieId',
                element: <MovieDetails/>
            },

        ]
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

reportWebVitals();
