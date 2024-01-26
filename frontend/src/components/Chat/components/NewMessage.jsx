import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import useChat from '../useChat';
import colors from '../../../theme/colors';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';
import { selectEmail, selectUsername } from '../../../redux/app/selectors';

const NewMessageForm = styled.form`
  background: ${colors.filteri};
  display: flex;
`;

const NewMessageTextarea = styled.textarea`
  flex: 1;
  outline: none;
  padding-left: 5px;
`;

const NewMessage = ({ group }) => {
  // const { auth } = useChat();
  const { firestore } = useChat();
  const messagesRef = collection(firestore, group);
  const [newMessage, setNewMessage] = useState('');
  const username = useSelector(selectUsername);
  const email = useSelector(selectEmail);
  const textAreaRef = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();
    // const { uid, photoURL, displayName } = auth.currentUser;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      email,
      displayName: username,
    });

    setNewMessage('');
  };

  useEffect(() => {
    textAreaRef.current.style.height = 'inherit'; // Reset the height
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Set it to the scroll height
  }, [newMessage]);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      //ADDING NEW LINES FOR SHIFT+ENTER (under comment because new lines are not saved to database)
      // Insert a newline character where the cursor is
      // const cursorPosition = e.target.selectionStart;
      // const newValue = [
      //   newMessage.slice(0, cursorPosition),
      //   '\n',
      //   newMessage.slice(cursorPosition),
      // ].join('');
      // setNewMessage(newValue);
    } else if (e.key === 'Enter') {
      sendMessage(e);
    }
  };

  return (
    <NewMessageForm onSubmit={sendMessage}>
      <NewMessageTextarea
        ref={textAreaRef}
        value={newMessage}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Message"
      />

      <button type="submit" disabled={!newMessage}>
        <SendIcon />
      </button>
    </NewMessageForm>
  );
};

export default NewMessage;
