import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const AlertDialog = ({
  title,
  description,
  open,
  setOpen,
  handleSubmit,
}) => {
  const handleAgree = () => {
    setOpen(false);
    handleSubmit();
  };

  const handleDisagree = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleDisagree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree}>Odustani</Button>
          <Button onClick={handleAgree} autoFocus>
            Potvrdi
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
