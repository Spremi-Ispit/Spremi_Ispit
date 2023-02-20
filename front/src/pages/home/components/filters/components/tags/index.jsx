import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { TagsContainer } from './styles';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { setSelectedTags } from './redux/slices';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllTags } from '../../../../reduxThunk/actions';
import { useSearchParams } from 'react-router-dom';
import { updateSearchParam } from '../../../../../../utils/useUpdateSearchParam';
import { arraysOfObjectsEqualDeep } from '../../../../../../utils/arraysOfObjectsEqualDeep';
import { urlParams } from '../../../../../../utils/enums';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Tags = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.home.tags);
  const { selectedTags, allTags } = state;
  const [searchParams, setSearchParams] = useSearchParams();
  const urlTags = searchParams.getAll(urlParams.tags);

  useEffect(() => {
    if (allTags.length > 0) {
      const selectTags = urlTags[0]
        ? allTags.filter((oneTag) => urlTags[0].includes(oneTag.tag))
        : [];

      if (!arraysOfObjectsEqualDeep(selectTags, selectedTags)) {
        dispatch(setSelectedTags(selectTags));
      }
    }
  }, [allTags, urlTags, selectedTags, dispatch]);

  const handleOnChange = (event, value) => {
    if (value) {
      updateSearchParam(
        urlParams.tags,
        value.map((selectedTag) => selectedTag.tag),
        searchParams,
        setSearchParams
      );
    }
  };

  useEffect(() => {
    dispatch(loadAllTags());
  }, [dispatch]);

  return (
    <TagsContainer>
      <Autocomplete
        multiple
        onChange={handleOnChange}
        value={allTags.filter((tag) =>
          selectedTags.some((selectedTag) => selectedTag.id === tag.id)
        )}
        id="checkboxes-tags"
        options={allTags}
        disableCloseOnSelect
        getOptionLabel={(option) => option.tag}
        renderOption={(props, option, { selected }) => {
          return (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.tag}
            </li>
          );
        }}
        style={{ width: '100%', background: 'white' }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Odaberi godinu, smer, predmet..."
            placeholder="Odabrani tagovi"
          />
        )}
      />
    </TagsContainer>
  );
};

export default Tags;
