import React, { useEffect, useState, useRef } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  Outlet,
  Link,
} from "react-router-dom";
import axios from "axios";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
// import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const locationRef = useRef(location.state?.from || "/");
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get("htpps://", {
          headers: {
            Authorization: "Acess token",
          },
        });
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching trending details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  const handleGoBack = () => {
    // if (location.state && location.state.from) {
    //   navigate(location.state.from);
    // } else {
    //   navigate("/movies");
    // }
    navigate(locationRef.current);
  };

  return (
    <div>
      <button onClick={handleGoBack} Go back></button>
      <h1>{movie.title}</h1>
      <img
        src={`${baseImageUrl}${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "300px" }}
      />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.average_votes}</p>
      <nav>
        <Link to="cast" state={{ from: locationRef.current }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: locationRef.current }}>
          Reviews
        </Link>
      </nav>
      <MovieCast />
      <MovieReviews />
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
