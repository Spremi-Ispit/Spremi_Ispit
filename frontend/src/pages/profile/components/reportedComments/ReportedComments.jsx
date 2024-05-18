import React, { useEffect, useState } from 'react';
import Loader from '../../../../components/Loader';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import DismissReport from './components/DismissReport';
import ShowPost from './components/ShowPost';
import Error from '../../../../components/dialogs/Error';
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

const ReportedCommentsDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  margin: auto;
`;

const ControllsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

const StyledPostPreview = styled(PostPreview)`
  width: 100%;
`;

const ReportedCommentsH1 = styled.h1`
  align-self: center;
`;

const CommentsPreviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ReportedComments = () => {
  const [comments, setComments] = useState([]);
  const { loadReportedComments } = useApiActions();
  const { loading, error, loaded, response, action } = loadReportedComments;

  useEffect(() => {
    if (loaded) {
      setComments(response);
    }
  }, [loaded]);

  useEffect(() => {
    action();
  }, []);

  if (error) {
    return <Error error={error} />;
  }
  if (loading) {
    return <Loader />;
  }

  if (comments.length === 0) {
    return (
      <ReportedCommentsDiv>
        <ReportedCommentsH1>Prijavljeni komentari</ReportedCommentsH1>
        <StyledDivider />
        <Fade in={true}>
          <StyledPaper elevation={4}>
            <Typography variant="h5">Nema prijavljenih komentara!</Typography>
          </StyledPaper>
        </Fade>
      </ReportedCommentsDiv>
    );
  }

  return (
    <ReportedCommentsDiv>
      <ReportedCommentsH1>Prijavljeni komentari</ReportedCommentsH1>
      <StyledDivider />
      <CommentsPreviewDiv>
        {comments.map((comment) => {
          return (
            <CommentPreviewContainer key={JSON.stringify(comment)}>
              <StyledPostPreview data={comment} />
              <ControllsDiv>
                <ShowPost postId={comment.postId} />
                <DismissReport
                  commentId={comment.id}
                  setLoadComments={action}
                />
              </ControllsDiv>
            </CommentPreviewContainer>
          );
        })}
      </CommentsPreviewDiv>
    </ReportedCommentsDiv>
  );
};

export default ReportedComments;
