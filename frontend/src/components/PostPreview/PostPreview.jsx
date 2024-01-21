import React from 'react';
import styled from 'styled-components';
import colors from '../../theme/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { Divider } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { profilePostsRoute, viewPostRoute } from '../../router/routes';
import { allowedUrlParams } from '../../utils/managers/UrlManager';

const StyledDivider = styled(Divider)`
  && {
    margin-left: auto;
    margin-right: auto;
  }
`;

const PostPreviewDiv = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 1px 3px;
  cursor: pointer;
  flex: 1;
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

const PostedByDiv = styled.div`
  :hover {
    text-decoration: underline;
  }
`;

const PostPreviewNavlink = styled(NavLink)`
  text-decoration: none;
  color: black;
  :hover {
    text-decoration: none;
    color: black;
  }
  width: 100%;
  overflow-wrap: anywhere;
`;

const StatsDiv = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const StatDiv = styled.div`
  display: flex;
  gap: 5px;
`;

const PostPreview = ({ data, className }) => {
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
    comments,
  } = data; //files: [{id, ext, path}]
  const navigate = useNavigate();

  const handlePostedByClick = (e) => {
    e.preventDefault();

    navigate({
      pathname: profilePostsRoute,
      search: `${allowedUrlParams.username}=${postedBy}`,
    });
  };

  return (
    <PostPreviewNavlink
      to={`${viewPostRoute}${location.search ? location.search + '&' : '?'}${
        allowedUrlParams.postId
      }=${id}`}
      className={className}
    >
      <PostPreviewDiv>
        <HeaderDiv>{title}</HeaderDiv>
        <DescriptionDiv>{text}</DescriptionDiv>
        <StyledDivider />
        <FooterDiv>
          <StatsDiv>
            <StatDiv>
              <FavoriteIcon />
              {likes - dislikes}
            </StatDiv>
            <StatDiv>
              <CommentIcon />
              {comments}
            </StatDiv>
          </StatsDiv>

          <PostedByDiv
            onClick={handlePostedByClick}
            onContextMenu={(e) => e.preventDefault()}
          >
            {postedBy}
          </PostedByDiv>
        </FooterDiv>
      </PostPreviewDiv>
    </PostPreviewNavlink>
  );
};

export default PostPreview;
