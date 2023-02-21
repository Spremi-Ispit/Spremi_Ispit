import React from 'react';
import { PostData, StyledPaper } from './styles';
import Details from './components/details';
import PostContent from './components/postContent';
import OpenAsLink from './components/openAsLink';

const PostPreview = (props) => {
  const { data } = props;
  const { title, type, text, tags, likes, dislikes, id, date, postedBy } = data;

  return (
    <OpenAsLink postId={id}>
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
          <Details likes={likes} dislikes={dislikes} />
        </PostData>
      </StyledPaper>
    </OpenAsLink>
  );
};

export default PostPreview;
