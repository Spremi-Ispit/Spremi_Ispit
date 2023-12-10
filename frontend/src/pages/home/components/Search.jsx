import React from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import debounce from '../../../utils/debounce';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../utils/managers/UrlManager';

const StyledTextField = styled(TextField)`
  && {
    background: white;
  }
`;

export const Search = () => {
  const urlManager = useUrlManager();
  const { urlSearch } = urlManager.getParams();

  const handleOnChange = (event) => {
    urlManager.updateUrlParam(allowedUrlParams.search, event.target.value);
  };

  return (
    <StyledTextField
      defaultValue={urlSearch}
      label="Pretraga po naslovu ili sadržaju"
      onChange={debounce(handleOnChange, 500)}
      fullWidth
    />
  );
};
export default Search;
