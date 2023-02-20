import React from 'react';
import {
  Container,
  DetailsContainer,
  ControllsContainer,
  StyledDivider,
} from './styles';

import Report from './components/report';
import Delete from './components/delete';
import LikeDislike from './components/likeDislike';
import { useSelector } from 'react-redux';
import { userRole } from '../../../../../../utils/enums';

const Details = (props) => {
  const state = useSelector((state) => state.app);
  const { token, username, role } = state;
  const { postId, postedBy, likes, dislikes, likeStatus } = props;

  const checkDeleteButtonAvailable = () => {
    let viewToreturn = null;
    if (token) {
      if (role === userRole.admin || username === postedBy) {
        viewToreturn = <Delete postId={postId} />;
      }
    }
    return viewToreturn;
  };

  return (
    <Container>
      <StyledDivider />
      <DetailsContainer>
        <LikeDislike
          postId={postId}
          likes={likes}
          dislikes={dislikes}
          likeStatus={likeStatus}
        />
        <ControllsContainer>
          {checkDeleteButtonAvailable()}

          <Report postId={postId} postedBy={postedBy} />
        </ControllsContainer>
      </DetailsContainer>
    </Container>
  );
};

export default Details;
