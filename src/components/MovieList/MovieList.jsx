import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  const baseImageUrl = "https://image.tmdb.org/t/p/w300";

  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={`${baseImageUrl}${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "100px" }}
              />
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
