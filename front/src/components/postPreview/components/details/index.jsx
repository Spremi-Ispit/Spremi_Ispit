import React from 'react';
import {
  Container,
  Likes,
  ButtonText,
  DetailsContainer,
  LikesWrapper,
  LikeIcon,
  DislikeIcon,
  StyledDivider,
  StyledButton,
} from './styles';

const Details = (props) => {
  const { likes, dislikes } = props;

  return (
    <>
      <StyledDivider />
      <Container>
        <DetailsContainer>
          <LikesWrapper>
            <LikeIcon />
            <Likes color="textSecondary"> {likes} </Likes>
          </LikesWrapper>
          <LikesWrapper>
            <DislikeIcon />
            <Likes color="textSecondary"> {dislikes} </Likes>
          </LikesWrapper>
        </DetailsContainer>
        <StyledButton size="small" variant="outlined">
          <ButtonText variant="button" color="inherit">
            Prikaži
          </ButtonText>
        </StyledButton>
      </Container>
    </>
  );
};

export default Details;
