import React, { useEffect } from 'react';
import { Container, PostPreviewContainer, StyledDivider } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import PostPreview from '../../../../../../components/postPreview';
import ErrorDialog from '../../../../../../components/errorDialogRedux';
import Loader from '../../../../../../components/loader';
import { setError } from './redux/slices';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { StyledPaper } from './styles';
import { loadReportedPosts } from '../../../../reduxThunk/actions';
import DismissReport from './components/dismissReport';

const ReportedPosts = () => {
  const order = useSelector((state) => state.profile.posts.order);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile.posts);
  const { loading, error, posts } = state;

  useEffect(() => {
    dispatch(loadReportedPosts());
  }, [dispatch, order]);

  const postsView = () => {
    if (posts.length === 0) {
      return (
        <Container>
          <StyledDivider />
          <Fade in={true}>
            <StyledPaper elevation={4}>
              <Typography variant="h5">Nema prijavljenih objava!</Typography>
            </StyledPaper>
          </Fade>
        </Container>
      );
    } else {
      return (
        <Container>
          <StyledDivider />
          {posts.map((data, index) => (
            <PostPreviewContainer key={index}>
              <PostPreview data={data} />
              <DismissReport
                postId={data.id}
                reportedById={data.reportedById}
              />
            </PostPreviewContainer>
          ))}
        </Container>
      );
    }
  };

  const viewToRender = () => {
    return (
      <>
        <h1>Prijavljene objave</h1>
        {postsView()}
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

export default ReportedPosts;
