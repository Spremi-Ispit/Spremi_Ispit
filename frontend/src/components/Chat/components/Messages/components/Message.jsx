import React from 'react';
import styled from 'styled-components';
import colors from '../../../../../theme/colors';
import { useSelector } from 'react-redux';
import { selectUsername } from '../../../../../redux/app/selectors';

const MessageDiv = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  padding: 10px;
  flex-direction: column;
  background: ${({ sent }) =>
    sent ? colors.filteri : colors.settingSidePanelBrighterItem};
`;

const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 10px;
`;

const MessageHeaderDiv = styled.div`
  display: flex;
  align-items: center;
`;

const MessageHeaderInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.background};
`;

const MessageTextP = styled.p`
  color: ${colors.footer};
  margin-top: 10px;
`;

const DateDiv = styled.div`
  font-size: small;
`;

const DateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};

const Message = ({ message }) => {
  const { text, createdAt, displayName } = message;
  const username = useSelector(selectUsername);

  const formatDate = (date) => {
    return date.toLocaleString('sr-RS', DateOptions);
  };

  return (
    <MessageDiv sent={displayName === username}>
      <MessageHeaderDiv>
        <ProfileImg
          src={`https://ui-avatars.com/api/?name=${displayName}&background=random&color=random`}
        />
        <MessageHeaderInfoDiv>
          {displayName}
          <br />
          <DateDiv>
            {formatDate(createdAt ? createdAt.toDate() : new Date())}
          </DateDiv>
        </MessageHeaderInfoDiv>
      </MessageHeaderDiv>
      <MessageTextP>{text}</MessageTextP>
    </MessageDiv>
  );
};

export default Message;
