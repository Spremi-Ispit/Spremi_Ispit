import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export const ErrorDialog = ({ error }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(true);
  }, [error]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Error</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ whiteSpace: 'break-spaces' }}>
          {isJsonString(error)
            ? `${
                JSON.parse(error).message
              }\nFor more details open developer tools.`
            : error.toString()}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Zatvori
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorDialog;
