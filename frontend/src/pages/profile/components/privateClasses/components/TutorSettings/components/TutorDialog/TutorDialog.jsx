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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import Filters from './components/Filters/Filters';
import { useApiActions } from '../../../../../../../../api/useApiActions';
import { useTableColumns } from './hooks/useTableColumns';
import Table from '../../../../../../../../components/Table';
import ErrorDialog from '../../../../../../../../components/dialogs/ErrorDialog';
import Loader from '../../../../../../../../components/Loader';

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

const ActiveTutorDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const TutorDialog = ({ onClose, open }) => {
  const { getTutoringRequests } = useApiActions();
  const { loading, loaded, error, setError, action, response } =
    getTutoringRequests;
  const [givenClasses, setGivenClasses] = useState([]);
  const columns = useTableColumns();

  useEffect(() => {
    if (response) {
      setGivenClasses(response);
    }
  }, [response]);

  useEffect(() => {
    action();
  }, []);

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  if (loading) {
    return <Loader />;
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
            Sound
          </Typography>
          <Button autoFocus color="inherit" onClick={onClose}>
            save
          </Button>
        </StyledToolbar>
      </AppBar>
      <DialogBodyDiv>
        <Filters />
        <Table columns={columns} payload={givenClasses} />
        <h3>Polje za cenu</h3>
        <h3>Polje za opis</h3>
        <ActiveTutorDiv>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Aktivan predavač"
            />
            <FormHelperText>
              Dok je ovo dugme čekirano tvoji predmeti će biti vidljivi u
              privatnoj nastavi
            </FormHelperText>
          </FormGroup>
        </ActiveTutorDiv>
      </DialogBodyDiv>
    </Dialog>
  );
};

export default TutorDialog;
