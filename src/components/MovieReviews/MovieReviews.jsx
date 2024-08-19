import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { postId } = useParams();
  return <div>MovieReviews. ID: {postId}</div>;
};

export default MovieReviews;
