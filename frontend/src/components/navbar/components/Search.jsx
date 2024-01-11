import React from 'react';
import styled from 'styled-components';
import debounce from '../../../utils/debounce';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../utils/managers/UrlManager';
import search_icon_dark from '../../../assets/search-b.png';
import { homeRoute } from '../../../router/routes';
import { useLocation } from 'react-router-dom';

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 0px 10px;
  border-radius: 50px;
  flex: 1;

  input {
    flex: 1;
    padding: 6px;
    background: transparent;
    border: 0;
    outline: 0;
    color: #222;

    &::placeholder {
      color: #222;
    }
  }

  img {
    width: 20px;
    cursor: pointer;
  }
`;

export const Search = () => {
  const location = useLocation();
  const urlManager = useUrlManager();
  const { urlSearch } = urlManager.getParams();

  const handleOnChange = (event) => {
    urlManager.updateUrlParam(allowedUrlParams.search, event.target.value);
  };

  if (location.pathname !== homeRoute) {
    return null;
  }

  return (
    <SearchDiv>
      <input
        type="text"
        size="4"
        placeholder="Pretraga po naslovu ili sadržaju..."
        defaultValue={urlSearch}
        onChange={debounce(handleOnChange, 500)}
      />
      <img src={search_icon_dark} alt="" />
    </SearchDiv>
  );
};
export default Search;
