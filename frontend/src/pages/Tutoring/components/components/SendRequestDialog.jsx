import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { Autocomplete, Stack, TextField, TextareaAutosize } from '@mui/material';
import Button from '../../../../components/buttons/Button';
import { useApiActions } from '../../../../api/useApiActions';
import Loader from '../../../../components/Loader';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const SendRequestDialog = ({ onClose, open, subjects, tutorId, onSuccess, onError }) => {
    const { createTutorRequest } = useApiActions();
    const { error, setError, action, response, loading } = createTutorRequest;

    const subjectsMapped = subjects.map((subject) => {
        return { id: subject.id, label: subject.name };
    });
    let subjectId = -1;
    let text = '';

    const handleChangeSubject = (event, value, reson) => {
        subjectId = value.id;
    }

    const handleChangeText = (event) => {
        text = event.target.value;
    }

    const sendRequest = () => {
        let data = {
            "tutorId": tutorId,
            "subjectId": subjectId,
            "message": text
        };
        action(data).then((res) => {
            if (response) {
                onSuccess(response);
            } else if (error) {
                onError(error);
            }
        });
    }

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
            {loading && <Loader />}
            {!loading && <Stack sx={{ mx: '10%', my: '10px' }} spacing={3}>
                <StyledAutocomplete disablePortal
                    options={subjectsMapped}
                    onChange={handleChangeSubject}
                    renderInput={(params) => (
                        <TextField {...params} placeholder="Predmet" />
                    )} />
                <TextAreaNoResize onChange={handleChangeText} minRows={4} sx={{ maxWidth: '100%', width: '100%' }} placeholder='Poruka nastavniku...' />
                <Button onClick={sendRequest}>Zahtevaj čas</Button>
            </Stack>}
        </Dialog>
    );
}
const TextAreaNoResize = styled(TextareaAutosize)`
    resize: none;  
`;
const StyledAutocomplete = styled(Autocomplete)`
  background-color: white;
  margin: 10px;
`;

const StyledToolbar = styled(Toolbar)`
  background-color: black;
`;

export default SendRequestDialog;