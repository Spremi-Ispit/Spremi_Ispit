import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';
import { NavLink } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

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

const CommunityToolsDiv = styled.div`
  display: flex;
  flex: 1;
`;

const ToolDiv = styled.div`
  display: flex;
`;

const CommunityToolsH2 = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const CommunityTools = () => {
  return (
    <>
      <Navbar />
      <CommunityToolsDiv>
        <SettingsSidePanel />
        <MainDiv>
          <CommunityToolsH2>Alati zajednice</CommunityToolsH2>
          {tools.map((tool, index) => (
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
      </CommunityToolsDiv>
    </>
  );
};

const tools = [
  {
    name: 'Alati za resavanje zadataka iz Uvoda u Racunarstvo - Lazar Mancic',
    link: 'https://lakimancic.github.io/uur-helper/newversion/index.html',
  },
  {
    name: 'Operativni sistemi lab 1 - Darjan Drugarinovic',
    link: 'https://spremiispit.com/viewPost?postId=3391',
  },
  {
    name: 'Operativni sistemi lab 2 - Darjan Drugarinovic',
    link: 'https://spremiispit.com/viewPost?postId=3392',
  },
  {
    name: 'Operativni sistemi lab 3 - Darjan Drugarinovic',
    link: 'https://spremiispit.com/viewPost?postId=3393',
  },
  {
    name: 'Operativni sistemi lab 4 - Darjan Drugarinovic',
    link: 'https://spremiispit.com/viewPost?postId=3394',
  },
];

export default CommunityTools;
