import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import { useAppActions } from '../../../../../redux/useAppActions';
import { useSelector } from 'react-redux';
import { selectPaginationPostPerPage } from '../../../../../redux/home/selectors';

const StyledFormControl = styled(FormControl)`
  && {
    align-self: flex-end;
  }
`;

export const PostsPerPage = () => {
  const postPerPage = useSelector(selectPaginationPostPerPage);
  const { homeActions } = useAppActions();
  const { setPaginationPostPerPage, setPaginationCurrentPage } = homeActions;

  const handlePostNumberChange = (event) => {
    setPaginationPostPerPage(event.target.value);
    setPaginationCurrentPage(1);
  };

  return (
    <StyledFormControl variant="standard">
      <Select value={postPerPage} onChange={handlePostNumberChange}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Broj objava na strani</FormHelperText>
    </StyledFormControl>
  );
};

export default PostsPerPage;
