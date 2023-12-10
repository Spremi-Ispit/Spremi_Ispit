import React from 'react';
import styled from 'styled-components';
import debounce from '../../../utils/debounce';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../utils/managers/UrlManager';

const SearchDiv = styled.div`
  width: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  height: 40px;
`;

const SearchInput = styled.input`
  flex: 1;
  max-width: 600px;
  padding: 0px 10px;
`;

export const Search = () => {
  const urlManager = useUrlManager();
  const { urlSearch } = urlManager.getParams();

  const handleOnChange = (event) => {
    urlManager.updateUrlParam(allowedUrlParams.search, event.target.value);
  };

  return (
    <SearchDiv>
      <SearchInput
        defaultValue={urlSearch}
        type="text"
        placeholder="Pretraga po naslovu ili sadržaju.."
        onChange={debounce(handleOnChange, 500)}
      />
    </SearchDiv>
  );
};
export default Search;
