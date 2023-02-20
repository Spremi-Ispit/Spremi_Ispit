import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Comment from './components/comment';
import ErrorDialog from '../../../../components/errorDialogRedux';
import Loader from '../../../../components/loader';
import { setError } from './redux/slices';
import { loadComments } from '../../reduxThunk/actions';
import { useSearchParams } from 'react-router-dom';
import { urlParams } from '../../../../utils/enums';

const Comments = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.viewPost.comments);
  const { loading, error, comments } = state;
  const [searchParams] = useSearchParams();
  const postID = searchParams.get(urlParams.postId);

  useEffect(() => {
    dispatch(loadComments(postID));
  }, [dispatch, postID]);

  return error ? (
    <ErrorDialog error={error} setError={setError} />
  ) : loading ? (
    <Loader />
  ) : (
    <div>
      {comments.length > 0 ? <h1>Komentari</h1> : null}
      {comments.map((comment) => (
        <Comment key={JSON.stringify(comment)} data={comment} />
      ))}
    </div>
  );
};

export default Comments;
