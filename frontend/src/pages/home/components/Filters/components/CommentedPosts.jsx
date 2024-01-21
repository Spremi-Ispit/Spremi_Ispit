import React, { useState } from 'react';
import styled from 'styled-components';
import { fonts } from '../../../../../theme/fonts';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../utils/managers/UrlManager';

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
    cursor: pointer;
  }
  height: 30px;
  padding: 5px 5px;
  border-radius: 2px;
  gap: 5px;
  align-items: center;
  ${fonts(15, 600, 'normal', 'Libre Bodoni')}
`;

export const commentedPosts = {
  true: 'true',
  false: 'false',
};

const CommentedPosts = () => {
  const urlManager = useUrlManager();
  const { urlCommentedPosts } = urlManager.getParams();

  const handleChange = () => {
    urlManager.updateUrlParamAndReplaceLastHistoryEntry(
      allowedUrlParams.commentedPosts,
      urlCommentedPosts === commentedPosts.true
        ? commentedPosts.false
        : commentedPosts.true
    );
  };

  return (
    <CommentedPostsDiv>
      <CommentedPostsLabel>Objave </CommentedPostsLabel>
      <CommentsDiv onClick={handleChange}>
        <input
          type="checkbox"
          checked={urlCommentedPosts === commentedPosts.true}
          readOnly
        />
        sa komentarima
      </CommentsDiv>
    </CommentedPostsDiv>
  );
};

export default CommentedPosts;
