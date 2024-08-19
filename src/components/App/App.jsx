import { lazy, Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";

import css from "./App.module.css";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const ContextExamplePage = lazy(() => import("./pages/ContextExamplePage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const PostComments = lazy(() =>
  import("./components/MovieComments/MovieComments")
);
const PostReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

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
            Context Example
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<MoviePage />} />
            <Route path="/context-example" element={<ContextExamplePage />} />
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
