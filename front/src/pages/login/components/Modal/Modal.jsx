import React from 'react';
import './Modal.css';
import { Input } from '@mui/material';
import close from '../../../../assets/close.png';
import { useApiActions } from '../../../../api/useApiActions';
import ErrorDialog from '../../../../components/dialogs/ErrorDialog';

function Modal({ setOpenModal }) {
  const { resetPassword } = useApiActions();

  const { action, loaded, error, setError } = resetPassword;

  const handleSubmit = () => {
    action('darjandrugarinovic@gmail.com');
  };

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  if (loaded) {
    alert('Mail with reset code has been sent');
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <img src={close} alt="close" />
          </button>
        </div>
        <div className="title">
          <h1>Do you want us to send you an email to the old password?</h1>
        </div>
        <div className="body">
          <div>
            <p>Enter e-mail</p>
            <Input
              placeholder="Email"
              fullWidth
              type="email"
              margin="normal"
              variant="outlined"
              autoComplete="Email"
            />
          </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="btnCancel"
          >
            Cancel
          </button>
          <button className="btnCancel" onClick={handleSubmit}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
