import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import debounce from '../../../../../../utils/debounce';
import { setSearch } from '../../../../redux/slices';
import { useSearchParams } from 'react-router-dom';
import { updateSearchParam } from '../../../../../../utils/useUpdateSearchParam';
import { urlParams } from '../../../../../../utils/enums';
import { StyledTextField } from './styles';

const Search = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearch = searchParams.get(urlParams.search);

  useEffect(() => {
    if (urlSearch) {
      dispatch(setSearch(urlSearch));
    } else {
      dispatch(setSearch(''));
    }
  }, [urlSearch, dispatch]);

  const handleOnChange = (event) => {
    updateSearchParam(
      urlParams.search,
      event.target.value,
      searchParams,
      setSearchParams
    );
  };

  return (
    <StyledTextField
      label="Pretraga po naslovu ili sadržaju"
      onChange={debounce(handleOnChange, 500)}
    />
  );
};
export default Search;
