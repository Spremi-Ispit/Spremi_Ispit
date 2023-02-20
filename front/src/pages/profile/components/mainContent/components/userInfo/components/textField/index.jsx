import React from 'react';
import { StyledFormControl } from './styles';
import EditIcon from '@mui/icons-material/Edit';
import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

export const TextField = ({ value, label, clb, editable }) => {
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
                onClick={clb}
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

export default TextField;
