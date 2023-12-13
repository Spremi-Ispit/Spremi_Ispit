import React from 'react';
import styled from 'styled-components';
import colors from '../../theme/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Divider } from '@mui/material';
import NavLink from '../navbar/components/components/NavLink';
import { profileInfoRoute, viewPostRoute } from '../../router/routes';
import { useNavigate } from 'react-router-dom';
import { allowedUrlParams } from '../../utils/managers/UrlManager';

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

const LikesDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const PostedByNavlink = styled(NavLink)`
  color: black;

  :hover {
    color: black;
  }
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
  } = data; //files: [{id, ext, path}]
  const navigate = useNavigate();

  const handlePostPreviewClick = () => {
    const urlPostId = `${allowedUrlParams.postId}=${id}`;
    navigate({
      pathname: viewPostRoute,
      search: `${location.search}&${urlPostId}`,
    });
  };

  const handlePostedByClick = (e) => {
    console.log('Aaaaaaaaaaaaa');
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  return (
    <PostPreviewDiv onClick={handlePostPreviewClick} className={className}>
      <HeaderDiv>{title}</HeaderDiv>
      <DescriptionDiv>{text}</DescriptionDiv>
      <StyledDivider />
      <FooterDiv>
        <LikesDiv>
          <FavoriteIcon />
          {likes - dislikes}
        </LikesDiv>

        <PostedByNavlink
          to={`${profileInfoRoute}?${allowedUrlParams.username}=${postedBy}`}
          onClick={handlePostedByClick}
        >
          {postedBy}
        </PostedByNavlink>
      </FooterDiv>
    </PostPreviewDiv>
  );
};

export default PostPreview;
