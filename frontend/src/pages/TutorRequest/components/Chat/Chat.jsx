import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../../../../theme/colors';
import SendIcon from '@mui/icons-material/Send';
import CreateMessage from './components/CreateMessage';
import Message from './components/Message';

const ChatDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 1px;
`;

const ChatHeaderDiv = styled.div`
  display: flex;
  background-color: ${colors.button};
  box-shadow: rgba(0, 0, 0, 0.75) 0px 1px 3px;
  justify-content: center;
`;

const ChatBodyDiv = styled.div`
  flex: 1;
`;

const ChatFooterDiv = styled.div``;

function Chat({ socket, username, room }) {
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async (newMessage) => {
    if (newMessage !== '') {
      const messageData = {
        room: room,
        author: username,
        message: newMessage,
        time: new Date(),
      };

      await socket.emit('send_message', messageData);
      setMessageList((list) => [...list, messageData]);
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <ChatDiv>
      <ChatHeaderDiv className="chat-header">
        <h2>TutorRequest</h2>
      </ChatHeaderDiv>
      <ChatBodyDiv>
        {messageList.map(({ message, author, time }) => (
          <Message text={message} createdAt={time} displayName={author} />
        ))}
      </ChatBodyDiv>
      <ChatFooterDiv>
        <CreateMessage onNewMessage={sendMessage} />
      </ChatFooterDiv>
    </ChatDiv>
  );
}

export default Chat;
