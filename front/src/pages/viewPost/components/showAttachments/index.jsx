import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { setShowAttachments } from '../../redux/slices';

const ShowAttachments = () => {
  const dispatch = useDispatch();
  const showAttachments = useSelector(
    (state) => state.viewPost.showAttachments
  );

  const handleChange = () => {
    dispatch(setShowAttachments(!showAttachments));
  };

  return (
    <div>
      Prikazi priloge za sve objave
      <Checkbox checked={showAttachments} onChange={handleChange} />
    </div>
  );
};

export default ShowAttachments;
