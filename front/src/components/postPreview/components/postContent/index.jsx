import { Tooltip } from '@mui/material';
import React from 'react';
import { formatBeautifulDate } from '../../../../utils/dateFormater';
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
import { Link, useNavigate } from 'react-router-dom';
import { profileRoute } from '../../../../app/router/routes';
import { assets } from '../../../../assets';

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

  const stopPropagation = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  return (
    <PostContentContainer>
      <PostHeaderContainer>
        <Link
          to={`${profileRoute}?username=${postedBy}`}
          onMouseDown={stopPropagation}
        >
          <StledAccountCircleIcon
            src={
              Math.floor(Math.random() * 100) + 1 > 50
                ? assets.userAccount.maleModel
                : assets.userAccount.femaleModel
            }
          />
        </Link>

        <PostedBycontainer>
          <div>
            <StyledPostedBy
              to={`${profileRoute}?username=${postedBy}`}
              onMouseDown={stopPropagation}
            >
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
