import React, { useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import NewMessage from './components/NewMessage';
import colors from '../../theme/colors';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/app/selectors';
import ChatHeaderUnauthorized from './components/ChatHeaderUnauthorized';
import ChatHeaderAuthorized from './components/ChatHeaderAuthorized';
import Messages from './components/Messages/Messages';
import { screensCSS } from '../../utils/useScreens';

const ChatDiv = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: ${({ user }) => user && '300px'};
  display: flex;
  flex-direction: column;

  @media ${screensCSS.mobileL} {
    width: ${({ user }) => user && '100%'};
  }
`;

const ChatHeaderDiv = styled.div`
  display: flex;
  flex: 1;
  background-color: ${colors.filteri};
`;

function Chat() {
  // const { auth } = useChat();
  // const [user] = useAuthState(auth);
  const token = useSelector(selectToken);
  const user = token;
  const [chatMinimized, setChatMinimized] = useState(false);
  const [group, setGroup] = useState('');

  return (
    <ChatDiv user={user}>
      <ChatHeaderDiv>
        {!user ? (
          <ChatHeaderUnauthorized />
        ) : (
          <ChatHeaderAuthorized
            chatMinimized={chatMinimized}
            setChatMinimized={setChatMinimized}
            group={group}
            setGroup={setGroup}
          />
        )}
      </ChatHeaderDiv>
      {user && !chatMinimized && !!group && (
        <section>
          <Messages group={group} />
          <NewMessage group={group} />
        </section>
      )}
    </ChatDiv>
  );
}

export default Chat;
