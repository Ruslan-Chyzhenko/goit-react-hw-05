import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { requestMovieBySearchQuery } from "../../components/apiMovie";
import MovieList from "../../components/MovieList/MovieList";
import SearchMoviesForm from "../../components/SearchMoviesForm/SearchMoviesForm";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) return;

    const fetchMoviesPage = async () => {
      try {
        const data = await requestMovieBySearchQuery(query);
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMoviesPage();
  }, [query]);

  const handleSearch = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <div>
      <SearchMoviesForm onSearch={handleSearch} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
