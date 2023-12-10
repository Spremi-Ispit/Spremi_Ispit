import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';

const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 10px;
  }
`;

export const Title = ({ setTitle }) => {
  const handleTtileChange = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  return (
    <StyledTextField label="Naslov" fullWidth onChange={handleTtileChange} />
  );
};

export default Title;
