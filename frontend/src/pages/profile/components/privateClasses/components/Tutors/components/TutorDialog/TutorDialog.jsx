import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import AddSubject from './components/AddSubject/AddSubject';
import TutorSubjects from './components/TutorSubjects/TutorSubjects';
import EnableTutor from './components/EnableTutor';
import TutorDescription from './components/TutorDescription';
import TutorPrice from './components/TutorPrice';
import { useFetchOnLoad } from '../../../../../../../../api/useFetch';
import { getTutor } from '../../../../../../../../api/tutor/getTutor';

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

const TutorDialog = ({ onClose, open, tutorId }) => {
  const [tutor, setTutor] = useState(null);
  const { data, error, refetch, loading } = useFetchOnLoad(() =>
    getTutor(tutorId)
  );
  const [reloadSubjects, setReloadSubjects] = useState(false);

  useEffect(() => {
    if (data) {
      console.log(data);
      setTutor(data);
    }
  }, [data]);

  // const { id, phone, description, price, enabled, rating, subjects } = tutor;
  // {
  //   id: 1,
  //   phone: '123',
  //   description: 'SVE ZNAM dodji na cas',
  //   price: { personally: 1500, group: 700 },
  //   enabled: true,
  //   rating: [],
  //   subjects: [
  //     { id: 26, name: 'Digitalna elektronika' },
  //     { id: 16, name: 'Digitalna elektronika' },
  //     { id: 13, name: 'Arhitektura i organizacija računara 1' }
  //   ]
  // },

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
        <AddSubject reloadSubjects={() => setReloadSubjects(true)} />
        {tutor && (
          <TutorSubjects tutorId={tutor.id} reloadSubjects={reloadSubjects} />
        )}
        {/* <TutorDescription description={message} /> */}
        {/* <TutorPrice price={price} groupPrice={groupPrice} /> */}
        <EnableTutor />
      </DialogBodyDiv>
    </Dialog>
  );
};

export default TutorDialog;
