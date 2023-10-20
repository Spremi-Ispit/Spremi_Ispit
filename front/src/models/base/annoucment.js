export const annoucment = ({
  id,
  title,
  text,
  files,
  likes,
  dislikes,
  date,
  postedBy,
  likeStatus,
}) => {
  return {
    id,
    title,
    text,
    files,
    likes,
    dislikes,
    date,
    postedBy,
    likeStatus,
  };
};

export default annoucment;
