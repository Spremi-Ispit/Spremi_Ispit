import { Tooltip } from '@mui/material';
import React from 'react';
import Tags from './components/tags';
import {
  PostContentContainer,
  PostDescriptionContainer,
  PostedBycontainer,
  PostHeaderContainer,
  PostTitleContainer,
  StledAccountCircleIcon,
  StyledImage,
  StyledPostedBy,
  StyledTimeContainer,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../../../../../assets';
import { profileRoute } from '../../../../../../app/router/routes';
import { formatBeautifulDate } from '../../../../../../utils/dateFormater';

const PostContent = (props) => {
  // const { profileImage, date, postedBy, title, type, description, tags } =
  const { date, postedBy, title, type, description, tags } = props;
  const navigate = useNavigate();

  const typeIcon =
    type === 'material' ? (
      <Tooltip title="Materijal">
        <StyledImage src={assets.postType.book} />
      </Tooltip>
    ) : (
      <Tooltip title="Pitanje">
        <StyledImage src={assets.postType.question} />
      </Tooltip>
    );

  const handleVisitUserProfile = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    navigate({
      pathname: profileRoute,
      search: `username=${postedBy}`,
    });
  };

  return (
    <PostContentContainer>
      <PostHeaderContainer>
        <StledAccountCircleIcon
          src={
            Math.floor(Math.random() * 100) + 1 > 50
              ? assets.userAccount.maleModel
              : assets.userAccount.femaleModel
          }
          onClick={handleVisitUserProfile}
        />
        <PostedBycontainer>
          <div>
            <StyledPostedBy onClick={handleVisitUserProfile}>
              {postedBy}
            </StyledPostedBy>
            <StyledTimeContainer>
              {' · '}
              <time>{formatBeautifulDate(date)}</time>
            </StyledTimeContainer>
          </div>

          {typeIcon}
        </PostedBycontainer>
      </PostHeaderContainer>
      <PostTitleContainer>{title}</PostTitleContainer>
      <PostDescriptionContainer>{description}</PostDescriptionContainer>
      <Tags tags={tags} />
    </PostContentContainer>
  );
};

export default PostContent;
