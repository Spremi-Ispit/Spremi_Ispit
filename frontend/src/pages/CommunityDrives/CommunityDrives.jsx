import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';
import { NavLink } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Footer from '../../components/Footer';

const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const MainDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const CommunityDrivesDiv = styled.div`
  display: flex;
  flex: 1;
`;

const ToolDiv = styled.div`
  display: flex;
`;

const CommunityDrivesH2 = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const CommunityDrives = () => {
  return (
    <>
      <Navbar />
      <SettingsSidePanel />
      <CommunityDrivesDiv>
        <MainDiv>
          <CommunityDrivesH2>Drive linkovi</CommunityDrivesH2>
          {Drives.map((tool, index) => (
            <ToolDiv>
              <b>
                {index + 1}. {tool.name}
              </b>
              <ArrowRightAltIcon />
              <StyledNavlink as="a" href={tool.link} target="_blank">
                link
              </StyledNavlink>
            </ToolDiv>
          ))}
        </MainDiv>
      </CommunityDrivesDiv>
      <Footer />
    </>
  );
};

const Drives = [
  {
    name: 'Upravljanje sistemima',
    link: 'https://drive.google.com/drive/folders/1EoaZrj6vRVsui6aBR6XQDGhLJvrGrjjD',
  },
  {
    name: 'Google Drive sa materijalima za prvu godinu studija + 2,3,4 godinu na modulu RI',
    link: 'https://drive.google.com/drive/u/0/folders/1zZ5jtm-FiUYCrONDLx-KtOAAjmYCJBG3',
  },
  {
    name: 'Drive kolege @nenad_dj sa korisnim materijalima za RI',
    link: 'https://elfakrs-my.sharepoint.com/:f:/g/personal/djordjevic_nenad_elfak_rs/EpAgotjh785Hv_Cowb1sjhIBhy8PBKac3_gXTtWqk1su2Q',
  },
];

export default CommunityDrives;
