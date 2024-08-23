import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          // "https://api.themoviedb.org/3/movie/550?api_key=ad645d313be5b8685b28ab672cb6ff8c",
          "https://api.themoviedb.org/3/trending/movie/day",
          {
            headers: {
              Authorization:
                "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDY0NWQzMTNiZTViODY4NWIyOGFiNjcyY2I2ZmY4YyIsIm5iZiI6MTcyNDA3MTkzNy4xNjYyMjUsInN1YiI6IjY2YzMzYTU0YjE3YjliNTMxMTZlMzlhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TbYPKmdLqwZ1JEXU95t83-dCNEVFSUEAO_Wsy94NTVo",
            },
          }
        );
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
