import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import { StyledFormControl } from './styles';
import { setCurrentPage, setPostPerPage } from '../../../../redux/slices';
import { loadPostsForHomepageFilters } from '../../../../reduxThunk/actions';

const PostsPerPage = () => {
  const dispatch = useDispatch();
  const postPerPage = useSelector((state) => state.home.postPerPage);

  const handlePostNumberChange = (event) => {
    dispatch(setPostPerPage(event.target.value));
    dispatch(setCurrentPage(1));
    dispatch(loadPostsForHomepageFilters());
  };

  return (
    <StyledFormControl variant="standard">
      <Select
        // value={postsNumber}
        value={postPerPage}
        onChange={handlePostNumberChange}
      >
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
