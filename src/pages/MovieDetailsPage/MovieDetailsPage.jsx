import React, { useEffect, useState, useRef } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  Outlet,
  Link,
} from "react-router-dom";
import { requestMovieById } from "../../components/apiMovie";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const locationRef = useRef(location.state?.from || "/");
  const backLink = location.state?.from ?? "/movies";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await requestMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching trending details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  const handleGoBack = () => {
    navigate(backLink);
  };

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";
  const posterUrl = movieData.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
    : defaultImg;

  return (
    <div>
      <button onClick={handleGoBack} Go back></button>
      <h1>{movieData.title}</h1>
      <img src={`${posterUrl}`} alt={`${movieData.title} poster`} width={250} />
      <p>{movieData.overview}</p>
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
