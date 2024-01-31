import React, { useState } from 'react';
import styled from 'styled-components';
import { signOut } from 'firebase/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import { fonts } from '../../../theme/fonts';
import useChat from '../useChat';
import Minimize from '@mui/icons-material/CloseFullscreen';
import Maximize from '@mui/icons-material/OpenInFull';

const ChatHeaderAuthorizedDiv = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Select = styled.select`
  flex: 1;
  height: 2em;
  ${fonts(15, 600, 'normal', 'Libre Bodoni')}
  margin: 0px 10px 0px 5px;
  max-width: 210px;
`;

const StyledMinimize = styled(Minimize)`
  color: white;
  cursor: pointer;
  margin-right: 5px;
`;

const StyledMaximize = styled(Maximize)`
  color: white;
  cursor: pointer;
  margin-right: 5px;
`;

const ChatHeaderAuthorized = ({
  chatMinimized,
  setChatMinimized,
  group,
  setGroup,
}) => {
  const { chatGroups } = useChat();

  const handleGroupChange = (event) => {
    const value = event.target.value;
    setGroup(value);
  };

  return (
    <ChatHeaderAuthorizedDiv>
      <h1>💬</h1>
      <Select defaultValue={group} onChange={handleGroupChange} required>
        <option value="" hidden>
          Odaberi grupu
        </option>
        {chatGroups.map((group) => (
          <option value={group} key={group}>
            {group}
          </option>
        ))}
      </Select>
      {/* {auth.currentUser && (
        <button className="sign-out" onClick={() => signOut(auth)}>
          <LogoutIcon />
        </button>
      )} */}
      {!chatMinimized ? (
        <StyledMinimize onClick={() => setChatMinimized(true)} />
      ) : (
        <StyledMaximize onClick={() => setChatMinimized(false)} />
      )}
    </ChatHeaderAuthorizedDiv>
  );
};

export default ChatHeaderAuthorized;
