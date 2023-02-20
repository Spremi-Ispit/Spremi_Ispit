import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';

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

  return files.length > 1 ? (
    <IconButton onClick={handlePrevClick}>
      <ChevronLeftIcon />
    </IconButton>
  ) : null;
};

export default LeftArrow;
