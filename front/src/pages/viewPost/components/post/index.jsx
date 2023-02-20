import React, { useEffect } from 'react';
import ErrorDialog from '../../../../components/errorDialogRedux';
import { PostData, StyledPaper } from './styles';
import Loader from '../../../../components/loader';
import Content from './components/contet';
import Details from './components/details';

import { setError } from './redux/slices';
import { useSelector, useDispatch } from 'react-redux';
import { loadPost } from '../../reduxThunk/actions';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { viewPostRoute } from '../../../../app/router/routes';
import { loadPostForHomepageFilters } from '../../reduxThunk/actions';
import { urlParams } from '../../../../utils/enums';
import PostContent from './components/postContent';

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.viewPost.post);
  const { loading, error, post } = state;
  const [searchParams] = useSearchParams();
  const searchParamsPostId = searchParams.get(urlParams.postId);
  const selectedPostIndex = searchParams.get(urlParams.selectedPostIndex);
  const homepageFilters = {
    order: searchParams.get(urlParams.order),
    type: searchParams.get(urlParams.type),
    search: searchParams.get(urlParams.search),
    selectedTags: searchParams.get(urlParams.tags),
  };

  useEffect(() => {
    if (!selectedPostIndex) {
      dispatch(loadPost(searchParamsPostId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, searchParamsPostId, selectedPostIndex]);

  useEffect(() => {
    if (selectedPostIndex && Number.isFinite(Number(selectedPostIndex))) {
      dispatch(
        loadPostForHomepageFilters(
          selectedPostIndex,
          homepageFilters,
          (postId) => {
            const updatedSearchParams = new URLSearchParams(
              searchParams.toString()
            );
            updatedSearchParams.set(urlParams.postId, postId);
            updatedSearchParams.set(
              urlParams.selectedPostIndex,
              selectedPostIndex
            );

            navigate(
              {
                pathname: viewPostRoute,
                search: `${updatedSearchParams.toString()}`,
              },
              {
                replace: true,
              }
            );
          }
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, navigate, selectedPostIndex]);

  const viewToRender = () => {
    if (post) {
      const {
        title,
        type,
        text,
        files,
        tags,
        likes,
        dislikes,
        id,
        date,
        postedBy,
        likeStatus,
      } = post;

      return (
        <StyledPaper elevation={1}>
          <PostData>
            <PostContent
              profileImage="dodaj kasnije"
              postedBy={postedBy}
              date={date}
              title={title}
              type={type}
              description={text}
              tags={tags}
            />
            <Content files={files} />
            <Details
              likes={likes}
              postId={id}
              dislikes={dislikes}
              likeStatus={likeStatus}
              postedBy={postedBy}
            />
          </PostData>
        </StyledPaper>
      );
    } else {
      return null;
    }
  };

  return error ? (
    <ErrorDialog error={error} setError={setError} />
  ) : loading ? (
    <Loader />
  ) : (
    viewToRender()
  );
};

export default Post;
