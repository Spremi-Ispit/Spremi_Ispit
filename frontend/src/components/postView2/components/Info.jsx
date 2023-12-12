import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../../assets';
import { formatBeautifulDate } from '../../../utils/dateFormater';
import { profileRoute } from '../../../router/routes';
import styled from 'styled-components';

const InfoDiv = styled.div`
  display: flex;
  margin-left: 5px;
  align-items: center;
`;

const PostedBycontainer = styled.div`
  margin-top: 5px;
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const StyledPostedBy = styled(Link)`
  cursor: pointer;
  padding-left: 0px;
  padding-right: 5px;
  color: gray;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    text-decoration-color: gray;
  }
`;

const StyledTimeContainer = styled.span`
  padding-left: 0px;
  padding-right: 5px;
  color: gray;
`;

const StlyedAccountCircleIcon = styled.img`
  && {
    width: 35px;
    height: 35px;
    border-radius: 10px;
    background-position: center;
    object-fit: cover;
  }
`;

export const Info = (props) => {
  const { date, postedBy } = props;

  const stopPropagation = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  const handleVisitUserProfile = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    navigate({
      pathname: profileRoute,
      search: `username=${postedBy}`,
    });
  };

  return (
    <InfoDiv>
      <Link
        to={`${profileRoute}?username=${postedBy}`}
        onMouseDown={stopPropagation}
      >
        <StlyedAccountCircleIcon
          src={assets.userAccount.avatar}
          onClick={handleVisitUserProfile}
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
      </PostedBycontainer>
    </InfoDiv>
  );
};

export default Info;
