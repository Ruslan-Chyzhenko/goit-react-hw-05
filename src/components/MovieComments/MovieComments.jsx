import { useParams } from "react-router-dom";

const MovieComments = () => {
  const { postId } = useParams();
  return <div>MovieComments. ID: {postId}.</div>;
};

export default MovieComments;
