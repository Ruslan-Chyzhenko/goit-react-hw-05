import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestMovieCastById } from "../../components/apiMovie";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieCast = async () => {
      try {
        const data = await requestMovieCastById(movieId);
        setCast(data.cast);
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  const defaultImg =
    "https://dummyimage.com/200x300/cdcdcd/000.jpg&text=No+photo";
  const baseImageUrl = "https://image.tmdb.org/t/p/w200";

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `${baseImageUrl}${actor.profile_path}`
                  : defaultImg
              }
              width={100}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
