import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';

function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export const Error = ({ error }) => {
  useEffect(() => {
    console.log(error);
  });

  return (
    <Alert variant="filled" severity="error">
      {isJsonString(error)
        ? `${JSON.parse(error).message}\nFor more details open developer tools.`
        : error.toString()}
    </Alert>
  );
};

export default Error;
