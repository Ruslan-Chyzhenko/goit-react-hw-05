import axios from "axios";

// API key
const apiKey = "ad645d313be5b8685b28ab672cb6ff8c";

// Basis axios
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDY0NWQzMTNiZTViODY4NWIyOGFiNjcyY2I2ZmY4YyIsIm5iZiI6MTcyNDA3MTkzNy4xNjYyMjUsInN1YiI6IjY2YzMzYTU0YjE3YjliNTMxMTZlMzlhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TbYPKmdLqwZ1JEXU95t83-dCNEVFSUEAO_Wsy94NTVo",
  },
});

// TrendingMovies
export const requestTrendingMovies = async () => {
  const response = await instance.get("/trending/movie/day", {
    params: {
      language: "en-US",
      api_key: apiKey,
    },
  });
  return response.data;
};

// MovieById
export const requestMovieById = async (movieId) => {
  const response = await instance.get(`/movie/${movieId}`, {
    params: {
      language: "en-US",
      api_key: apiKey,
    },
  });
  return response.data;
};

// SearchQuery
export const requestMovieBySearchQuery = async (query) => {
  const response = await instance.get("/search/movie", {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
      api_key: apiKey,
    },
  });
  return response.data;
};

// CastById
export const requestMovieCastById = async (movieId) => {
  const response = await instance.get(`/movie/${movieId}/credits`, {
    params: {
      language: "en-US",
      api_key: apiKey,
    },
  });
  return response.data;
};

// ReviewsById
export const requestMovieReviewsById = async (movieId) => {
  const response = await instance.get(`/movie/${movieId}/reviews`, {
    params: {
      language: "en-US",
      api_key: apiKey,
    },
  });
  return response.data;
};
