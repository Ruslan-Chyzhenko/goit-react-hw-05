import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get("htpps://", {
          headers: {
            Authorization: "Acess token",
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      {/* <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul> */}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
