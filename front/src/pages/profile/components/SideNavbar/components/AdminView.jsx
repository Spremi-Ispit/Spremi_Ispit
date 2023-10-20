import React from 'react';
import styled from 'styled-components';
import { MenuItem, MenuList } from '@mui/material';
import { profileView } from '../../../../../redux/profile/state';

const StyledH3 = styled.h3`
  padding-top: 8px;
  padding-left: 5px;
  color: rgb(209, 205, 205);
  font-size: 0.9rem;
  text-align: left;
`;

const StyledMenuList = styled(MenuList)`
  && {
    padding-top: 0px;
  }
`;

const AdminView = ({ setProfileView }) => {
  return (
    <>
      <StyledH3>ADMIN</StyledH3>
      <StyledMenuList>
        <MenuItem onClick={() => setProfileView(profileView.reportedPosts)}>
          Prijavljene objave
        </MenuItem>
        <MenuItem onClick={() => setProfileView(profileView.reportedComments)}>
          Prijavljeni komentari
        </MenuItem>
      </StyledMenuList>
    </>
  );
};

export default AdminView;
