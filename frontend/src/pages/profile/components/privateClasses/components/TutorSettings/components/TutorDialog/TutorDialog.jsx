import React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Filters from './components/Filters/Filters';
import TutorSubjects from './components/TutorSubjects/TutorSubjects';
import TutorInfo from './components/TutorInfo';
import EnableTutor from './components/EnableTutor';

const StyledToolbar = styled(Toolbar)`
  background-color: black;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogBodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
`;

const TutorDialog = ({ onClose, open }) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
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
            Postani predavač
          </Typography>
          <Button autoFocus color="inherit" onClick={onClose}>
            save
          </Button>
        </StyledToolbar>
      </AppBar>
      <DialogBodyDiv>
        <Filters />
        <TutorSubjects />
        <TutorInfo />
        <EnableTutor />
      </DialogBodyDiv>
    </Dialog>
  );
};

export default TutorDialog;
