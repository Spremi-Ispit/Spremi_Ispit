import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import colors from '../../../../../theme/colors';

const textAreaMinHeight = 32;

const CreateMessageDiv = styled.div`
  background: ${colors.filteri};
  display: flex;
  padding: 4px;
  font-size: x-large;
`;

const CreateMessageTextarea = styled.textarea`
  flex: 1;
  outline: none;
  padding-left: 5px;
  font-size: 18px;
  min-height: ${textAreaMinHeight}px;
`;

const CreateMessage = ({ onNewMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const textAreaRef = useRef();

  const sendMessage = async () => {
    onNewMessage(newMessage);
    setNewMessage('');
    textAreaRef.current.style.height = `${textAreaMinHeight}px`;
  };

  useEffect(() => {
    const scrollHeight = textAreaRef.current.scrollHeight;

    if (scrollHeight > textAreaMinHeight) {
      textAreaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [newMessage]);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      // !!! new lines are not saved to database)
      // Insert a newline character where the cursor is
      const cursorPosition = e.target.selectionStart;
      const newValue = [
        newMessage.slice(0, cursorPosition),
        '\n',
        newMessage.slice(cursorPosition),
      ].join('');
      setNewMessage(newValue);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage(e);
    }
  };

  return (
    <CreateMessageDiv>
      💬
      <CreateMessageTextarea
        ref={textAreaRef}
        value={newMessage}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Message"
        rows="1"
      />
      <button disabled={!newMessage} onClick={sendMessage}>
        <SendIcon />
        {/* &#9658; */}
      </button>
    </CreateMessageDiv>
  );
};

export default CreateMessage;
