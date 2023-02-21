import React, { useEffect } from 'react';
import { Container, StyledSelect, StyledMenuItem, StyledImage } from './styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../../../../redux/slices';
import { urlParams, postType } from '../../../../../../utils/enums';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import {
  updateSearchParam,
  editSearchParams,
} from '../../../../../../utils/useUpdateSearchParam';
import { assets } from '../../../../../../assets';

const ScrollableTabs = () => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.home.type);
  const [searchParams, setSearchParams] = useSearchParams();
  const urlType = searchParams.get(urlParams.type);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event) => {
    updateSearchParam(
      urlParams.type,
      event.target.value,
      searchParams,
      setSearchParams
    );
  };

  useEffect(() => {
    if (urlType && urlType !== type) {
      dispatch(setType(urlType));
    } else {
      const newSearchParams = editSearchParams(
        urlParams.type,
        type,
        searchParams
      );

      navigate(
        {
          pathname: location.pathname,
          search: newSearchParams,
        },
        { replace: true }
      );
    }
  }, [
    urlType,
    dispatch,
    searchParams,
    setSearchParams,
    type,
    location.pathname,
    navigate,
  ]);

  return (
    <Container>
      <FormControl>
        <InputLabel>Tip</InputLabel>
        <StyledSelect value={type} label="Tip" onChange={handleChange}>
          <StyledMenuItem value={postType.all}>Sve</StyledMenuItem>
          <StyledMenuItem value={postType.question}>
            Pitanja <StyledImage src={assets.postType.question} />
          </StyledMenuItem>
          <StyledMenuItem value={postType.material}>
            Materijali <StyledImage src={assets.postType.book} />
          </StyledMenuItem>
        </StyledSelect>
      </FormControl>
    </Container>
  );
};

export default ScrollableTabs;
