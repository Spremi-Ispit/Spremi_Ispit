import React from 'react';
import styled from 'styled-components';
import colors from '../../../../../theme/colors';
import { useSelector } from 'react-redux';
import { selectUsername } from '../../../../../redux/app/selectors';

const MessageDiv = styled.div`
  display: flex;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 1px 3px;
  color: black;
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

const MessageContentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

const MessageTextP = styled.p`
  margin-top: 10px;
`;

const DateDiv = styled.div`
  font-size: small;
  color: ${colors.buttonHover};
`;

const MessageInfoDiv = styled.div`
  padding-top: 2px;
`;

const DateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};

const Message = ({ text, createdAt, displayName }) => {
  const username = useSelector(selectUsername);

  console.log(new Date(createdAt));

  const formatDate = (date) => {
    return date.toLocaleString('sr-RS', DateOptions);
  };

  return (
    <MessageDiv sent={displayName === username}>
      <UserImg
        src={`https://ui-avatars.com/api/?name=${displayName}&background=random`}
      />
      <MessageContentDiv>
        <MessageInfoDiv>
          <UserInfoDiv>{displayName}</UserInfoDiv>
          <DateDiv>{formatDate(createdAt)}</DateDiv>
        </MessageInfoDiv>
        <MessageTextP>{text}</MessageTextP>
      </MessageContentDiv>
    </MessageDiv>
  );
};

export default Message;
