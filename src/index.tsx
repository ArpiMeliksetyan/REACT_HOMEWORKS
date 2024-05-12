// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MovieListPage from "./pages/MovieListPage";
// import MovieDetails from "./components/MovieDetails";
// import MovieListPageHeader from "./components/MovieListPageHeader";
// import AddMovieForm from "./components/AddMovieForm";
// import ContextMenuModal from "./components/ContextMenuModal";
// import EditMovieForm from "./components/EditMovieForm";
//
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <MovieListPage/>,
//         children: [
//             {
//                 path: '',
//                 element: <MovieListPageHeader/>,
//                 children: [
//                     {
//                         path: '/new',
//                         element: <AddMovieForm/>
//                     },
//                     {
//                         path: '/:movieId/edit',
//                         element: <EditMovieForm/>
//                     }
//                 ],
//             },
//             {
//                 path: '/:movieId',
//                 element: <MovieDetails/>,
//             },
//
//         ]
//     },
// ]);
//
// const root = ReactDOM.createRoot(
//     document.getElementById("root") as HTMLElement
// );
// root.render(
//     <React.StrictMode>
//         <RouterProvider router={router}/>
//     </React.StrictMode>
// );
//
// reportWebVitals();

//
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MovieListPage from "./components/MovieListPage";
// import MovieDetails from "./components/MovieDetails";
// import MovieListPageHeader from "./components/MovieListPageHeader";
// import AddMovieForm from "./components/AddMovieForm";
// import EditMovieForm from "./components/EditMovieForm";
//
// const root = ReactDOM.createRoot(
//     document.getElementById("root") as HTMLElement
// );
// root.render(
//     <React.StrictMode>
//         <Router>
//             <Routes>
//                 <Route
//                     path="/"
//                     element={
//                         <MovieListPage>
//                             <Route
//                                 path=""
//                                 element={<MovieListPageHeader />}
//                             />
//                             <Route path="new" element={<AddMovieForm />} />
//                             <Route
//                                 path=":movieId/edit"
//                                 element={<EditMovieForm />}
//                             />
//                         </MovieListPage>
//                     }
//                 />
//                 <Route path=":movieId" element={<MovieDetails />} />
//             </Routes>
//         </Router>
//     </React.StrictMode>
// );
//
// reportWebVitals();
