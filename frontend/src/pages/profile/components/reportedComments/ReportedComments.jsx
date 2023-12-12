import React, { useEffect, useState } from 'react';
import Loader from '../../../../components/Loader';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import DismissReport from './components/DismissReport';
import ShowPost from './components/ShowPost';
import ErrorDialog from '../../../../components/dialogs/ErrorDialog';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';
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
  }
`;

const CommentPreviewContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 750px;
`;

const PostViewDiv = styled.div`
  max-width: 800px;
  min-width: 800px;
`;

const ControllsDiv = styled.div`
  margin-top: 8px;
  margin-bottom: 15px;
`;

export const ReportedComments = () => {
  const [comments, setComments] = useState([]);
  const { loadReportedComments } = useApiActions();
  const { loading, error, setError, loaded, response, action } =
    loadReportedComments;

  useEffect(() => {
    if (loaded) {
      setComments(response);
    }
  }, [loaded]);

  useEffect(() => {
    action();
  }, []);

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }
  if (loading) {
    return <Loader />;
  }

  if (comments.length === 0) {
    return (
      <Container>
        <h1>Prijavljeni komentari</h1>
        <StyledDivider />
        <Fade in={true}>
          <StyledPaper elevation={4}>
            <Typography variant="h5">Nema prijavljenih komentara!</Typography>
          </StyledPaper>
        </Fade>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Prijavljeni komentari</h1>
      <StyledDivider />
      {comments.map((comment) => {
        return (
          <CommentPreviewContainer key={JSON.stringify(comment)}>
            <PostViewDiv>
              <PostPreview data={comment} />
            </PostViewDiv>
            <ControllsDiv>
              <ShowPost postId={comment.postId} />
              <DismissReport commentId={comment.id} setLoadComments={action} />
            </ControllsDiv>
          </CommentPreviewContainer>
        );
      })}
    </Container>
  );
};

export default ReportedComments;
