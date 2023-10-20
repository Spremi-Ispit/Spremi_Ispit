import React from 'react';
import Report from './components/Report';
import Delete from './components/Delete';
import LikeDislike from './components/LikeDislike';
import { userRole } from '../../../../redux/app/state';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { Button, Divider } from '@mui/material';
import {
  selectRole,
  selectToken,
  selectUsername,
} from '../../../../redux/app/selectors';
import { useSelector } from 'react-redux';
import useActions from '../../../../pages/viewPost/useActions';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: flex-end;
  margin-left: 5px;
  cursor: pointer;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex: 1;
`;

const StyledDivider = styled(Divider)`
  && {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const StyledButton = styled(Button)`
  && {
    margin-right: 5px;
    background: var(--primary);
    color: white;
    :hover {
      background: var(--secondary);
    }
  }
`;

const ControllsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
`;

export const Footer = ({
  likes,
  dislikes,
  likeStatus,
  postId,
  postedBy,
  enableShowPost,
  enableDelete,
  enableReport,
}) => {
  const token = useSelector(selectToken);
  const role = useSelector(selectRole);
  const username = useSelector(selectUsername);

  const deleteButton = () => {
    if (token && enableDelete) {
      if (role === userRole.admin || username === postedBy) {
        return <Delete postId={postId} />;
      }
    }
    return null;
  };

  const reportButton = () => {
    if (enableReport) {
      return <Report postId={postId} />;
    }

    return null;
  };

  return (
    <>
      <StyledDivider />
      <Container>
        <DetailsContainer>
          <LikeDislike
            postId={postId}
            likes={likes}
            dislikes={dislikes}
            likeStatus={likeStatus}
          />
          <ControllsContainer>
            {deleteButton()}
            {reportButton()}
          </ControllsContainer>
        </DetailsContainer>
        {enableShowPost ? (
          <StyledButton size="small" variant="outlined">
            <Typography variant="button" color="inherit">
              Prikaži
            </Typography>
          </StyledButton>
        ) : null}
      </Container>
    </>
  );
};

export default Footer;
