import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';

const StyledFormControl = styled(FormControl)`
  && {
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: white;
  }
`;

export const MyTextField = ({ value, label, onEdit, editable }) => {
  return (
    <StyledFormControl variant="outlined" disabled>
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        value={value}
        id="outlined-adornment-password"
        type={'text'}
        endAdornment={
          editable ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={onEdit}
                onMouseDown={(event) => {
                  event.preventDefault();
                }}
                edge="end"
              >
                <EditIcon />
              </IconButton>
            </InputAdornment>
          ) : null
        }
        label={label}
      />
    </StyledFormControl>
  );
};

export default MyTextField;
