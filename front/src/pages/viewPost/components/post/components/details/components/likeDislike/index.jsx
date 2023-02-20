import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Likes, StyledButton, LikeIcon, DislikeIcon } from './styles';
import { postLikeDislikeStatus } from '../../../../../../../../utils/enums';
import {
  addPostDislike,
  addPostLike,
  removePostDislike,
  removePostLike,
} from '../../../../../../reduxThunk/actions';
import { loginRoute } from '../../../../../../../../app/router/routes';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export const LikeDislike = ({
  postId,
  likes: propLikes,
  dislikes: propDislikes,
  likeStatus,
}) => {
  const [errorLikeDislike, setErrorLikeDislike] = useState(null);
  const [loadingLikeDislike, setLoadingLikeDislike] = useState(false);
  const [likeDislikeStatus, setLikeDislikeStatus] = useState(likeStatus);
  const [likes, setLikes] = useState(propLikes);
  const [dislikes, setDislikes] = useState(propDislikes);
  const token = useSelector((state) => state.app.token);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectToLogin = () => {
    navigate(
      {
        pathname: loginRoute,
      },
      {
        state: {
          from: location.pathname,
          searchParams: `${searchParams.toString()}`,
        },
      }
    );
  };

  const handleLike = () => {
    if (!token) {
      redirectToLogin();
    } else if (likeDislikeStatus === postLikeDislikeStatus.none) {
      dispatch(
        addPostLike(
          postId,
          setErrorLikeDislike,
          setLoadingLikeDislike,
          setLikeDislikeStatus,
          setLikes
        )
      );
    } else if (likeDislikeStatus === postLikeDislikeStatus.liked) {
      dispatch(
        removePostLike(
          postId,
          setErrorLikeDislike,
          setLoadingLikeDislike,
          setLikeDislikeStatus,
          setLikes
        )
      );
    } else if (likeDislikeStatus === postLikeDislikeStatus.disliked) {
      dispatch(
        removePostDislike(
          postId,
          setErrorLikeDislike,
          setLoadingLikeDislike,
          setLikeDislikeStatus,
          setDislikes,
          () =>
            dispatch(
              addPostLike(
                postId,
                setErrorLikeDislike,
                setLoadingLikeDislike,
                setLikeDislikeStatus,
                setLikes
              )
            )
        )
      );
    }
  };

  const handleDislike = () => {
    if (!token) {
      redirectToLogin();
    } else if (likeDislikeStatus === postLikeDislikeStatus.none) {
      dispatch(
        addPostDislike(
          postId,
          setErrorLikeDislike,
          setLoadingLikeDislike,
          setLikeDislikeStatus,
          setDislikes
        )
      );
    } else if (likeDislikeStatus === postLikeDislikeStatus.disliked) {
      dispatch(
        removePostDislike(
          postId,
          setErrorLikeDislike,
          setLoadingLikeDislike,
          setLikeDislikeStatus,
          setDislikes
        )
      );
    } else if (likeDislikeStatus === postLikeDislikeStatus.liked) {
      dispatch(
        removePostLike(
          postId,
          setErrorLikeDislike,
          setLoadingLikeDislike,
          setLikeDislikeStatus,
          setLikes,
          () =>
            dispatch(
              addPostDislike(
                postId,
                setErrorLikeDislike,
                setLoadingLikeDislike,
                setLikeDislikeStatus,
                setDislikes
              )
            )
        )
      );
    }
  };

  const viewToRender = (
    <>
      <StyledButton onClick={handleLike} disabled={loadingLikeDislike}>
        <LikeIcon like_dislike_status={likeDislikeStatus} />
        <Likes color="textSecondary">{likes}</Likes>
      </StyledButton>

      <StyledButton
        color="primary"
        onClick={handleDislike}
        disabled={loadingLikeDislike}
      >
        <DislikeIcon like_dislike_status={likeDislikeStatus} />
        <Likes color="textSecondary">{dislikes}</Likes>
      </StyledButton>
      {errorLikeDislike ? <p>Unable to like/unlike. Error ocured.</p> : null}
    </>
  );

  return viewToRender;
};

export default LikeDislike;
