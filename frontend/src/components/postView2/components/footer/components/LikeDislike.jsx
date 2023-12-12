import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { postLikeDislikeStatus } from '../../../../../utils/enums';
import { useNavigate } from 'react-router-dom';
import { loginRoute } from '../../../../../router/routes';
import { selectToken } from '../../../../../redux/app/selectors';
import useActions from '../../../../../pages/viewPost/useActions';

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

export const LikeDislike = ({
  postId,
  likes: propLikes,
  dislikes: propDislikes,
  likeStatus,
}) => {
  const [likeDislikeStatus, setLikeDislikeStatus] = useState(likeStatus);
  const [likes, setLikes] = useState(propLikes);
  const [dislikes, setDislikes] = useState(propDislikes);
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const { addPostLike, removePostLike, addPostDislike, removePostDislike } =
    useActions();

  const {
    loaded: loadedAddPostLike,
    loading: loadingAddPostLike,
    response: responseAddPostLike,
    error: errorAddPostLike,
    action: actionAddPostLike,
  } = addPostLike;

  const {
    loaded: loadedRemovePostLike,
    loading: loadingRemovePostLike,
    response: responseRemovePostLike,
    error: errorRemovePostLike,
    action: actionRemovePostLike,
  } = removePostLike;

  const {
    loaded: loadedAddPostDislike,
    loading: loadingAddPostDislike,
    response: responseAddPostDislike,
    error: errorAddPostDislike,
    action: actionAddPostDislike,
  } = addPostDislike;

  const {
    loaded: loadedRemovePostDislike,
    loading: loadingRemovePostDislike,
    response: responseRemovePostDislike,
    error: errorRemovePostDislike,
    action: actionRemovePostDislike,
  } = removePostDislike;

  //---------------Add Like--------------

  const addPostLikeAction = () => {
    actionAddPostLike(postId);
  };

  useEffect(() => {
    if (loadedAddPostLike) {
      setLikeDislikeStatus(responseAddPostLike);
      setLikes((prev) => Number(prev) + 1);
    }
  }, [loadedAddPostLike]);

  //---------------Remove Like--------------

  const removePostLikeAction = (addPostDislikeAction) => {
    actionRemovePostLike(postId);

    if (addPostDislikeAction) {
      addPostDislikeAction();
    }
  };

  useEffect(() => {
    if (loadedRemovePostLike) {
      setLikeDislikeStatus(responseRemovePostLike);
      setLikes((prev) => Number(prev) - 1);
    }
  }, [loadedRemovePostLike]);

  //---------------Add Disike--------------

  const addPostDislikeAction = () => {
    actionAddPostDislike(postId);
  };

  useEffect(() => {
    if (loadedAddPostDislike) {
      setLikeDislikeStatus(responseAddPostDislike);
      setDislikes((prev) => Number(prev) + 1);
    }
  }, [loadedAddPostDislike]);

  //---------------Remove Disike--------------

  const removePostDislikeAction = async (addPostLikeAction) => {
    await actionRemovePostDislike(postId);

    if (addPostLikeAction) {
      addPostLikeAction();
    }
  };

  useEffect(() => {
    if (loadedRemovePostDislike) {
      setLikeDislikeStatus(responseRemovePostDislike);
      setDislikes((prev) => Number(prev) - 1);
    }
  }, [loadedRemovePostDislike]);

  //---------------Handle Like and Dislike Actions--------------

  const handleLike = () => {
    if (!token) {
      navigate(loginRoute);
    } else if (likeDislikeStatus === postLikeDislikeStatus.none) {
      addPostLikeAction();
    } else if (likeDislikeStatus === postLikeDislikeStatus.liked) {
      removePostLikeAction();
    } else if (likeDislikeStatus === postLikeDislikeStatus.disliked) {
      removePostDislikeAction(addPostLikeAction);
    }
  };

  const handleDislike = () => {
    if (!token) {
      navigate(loginRoute);
    } else if (likeDislikeStatus === postLikeDislikeStatus.none) {
      addPostDislikeAction();
    } else if (likeDislikeStatus === postLikeDislikeStatus.disliked) {
      removePostDislikeAction();
    } else if (likeDislikeStatus === postLikeDislikeStatus.liked) {
      removePostLikeAction(addPostDislikeAction);
    }
  };

  const error = () => {
    if (
      errorAddPostLike ||
      errorRemovePostLike ||
      errorAddPostDislike ||
      errorRemovePostDislike
    ) {
      return <p>Unable to like/unlike. Error ocured.</p>;
    }
    return null;
  };

  const viewToRender = (
    <>
      <StyledButton
        onClick={handleLike}
        disabled={
          loadingAddPostLike ||
          loadingRemovePostLike ||
          loadingAddPostDislike ||
          loadingRemovePostDislike
        }
      >
        <LikeIcon like_dislike_status={likeDislikeStatus} />
        <Likes color="textSecondary">{likes}</Likes>
      </StyledButton>

      <StyledButton
        color="primary"
        onClick={handleDislike}
        disabled={
          loadingAddPostLike ||
          loadingRemovePostLike ||
          loadingAddPostDislike ||
          loadingRemovePostDislike
        }
      >
        <DislikeIcon like_dislike_status={likeDislikeStatus} />
        <Likes color="textSecondary">{dislikes}</Likes>
      </StyledButton>
      {error()}
    </>
  );

  return viewToRender;
};

export default LikeDislike;
