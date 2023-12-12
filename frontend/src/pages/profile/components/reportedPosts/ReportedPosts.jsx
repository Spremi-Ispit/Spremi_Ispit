import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';
import Loader from '../../../../components/Loader';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import DismissReport from './components/DismissReport';
import ErrorDialog from '../../../../components/dialogs/ErrorDialog';
import { useApiActions } from '../../../../api/useApiActions';
import PostPreview from '../../../../components/PostPreview/PostPreview';

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
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    max-width: 730px;
  }
`;

const PostPreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReportedPosts = () => {
  const [posts, setPosts] = useState([]);

  const { loadReportedPosts } = useApiActions();
  const { error, setError, loaded, response, action } = loadReportedPosts;

  useEffect(() => {
    action();
  }, []);

  useEffect(() => {
    if (loaded) {
      setPosts(response);
    }
  }, [loaded]);

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  if (!loaded) {
    return <Loader />;
  }

  if (posts.length === 0) {
    return (
      <Container>
        <h1>Prijavljene objave</h1>
        <StyledDivider />
        <Fade in={true}>
          <StyledPaper elevation={4}>
            <Typography variant="h5">Nema prijavljenih objava!</Typography>
          </StyledPaper>
        </Fade>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Prijavljene objave</h1>
      <StyledDivider />
      {posts.map((data, index) => (
        <PostPreviewContainer key={index}>
          <PostPreview data={data} />
          <DismissReport postId={data.id} setLoadPosts={action} />
        </PostPreviewContainer>
      ))}
    </Container>
  );
};

export default ReportedPosts;
