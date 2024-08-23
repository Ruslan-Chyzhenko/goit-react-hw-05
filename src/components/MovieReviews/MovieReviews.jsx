import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieReviews = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/${movieId}/reviews",
          {
            headers: {
              Authorization:
                "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDY0NWQzMTNiZTViODY4NWIyOGFiNjcyY2I2ZmY4YyIsIm5iZiI6MTcyNDA3MTkzNy4xNjYyMjUsInN1YiI6IjY2YzMzYTU0YjE3YjliNTMxMTZlMzlhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TbYPKmdLqwZ1JEXU95t83-dCNEVFSUEAO_Wsy94NTVo",
            },
          }
        );
        setReviews(response.data.results);
      } catch (error) {
        console.error("Error fetching trending reviews:", error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id}>
              <p>
                <strong>{review.author}</strong>:{review.content}
              </p>
            </li>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
