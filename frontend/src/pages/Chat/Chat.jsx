import React from 'react';
import styled from 'styled-components';
import ChatComponent from '../../components/Chat/Chat';
import Navbar from '../../components/navbar/Navbar';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';
import Footer from '../../components/Footer';

const MainDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

const CommunityDrivesDiv = styled.div`
  display: flex;
  flex: 1;
`;

const Chat = () => {
  return (
    <>
      <Navbar />
      <SettingsSidePanel />
      <CommunityDrivesDiv>
        <MainDiv>
          <ChatComponent />
        </MainDiv>
      </CommunityDrivesDiv>
      <Footer />
    </>
  );
};
export default Chat;
