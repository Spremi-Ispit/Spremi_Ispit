import React from 'react';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { HeadingContainer, StyledH1 } from './styles';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { updateSearchParam } from '../../../../utils/useUpdateSearchParam';
import { urlParams } from '../../../../utils/enums';

export const Heading = () => {
  const state = useSelector((state) => state.viewPost.post);
  const { post } = state;
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedPostIndex = Number(searchParams.get('selectedPostIndex'));
  const totalNumberOfPosts = Number(searchParams.get('totalNumberOfPosts'));

  const handleNextPost = () => {
    const newPostIndex = (selectedPostIndex + 1) % totalNumberOfPosts;
    updateSearchParam(
      urlParams.selectedPostIndex,
      newPostIndex,
      searchParams,
      setSearchParams
    );
  };

  const handlePreviousPost = () => {
    let newPostIndex;
    if (selectedPostIndex - 1 < 0) {
      newPostIndex = totalNumberOfPosts - 1;
    } else {
      newPostIndex = selectedPostIndex - 1;
    }

    updateSearchParam(
      urlParams.selectedPostIndex,
      newPostIndex,
      searchParams,
      setSearchParams
    );
  };

  if (post && selectedPostIndex !== null) {
    return (
      <HeadingContainer>
        <Button variant="outlined" onClick={handlePreviousPost}>
          <ChevronLeftIcon />
        </Button>
        <StyledH1>Objava broj {Number(selectedPostIndex) + 1}</StyledH1>
        <Button variant="outlined" onClick={handleNextPost}>
          <ChevronRightIcon />
        </Button>
      </HeadingContainer>
    );
  } else return <StyledH1>Objava</StyledH1>;
};

export default Heading;
