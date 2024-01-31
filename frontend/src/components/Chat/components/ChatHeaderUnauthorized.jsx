import React from 'react';
import styled from 'styled-components';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import LoginIcon from '@mui/icons-material/Login';
import useChat from '../useChat';
import { useNavigate } from 'react-router-dom';
import { loginRoute } from '../../../router/routes';

const ChatHeaderUnauthorizedDiv = styled.div`
  display: flex;
`;

const StyledLoginIcon = styled(LoginIcon)`
  cursor: pointer;
`;

const ChatHeaderUnauthorized = () => {
  const { auth } = useChat();
  const navigate = useNavigate();

  // const signInWithGoogle = () => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth, provider);
  // };

  const signIn = () => {
    navigate(loginRoute);
  };

  return (
    <ChatHeaderUnauthorizedDiv>
      <button onClick={signIn}>
        <StyledLoginIcon />
      </button>
      <h1>💬</h1>
    </ChatHeaderUnauthorizedDiv>
  );
};

export default ChatHeaderUnauthorized;
