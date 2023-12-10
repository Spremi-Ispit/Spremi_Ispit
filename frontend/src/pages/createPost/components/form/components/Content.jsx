import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const StyledTextareaAutosize = styled(TextareaAutosize)`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  font-size: 1rem;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  margin-bottom: 10px;
  padding: 10px;
`;

export const Content = ({ setDescription }) => {
  const handleTextareaChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  return (
    <StyledTextareaAutosize minRows={10} onChange={handleTextareaChange} />
  );
};

export default Content;
