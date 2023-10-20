import React from 'react';
import styled from 'styled-components';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButtonMUI from '@mui/material/IconButton';

export const IconButton2 = styled(IconButtonMUI)`
  && {
    background-color: white;
  }
`;

export const LeftArrow = ({ files, activeFileIndex, setActiveFileIndex }) => {
  const handlePrevClick = () => {
    if (files.length > 1) {
      if (activeFileIndex > 0) {
        setActiveFileIndex((prev) => prev - 1);
      } else {
        setActiveFileIndex(files.length - 1);
      }
    }
  };

  if (files.length > 1) {
    return (
      <IconButtonMUI onClick={handlePrevClick}>
        <ChevronLeftIcon />
      </IconButtonMUI>
    );
  }

  return null;
};

export default LeftArrow;
