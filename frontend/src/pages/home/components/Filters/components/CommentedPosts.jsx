import React from 'react';
import styled from 'styled-components';
import { fonts } from '../../../../../theme/fonts';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../utils/managers/UrlManager';
import colors from '../../../../../theme/colors';

const CommentedPostsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentedPostsLabel = styled.label`
  margin-bottom: 10px;
  ${fonts(15, 600, 'italic', 'Libre Bodoni')}
`;

const CommentsDiv = styled.div`
  display: flex;
  background: white;
  border: 1px solid rgb(118, 118, 118);
  :hover {
    border: 1px solid rgb(133, 133, 133);
    cursor: ${({ urlSubject }) => !!urlSubject && 'pointer'};
  }
  height: 30px;
  padding: 5px 5px;
  border-radius: 2px;
  gap: 5px;
  align-items: center;
  ${fonts(15, 600, 'normal', 'Libre Bodoni')}
  background-color: ${({ urlSubject }) => !urlSubject && colors.footer};
`;

const CommentedPostsCheckobx = styled.input``;

export const commentedPosts = {
  true: 'true',
  false: 'false',
};

const CommentedPosts = () => {
  const urlManager = useUrlManager();
  const { urlCommentedPosts, urlSubject } = urlManager.getParams();

  const handleChange = () => {
    if (urlSubject) {
      urlManager.updateUrlParamAndReplaceLastHistoryEntry(
        allowedUrlParams.commentedPosts,
        urlCommentedPosts === commentedPosts.true
          ? commentedPosts.false
          : commentedPosts.true
      );
    }
  };

  return (
    <CommentedPostsDiv>
      <CommentedPostsLabel>Blanketi </CommentedPostsLabel>
      <CommentsDiv onClick={handleChange} urlSubject={urlSubject}>
        <CommentedPostsCheckobx
          type="checkbox"
          checked={urlCommentedPosts === commentedPosts.true}
          readOnly
        />
        sa rešenjima
      </CommentsDiv>
    </CommentedPostsDiv>
  );
};

export default CommentedPosts;
