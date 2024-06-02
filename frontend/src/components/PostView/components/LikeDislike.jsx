import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { postLikeDislikeStatus } from '../../../utils/enums';
import { useNavigate } from 'react-router-dom';
import { loginRoute } from '../../../router/routes';
import { selectToken } from '../../../redux/app/selectors';
import { useFetch } from '../../../api/useFetch';

const LikeIcon = styled(ThumbUpOffAltIcon)`
  color: ${({ like_dislike_status }) =>
    like_dislike_status === postLikeDislikeStatus.liked ? 'green' : ''};
`;
const DislikeIcon = styled(ThumbDownOffAltIcon)`
  color: ${({ like_dislike_status }) =>
    like_dislike_status === postLikeDislikeStatus.disliked ? 'red' : ''};
`;

const Likes = styled(Typography)`
  && {
    margin: 0px 0px -3px 5px;
  }
`;

const StyledButton = styled(Button)`
  && {
    color: rgb(0 0 0 / 87%);
  }
`;

const LikeDislikeDiv = styled.div``;

export const LikeDislike = ({
  postId,
  likes: propLikes,
  dislikes: propDislikes,
  likeStatus,
  addPostLike: addPostLikeAction,
  removePostLike: removePostLikeAction,
  addPostDislike: addPostDislikeAction,
  removePostDislike: removePostDislikeAction,
}) => {
  const [likeDislikeStatus, setLikeDislikeStatus] = useState(likeStatus);
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const [likes, setLikes] = useState(propLikes);
  const [dislikes, setDislikes] = useState(propDislikes);
  const addPostLike = useFetch(addPostLikeAction);
  const removePostLike = useFetch(removePostLikeAction);
  const addPostDislike = useFetch(addPostDislikeAction);
  const removePostDislike = useFetch(removePostDislikeAction);

  const handleLike = async () => {
    if (!token) {
      navigate(loginRoute);
      return;
    }

    if (likeDislikeStatus === postLikeDislikeStatus.none) {
      await addPostLike.fetch(postId);
      setLikes((prev) => prev + 1);
      setLikeDislikeStatus(postLikeDislikeStatus.liked);
      return;
    }

    if (likeDislikeStatus === postLikeDislikeStatus.liked) {
      await removePostLike.fetch(postId);
      setLikes((prev) => prev - 1);
      setLikeDislikeStatus(postLikeDislikeStatus.none);
      return;
    }

    if (likeDislikeStatus === postLikeDislikeStatus.disliked) {
      await removePostDislike.fetch(postId);
      setDislikes((prev) => prev - 1);
      await addPostLike.fetch(postId);
      setLikes((prev) => prev + 1);
      setLikeDislikeStatus(postLikeDislikeStatus.liked);
      return;
    }
  };

  const handleDislike = async () => {
    if (!token) {
      navigate(loginRoute);
      return;
    }

    if (likeDislikeStatus === postLikeDislikeStatus.none) {
      await addPostDislike.fetch(postId);
      setDislikes((prev) => prev + 1);
      setLikeDislikeStatus(postLikeDislikeStatus.disliked);
      return;
    }

    if (likeDislikeStatus === postLikeDislikeStatus.disliked) {
      await removePostDislike.fetch(postId);
      setDislikes((prev) => prev - 1);
      setLikeDislikeStatus(postLikeDislikeStatus.none);
      return;
    }

    if (likeDislikeStatus === postLikeDislikeStatus.liked) {
      await removePostLike.fetch(postId);
      setLikes((prev) => prev - 1);
      await addPostDislike.fetch(postId);
      setDislikes((prev) => prev + 1);
      setLikeDislikeStatus(postLikeDislikeStatus.disliked);
      return;
    }
  };

  const error = () => {
    if (
      addPostLike.error ||
      removePostLike.error ||
      addPostDislike.error ||
      removePostDislike.error
    ) {
      return <p>Unable to like/unlike. Error ocured.</p>;
    }
    return null;
  };

  return (
    <LikeDislikeDiv>
      <StyledButton
        onClick={handleLike}
        disabled={
          addPostLike.loading ||
          removePostLike.loading ||
          addPostDislike.loading ||
          removePostDislike.loading
        }
      >
        <LikeIcon like_dislike_status={likeDislikeStatus} />
        <Likes color="textSecondary">{likes}</Likes>
      </StyledButton>

      <StyledButton
        color="primary"
        onClick={handleDislike}
        disabled={
          addPostLike.loading ||
          removePostLike.loading ||
          addPostDislike.loading ||
          removePostDislike.loading
        }
      >
        <DislikeIcon like_dislike_status={likeDislikeStatus} />
        <Likes color="textSecondary">{dislikes}</Likes>
      </StyledButton>
      {error()}
    </LikeDislikeDiv>
  );
};

export default LikeDislike;
