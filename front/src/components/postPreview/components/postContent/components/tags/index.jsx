import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { homeRoute } from '../../../../../../app/router/routes';
import { urlParams } from '../../../../../../utils/enums';
import { updateSearchParam } from '../../../../../../utils/useUpdateSearchParam';
import { StyledChip } from './styles';

const Tags = (props) => {
  const { tags } = props;
  const state = useSelector((state) => state.home.tags);
  const { selectedTags } = state;
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleClick = (e, tag) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    if (location.pathname !== homeRoute) return;

    const exists = selectedTags.find(
      (selectedTag) => selectedTag.id === tag.id
    );
    if (!exists) {
      updateSearchParam(
        urlParams.tags,
        [...selectedTags, tag].map((selectedTag) => selectedTag.tag),
        searchParams,
        setSearchParams
      );
    } else {
      updateSearchParam(
        urlParams.tags,
        selectedTags
          .filter((selectedTag) => selectedTag.id !== tag.id)
          .map((selectedTag) => selectedTag.tag),
        searchParams,
        setSearchParams
      );
    }
  };

  return (
    <div>
      {tags.map((tag, index) => (
        <StyledChip
          label={tag.tag}
          key={index}
          onMouseDown={(e) => handleClick(e, tag)}
        />
      ))}
    </div>
  );
};

export default Tags;
