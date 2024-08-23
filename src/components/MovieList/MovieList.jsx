import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  const baseImageUrl = "https://image.tmdb.org/t/p/w300";

  return (
    <>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={css.item}
            >
              <img
                className={css.poster}
                src={`${baseImageUrl}${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "100px" }}
              />
              <p className={css.title}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
