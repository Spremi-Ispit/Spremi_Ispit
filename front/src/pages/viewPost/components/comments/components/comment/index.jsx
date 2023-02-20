import React from 'react';
import { StyledPaper } from './styles';
import Content from './contet';
import Details from './details';
import Title from './title';

const Comment = (props) => {
  const { data } = props;
  const {
    text,
    files,
    likes,
    dislikes,
    id,
    date,
    likeStatus,
    // owner,
    postedBy,
  } = data;

  return (
    <StyledPaper elevation={1}>
      <Title postedBy={postedBy} id={id} date={date} />
      <Content text={text} files={files} />
      <Details
        likes={likes}
        commentId={id}
        dislikes={dislikes}
        likeStatus={likeStatus}
        postedBy={postedBy}
      />
    </StyledPaper>
  );
};

export default Comment;
