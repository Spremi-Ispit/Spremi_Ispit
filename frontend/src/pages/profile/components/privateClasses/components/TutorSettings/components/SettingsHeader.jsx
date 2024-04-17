import React from 'react';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

const StyledToolbar = styled(Toolbar)`
  background-color: black;
`;

const SettingsHeader = ({ onClose }) => {
  return (
    <AppBar sx={{ position: 'relative' }}>
      <StyledToolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          Sound
        </Typography>
        <Button autoFocus color="inherit" onClick={onClose}>
          save
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default SettingsHeader;
