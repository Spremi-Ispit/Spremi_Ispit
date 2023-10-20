import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import DialogContainer from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export function Dialog(props) {
  const { message, setMessage } = props;
  useEffect(() => {
    return () => {
      setMessage('');
    };
  }, [setMessage]);

  const onClose = () => {
    setMessage('');
  };

  return (
    <DialogContainer fullScreen={false} open={message !== ''} onClose={onClose}>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} color="primary">
          Zatvori
        </Button>
      </DialogActions>
    </DialogContainer>
  );
}

export default Dialog;
