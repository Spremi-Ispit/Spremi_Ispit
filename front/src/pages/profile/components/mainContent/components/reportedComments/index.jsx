import React, { useEffect } from 'react';
import { CommentPreviewContainer, Container, StyledDivider } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import ErrorDialog from '../../../../../../components/errorDialogRedux';
import Loader from '../../../../../../components/loader';
import { setError } from './redux/slices';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { StyledPaper } from './styles';
import { loadReportedComments } from '../../../../reduxThunk/actions';
import CommentPreview from './components/commentPreview';
import DismissReport from './components/dismissReport';

const ReportedComments = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile.comments);
  const { loading, error, comments } = state;

  useEffect(() => {
    dispatch(loadReportedComments());
  }, [dispatch]);

  const commentsView = () => {
    if (comments.length === 0) {
      return (
        <Container>
          <StyledDivider />
          <Fade in={true}>
            <StyledPaper elevation={4}>
              <Typography variant="h5">Nema prijavljenih komentara!</Typography>
            </StyledPaper>
          </Fade>
        </Container>
      );
    } else {
      return (
        <Container>
          <StyledDivider />
          {comments.map((data, index) => (
            <CommentPreviewContainer key={index}>
              <CommentPreview data={data} />
              <DismissReport commentId={data.id} />
            </CommentPreviewContainer>
          ))}
        </Container>
      );
    }
  };

  const viewToRender = () => {
    return (
      <>
        <h1>Prijavljeni komentari</h1>

        {commentsView()}
        {loading ? <Loader /> : null}
      </>
    );
  };

  return error ? (
    <ErrorDialog error={error} setError={setError} />
  ) : (
    viewToRender()
  );
};

export default ReportedComments;
