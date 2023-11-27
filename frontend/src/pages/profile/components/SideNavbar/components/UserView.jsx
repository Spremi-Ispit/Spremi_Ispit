import React from 'react';
import styled from 'styled-components';
import { MenuItem, MenuList } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUsername } from '../../../../../redux/app/selectors';
import { profileView } from '../../../../../redux/profile/state';

const StyledMenuList = styled(MenuList)`
  && {
    padding-top: 0px;
  }
`;

const StyledH3 = styled.h3`
  padding-top: 8px;
  padding-left: 5px;
  padding-bottom: 8px;
  color: rgb(209, 205, 205);
  font-size: 0.9rem;
  text-align: left;
`;

const UserView = ({ urlUsername, setProfileView, isAdmin }) => {
  const username = useSelector(selectUsername);

  const commentedPosts = () => {
    if (urlUsername === username || isAdmin) {
      return (
        <MenuItem onClick={() => setProfileView(profileView.commentedPosts)}>
          Komentarisane objave
        </MenuItem>
      );
    }

    return null;
  };

  const info = () => {
    if (urlUsername === username || isAdmin) {
      return (
        <MenuItem onClick={() => setProfileView(profileView.personalData)}>
          Informacije
        </MenuItem>
      );
    }
    return null;
  };

  return (
    <>
      <StyledH3>PROFIL</StyledH3>
      <StyledMenuList>
        <MenuItem onClick={() => setProfileView(profileView.posts)}>
          Objave
        </MenuItem>
        {commentedPosts()}
        {info()}
      </StyledMenuList>
    </>
  );
};

export default UserView;
