import React from 'react';
import { Likes, StyledButton, LikeIcon, DislikeIcon } from './styles';

export const LikeDislike = ({ likes, dislikes }) => {
  const viewToRender = (
    <>
      <StyledButton disabled>
        <LikeIcon />
        <Likes color="textSecondary">{likes}</Likes>
      </StyledButton>
      <StyledButton color="primary" disabled>
        <DislikeIcon />
        <Likes color="textSecondary">{dislikes}</Likes>
      </StyledButton>
    </>
  );

  return viewToRender;
};

export default LikeDislike;
