import React, { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { requestTrendingMovies } from "../../components/apiMovie";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await requestTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h1 className={css.title}>Trending Movies</h1>
        <p className={css.description}>
          Check out the most popular movies right now!
        </p>
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
