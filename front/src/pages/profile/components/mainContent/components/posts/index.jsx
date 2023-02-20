import React, { useEffect } from 'react';
import { Order } from './components/order';
import { Container, StyledDivider } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import PostPreview from '../../../../../../components/postPreview';
import ErrorDialog from '../../../../../../components/errorDialogRedux';
import Loader from '../../../../../../components/loader';
import { setError } from './redux/slices';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { StyledPaper } from './styles';
import { useSearchParams } from 'react-router-dom';
import { loadUserPosts } from '../../../../reduxThunk/actions';

const Posts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile.posts);
  const { loading, error, posts } = state;
  const [searchParams] = useSearchParams();
  const username = searchParams.get('username');

  useEffect(() => {
    if (username) dispatch(loadUserPosts(username));
  }, [dispatch, username]);

  const postsView = () => {
    if (posts.length === 0) {
      return (
        <Container>
          <StyledDivider />
          <Fade in={true}>
            <StyledPaper elevation={4}>
              <Typography variant="h5">Nema kreiranih objava!</Typography>
            </StyledPaper>
          </Fade>
        </Container>
      );
    } else {
      return (
        <Container>
          <Order />
          <StyledDivider />
          {posts.map((data, index) => (
            <PostPreview key={index} data={data} />
          ))}
        </Container>
      );
    }
  };

  const viewToRender = () => {
    return (
      <>
        <h1>Objave</h1>

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

export default Posts;
