import React from 'react';
import styled from 'styled-components';

const CreatePostButton = styled.button`
  white-space: nowrap;
`;

const CreatePost = () => {
  return (
    <>
      <CreatePostButton>Kreiraj objavu</CreatePostButton>;
      <button type="submit">
        <i class="fa fa-search"></i>
      </button>
    </>
  );
};

export default CreatePost;
