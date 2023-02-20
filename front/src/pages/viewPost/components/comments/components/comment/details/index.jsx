import React from 'react';
import { Container, DetailsContainer, ControllsContainer } from './styles';
import Delete from './components/delete';
import LikeDislike from './components/likeDislike';
import Report from './components/report';
import { useSelector } from 'react-redux';
import { userRole } from '../../../../../../../utils/enums';

const Details = (props) => {
  const { likes, dislikes, commentId, likeStatus, postedBy } = props;
  const state = useSelector((state) => state.app);
  const { token, username, role } = state;

  const checkDeleteButtonAvailable = () => {
    let viewToreturn = null;
    if (token) {
      if (role === userRole.admin || username === postedBy) {
        viewToreturn = <Delete commentId={commentId} />;
      }
    }
    return viewToreturn;
  };

  return (
    <Container>
      <DetailsContainer>
        <LikeDislike
          likes={likes}
          dislikes={dislikes}
          commentId={commentId}
          likeStatus={likeStatus}
        />
        <ControllsContainer>
          {checkDeleteButtonAvailable()}
          <Report commentId={commentId} />
        </ControllsContainer>
      </DetailsContainer>
    </Container>
  );
};

export default Details;
