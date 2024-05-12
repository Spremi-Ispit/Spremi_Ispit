import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { Stack, TextareaAutosize } from '@mui/material';
import Button from '../../../../components/buttons/Button';
import { useUrlManager } from '../../../../utils/managers/UrlManager';
import { images } from '../../../../constants';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SendRequestDialog = ({ onClose, open, subjects, tutorId }) => {
  const urlManager = useUrlManager();
  const { urlSubject } = urlManager.getParams();
  const [classType, setClassType] = useState('individualni');

  const message = () =>
    `Želim da zakažem ${classType} čas iz predmeta ${urlSubject} kod predavača čiji je ID=${tutorId}`;

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
            Zahtevaj čas
          </Typography>
        </StyledToolbar>
      </AppBar>
      <Stack sx={{ mx: '10%', my: '10px' }} spacing={3}>
        <ClassDiv>
          <p>Čas:</p>
          <RadioButtonsDiv>
            <div>
              <input
                type="radio"
                id="individual"
                name="class"
                value="individualni"
                defaultChecked
                onChange={(ev) => setClassType(ev.target.value)}
              />
              <label htmlFor="individual">Individualni</label>
            </div>
            <div>
              <input
                type="radio"
                id="group"
                name="class"
                value="grupni"
                onChange={(ev) => setClassType(ev.target.value)}
              />
              <label htmlFor="group">Grupni</label>
            </div>
          </RadioButtonsDiv>
        </ClassDiv>
        <TextAreaNoResize
          minRows={4}
          sx={{ maxWidth: '100%', width: '100%' }}
          value={message()}
          disabled
        />
        <TutorButton
          onClick={() => {
            location.href = `https://wa.me/381607154400?text=${message()}`;
          }}
        >
          <WhatsAppImg src={images.WhatsApp1} />
          <h4>Pošalji poruku</h4>
        </TutorButton>
      </Stack>
    </Dialog>
  );
};

const TutorButton = styled(Button)`
  background-color: #32d851;
  color: white;
  gap: 5px;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 2px;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 2px;
    color: white;
    background-color: #32d851;
  }
`;

const WhatsAppImg = styled.img`
  width: 24px;
  height: 24px;
`;

const RadioButtonsDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const ClassDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const TextAreaNoResize = styled(TextareaAutosize)`
  resize: none;
`;

const StyledToolbar = styled(Toolbar)`
  background-color: black;
`;

const StyledAppBar = styled(AppBar)``;

export default SendRequestDialog;
