import React, { useEffect, useState } from 'react';
import PostView from '../../../components/postView/PostView';
import Loader from '../../../components/Loader';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import ErrorDialog from '../../../components/dialogs/ErrorDialog';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';
import { useUrlManager } from '../../../utils/managers/UrlManager';
import { useApiActions } from '../../../api/useApiActions';

const StyledPaper = styled(Paper)`
  padding: 10px;
  padding-right: 15px;
  margin-bottom: 30px;
  min-height: 150px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #c9cace;
`;

const StyledDivider = styled(Divider)`
  && {
    max-width: 650px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentedPosts = () => {
  const [posts, setPosts] = useState([]);
  const urlManager = useUrlManager();
  const { urlUsername } = urlManager.getParams();
  const { loadCommentedPosts } = useApiActions();
  const { loading, loaded, response, error, setError, action } =
    loadCommentedPosts;

  useEffect(() => {
    if (loaded) {
      setPosts(response);
    }
  }, [loaded]);

  useEffect(() => {
    if (urlUsername) {
      action(urlUsername);
    }
  }, [urlUsername]);

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }
  if (loading) {
    return <Loader />;
  }

  if (posts.length === 0) {
    return (
      <Container>
        <h1>Komentarisane objave</h1>
        <StyledDivider />
        <Fade in={true}>
          <StyledPaper elevation={4}>
            <Typography variant="h5">Nema kreiranih objava!</Typography>
          </StyledPaper>
        </Fade>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Komentarisane objave</h1>
      <StyledDivider />
      {posts.map((data, index) => (
        <PostView key={index} data={data} enableShowPost />
      ))}
    </Container>
  );
};

export default CommentedPosts;
