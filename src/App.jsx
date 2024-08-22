import { lazy, Suspense } from "react";
import {
  NavLink,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import clsx from "clsx";

import styles from "./App.module.css";

const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const Navigation = lazy(() => import("./components/Navigation/Navigation"));

// function App() {
//   return (
//     <div className={styles.app}>
//       <header>
//         <nav className={css.nav}>
//           <NavLink
//             className={({ isActive }) => clsx(css.link, isActive && css.active)}
//             to="/"
//           >
//             Home
//           </NavLink>
//           <NavLink
//             className={({ isActive }) => clsx(css.link, isActive && css.active)}
//             to="/posts"
//           >
//             Posts
//           </NavLink>
//           <NavLink
//             className={({ isActive }) => clsx(css.link, isActive && css.active)}
//             to="/context-example"
//           >
//             Context Movie
//           </NavLink>
//         </nav>
//       </header>
//       <main>
//         <Suspense fallback={<Loader />}>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/posts" element={<MoviesPage />} />
//             <Route path="/context-example" element={<ContextMoviePage />} />
//             <Route path="/posts/:postId" element={<MovieDetailsPage />}>
//               <Route path="comments" element={<MovieComments />} />
//               <Route path="reviews" element={<MovieReviews />} />
//             </Route>
//           </Routes>
//         </Suspense>
//       </main>
//       <footer>Footer content</footer>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
