import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';

export const RightArrow = ({ files, activeFileIndex, setActiveFileIndex }) => {
  const handleNextClick = () => {
    if (files.length > 1) {
      if (activeFileIndex < files.length - 1) {
        setActiveFileIndex((prev) => prev + 1);
      } else {
        setActiveFileIndex(0);
      }
    }
  };

  return files.length > 1 ? (
    <IconButton onClick={handleNextClick}>
      <ChevronRightIcon />
    </IconButton>
  ) : null;
};

export default RightArrow;
