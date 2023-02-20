import React from 'react';
import {
  OptionsContainer,
  SlidingContainer,
  StyledArrow,
  StyledContainer,
  StyledDivider,
  StyledMenuItem,
  StyledMenuList,
  ToggleContainer,
} from './styles';
import { StyledListItemHeaderText } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileView, setSideNavbarHidden } from './redux/slices';
import { profileView } from './redux/state';
import { useSearchParams } from 'react-router-dom';
import { userRole } from '../../../../utils/enums';
import { MenuItem } from '@mui/material';
import MoodIcon from '@mui/icons-material/Mood';

const SideNavBar = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const usernameUrl = searchParams.get('username');
  const username = useSelector((state) => state.app.username);
  const role = useSelector((state) => state.app.role);
  const hidden = useSelector(
    (state) => state.profile.sideNavbar.sideNavbarHidden
  );

  return (
    <SlidingContainer isHidden={hidden} >
      <OptionsContainer isHidden={hidden} >
        <StyledContainer>
          <MoodIcon style={{ height: '100%', width: '20px' }} />
          <h3>{usernameUrl}</h3>
        </StyledContainer>
        <StyledDivider />
        <h3>PROFIL</h3>
        <StyledMenuList>
          <MenuItem onClick={() => dispatch(setProfileView(profileView.posts))}>
            <StyledListItemHeaderText>Objave</StyledListItemHeaderText>
          </MenuItem>

          {usernameUrl === username || role === userRole.admin ? (
            <MenuItem
              onClick={() => dispatch(setProfileView(profileView.personalData))}
            >
              <StyledListItemHeaderText>Informacije</StyledListItemHeaderText>
            </MenuItem>
          ) : null}
        </StyledMenuList>
        {userRole.admin === role ? (
          <>
            <StyledDivider />
            <h3>ADMIN</h3>

            <StyledMenuList>
              <MenuItem
                onClick={() =>
                  dispatch(setProfileView(profileView.reportedPosts))
                }
              >
                <StyledListItemHeaderText>
                  Prijavljene objave
                </StyledListItemHeaderText>
              </MenuItem>
              <MenuItem
                onClick={() =>
                  dispatch(setProfileView(profileView.reportedComments))
                }
              >
                <StyledListItemHeaderText>
                  Prijavljeni komentari
                </StyledListItemHeaderText>
              </MenuItem>
              <StyledDivider />
            </StyledMenuList>
          </>
        ) : null}
            <StyledMenuItem
              onClick={() => dispatch(setSideNavbarHidden(!hidden))}
            >
              <StyledArrow hidden={hidden} />
            </StyledMenuItem>
      </OptionsContainer>
      <ToggleContainer isHidden={hidden} onClick={() => dispatch(setSideNavbarHidden(!hidden))}>
        <StyledArrow hidden={hidden} />
      </ToggleContainer>
    </SlidingContainer>
  );
};

export default SideNavBar;
