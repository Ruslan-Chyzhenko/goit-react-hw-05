import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestMovieReviewsById } from "../../components/apiMovie";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const data = await requestMovieReviewsById(movieId);
        setReviews(data.results);
      } catch (error) {
        console.error("Error fetching trending reviews:", error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  // if (reviews.length === 0) {
  //   return <p>No reviews available for this movie.</p>;
  // }

  return (
    <div className={css.reviewsContainer}>
      <h2>Reviews</h2>
      <ul>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li className={css.review} key={review.id}>
              <p className={css.reviewAuthor}>
                <strong className={css.reviewContent}>{review.author}</strong>:
                {review.content}
              </p>
            </li>
          ))
        ) : (
          <p className={css.noReviews}>No reviews available.</p>
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
