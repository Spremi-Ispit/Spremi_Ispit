import React from 'react';
import styled from 'styled-components';
import colors from '../../theme/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Divider } from '@mui/material';

const StyledDivider = styled(Divider)`
  && {
    margin-left: auto;
    margin-right: auto;
  }
`;

const PostPreviewDiv = styled.div`
  background-color: white;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 1px 3px;
`;

const HeaderDiv = styled.div`
  font-weight: bold;
  padding: 10px;
`;

const DescriptionDiv = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px 10px 0 10px;
  margin-bottom: 10px;
`;

const FooterDiv = styled.div`
  font-weight: bold;
  justify-content: space-between;
  display: flex;
  padding: 10px;
  background-color: ${colors.background};
`;

const LikesDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const PostedByDiv = styled.div``;

const PostPreview = ({ post }) => {
  const {
    id,
    title,
    text,
    date,
    likes,
    dislikes,
    postedBy,
    userId,
    owner,
    likeStatus,
    files,
  } = post; //files: [{id, ext, path}]

  return (
    <PostPreviewDiv>
      <HeaderDiv>{title}</HeaderDiv>
      <DescriptionDiv>{text}</DescriptionDiv>
      <StyledDivider />
      <FooterDiv>
        <LikesDiv>
          <FavoriteIcon />
          {likes - dislikes}
        </LikesDiv>
        <PostedByDiv>{postedBy}</PostedByDiv>
      </FooterDiv>
    </PostPreviewDiv>
  );
};

export default PostPreview;
