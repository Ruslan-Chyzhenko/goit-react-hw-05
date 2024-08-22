import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const baseImageUrl = "https://image.tmdb.org/t/p/w200";
  const defaultImg =
    "https://dummyimage.com/200x300/cdcdcd/000.jpg&text=No+image";

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieCast = async () => {
      try {
        const response = await axios.get("htpps://", {
          headers: {
            Authorization: "Acess token",
          },
        });
        setCast(response.data.cast);
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.cast_id}>
            <img
              src={
                actor.profile_path
                  ? `${baseImageUrl}${actor.profile_path}`
                  : defaultImg
              }
              width={100}
              alt={actor.name}
            />
            {actor.character}
            <p>
              {actor.name} as {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
