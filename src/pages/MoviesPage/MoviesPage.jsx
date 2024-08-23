import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

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
        const response = await axios.get(
          "https://api.themoviedb.org/3/search/movie",
          // "https://api.themoviedb.org/3/search/movie?query=${query}",
          {
            params: {
              query: query,
            },
            headers: {
              Authorization:
                "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDY0NWQzMTNiZTViODY4NWIyOGFiNjcyY2I2ZmY4YyIsIm5iZiI6MTcyNDA3MTkzNy4xNjYyMjUsInN1YiI6IjY2YzMzYTU0YjE3YjliNTMxMTZlMzlhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TbYPKmdLqwZ1JEXU95t83-dCNEVFSUEAO_Wsy94NTVo",
            },
          }
        );
        setMovies(response.data.results);
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
