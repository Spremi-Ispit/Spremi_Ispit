import React, { useEffect, useRef } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { AddCommentContainer, ContentContainer } from './styles';
import FirstPost from './components/post';
import Comments from './components/comments';
import CreateComment from './components/createComment';
import { useDispatch, useSelector } from 'react-redux';
import { AddComment } from './components/addComment';
import Heading from './components/heading';
import ShowAttachments from './components/showAttachments';
import { loadAllTags } from './reduxThunk/actions';
import Loader from '../../components/loader';
import ErrorDialogRedux from '../../components/errorDialogRedux';
import { setError } from './redux/slices';
import Breadcrumbs from '../../components/breadcrumbs';

const ViewPost = () => {
  const createCommentRef = useRef(null);
  const token = useSelector((state) => state.app.token);
  const loading = useSelector((state) => state.viewPost.loading);
  const error = useSelector((state) => state.viewPost.error);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dispatch]);

  useEffect(() => {
    if (loading) {
      dispatch(loadAllTags());
    }
  }, [dispatch, loading]);

  const viewToRender = () => (
    <>
      <Navbar />
      <Breadcrumbs />
      <Heading />
      <ContentContainer>
        <ShowAttachments />
        <FirstPost />
        <AddCommentContainer>
          <AddComment ref={createCommentRef} />
        </AddCommentContainer>
        <Comments />
        {token ? <CreateComment ref={createCommentRef} /> : null}
      </ContentContainer>
      <Footer />
    </>
  );

  return error ? (
    <ErrorDialogRedux error={error} setError={setError} />
  ) : loading ? (
    <Loader />
  ) : (
    viewToRender()
  );
};

export default ViewPost;
