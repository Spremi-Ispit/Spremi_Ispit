import React from 'react';
import { StyledPaper } from './styles';
import Content from './contet';
import Details from './details';
import Title from './title';

const CommentPreview = (props) => {
  const { data } = props;
  const { text, files, likes, dislikes, id, date, postedBy, postId } = data;

  return (
    <StyledPaper elevation={1}>
      <Title postedBy={postedBy} date={date} />
      <Content text={text} files={files} />
      <Details likes={likes} dislikes={dislikes} postId={postId} />
    </StyledPaper>
  );
};

export default CommentPreview;
