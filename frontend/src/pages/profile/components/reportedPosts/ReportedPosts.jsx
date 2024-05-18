import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';
import Loader from '../../../../components/Loader';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import DismissReport from './components/DismissReport';
import Error from '../../../../components/dialogs/Error';
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
  margin-bottom: 20px;
`;

const ReportedPostsDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  margin: auto;
`;

const ReportedPostsH1 = styled.h1`
  align-self: center;
`;

const StyledPostPreview = styled(PostPreview)`
  margin-bottom: 0px;
`;

export const ReportedPosts = () => {
  const [posts, setPosts] = useState([]);

  const { loadReportedPosts } = useApiActions();
  const { error, loaded, response, action } = loadReportedPosts;

  useEffect(() => {
    action();
  }, []);

  useEffect(() => {
    if (response) {
      setPosts(response);
    }
  }, [response]);

  if (error) {
    return <Error error={error} />;
  }

  if (!loaded) {
    return <Loader />;
  }

  if (posts.length === 0) {
    return (
      <ReportedPostsDiv>
        <ReportedPostsH1>Prijavljene objave</ReportedPostsH1>
        <StyledDivider />
        <Fade in={true}>
          <StyledPaper elevation={4}>
            <Typography variant="h5">Nema prijavljenih objava!</Typography>
          </StyledPaper>
        </Fade>
      </ReportedPostsDiv>
    );
  }

  return (
    <ReportedPostsDiv>
      <ReportedPostsH1>Prijavljene objave</ReportedPostsH1>
      <StyledDivider />
      {posts.map((data, index) => {
        return (
          <PostPreviewContainer key={index}>
            <StyledPostPreview data={data} />
            <DismissReport postId={data.id} setLoadPosts={action} />
          </PostPreviewContainer>
        );
      })}
    </ReportedPostsDiv>
  );
};

export default ReportedPosts;
