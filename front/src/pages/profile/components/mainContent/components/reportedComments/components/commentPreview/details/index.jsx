import React from 'react';
import { Container, DetailsContainer, ControllsContainer } from './styles';
import LikeDislike from './components/likeDislike';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { viewPostRoute } from '../../../../../../../../../app/router/routes';

const Details = (props) => {
  const { likes, dislikes, postId } = props;
  const navigate = useNavigate();

  const handleShowPost = () => {
    navigate({
      pathname: viewPostRoute,
      search: `postId=${postId}`,
    });
  };

  return (
    <Container>
      <DetailsContainer>
        <LikeDislike likes={likes} dislikes={dislikes} />
        <ControllsContainer>
          <Button variant="outlined" onClick={handleShowPost}>
            Prikaži objavu
          </Button>
        </ControllsContainer>
      </DetailsContainer>
    </Container>
  );
};

export default Details;
