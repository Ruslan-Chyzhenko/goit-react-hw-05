import { lazy, Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";

import css from "./App.module.css";
import Loader from "../Loader/Loader";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const ContextMoviePage = lazy(() =>
  import("../../pages/ContextMoviePage/ContextMoviePage")
);
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieComments = lazy(() => import("../MovieComments/MovieComments"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

function App() {
  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/posts"
          >
            Posts
          </NavLink>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/context-example"
          >
            Context Movie
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<MoviesPage />} />
            <Route path="/context-example" element={<ContextMoviePage />} />
            <Route path="/posts/:postId" element={<MovieDetailsPage />}>
              <Route path="comments" element={<MovieComments />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
      <footer>Footer content</footer>
    </div>
  );
}

export default App;
