import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import { FormControl, MenuItem, Select } from '@mui/material';
import styled from 'styled-components';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../../../utils/managers/UrlManager';
import { useFetch } from '../../../../../../../api/useFetch';
import { loadTypes } from '../../../../../../../api/actions/filters/loadTypes';

const TypeDiv = styled.div`
  margin-bottom: 10px;

  .MuiFormControl-root {
    background: white;
  }
`;

const Type = () => {
  const urlManager = useUrlManager();

  const { urlType, urlSubject } = urlManager.getParams();
  const [types, setTypes] = useState([]);
  const { data, loaded, error, fetch } = useFetch(loadTypes);

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    if (data) {
      setTypes(data);
    }
  }, [data]);

  const handleChange = (event) => {
    urlManager.updateUrlParams([
      { key: allowedUrlParams.type, value: event.target.value },
      { key: allowedUrlParams.examinationPeriod, value: null },
      { key: allowedUrlParams.yearOfExam, value: null },
    ]);
  };

  if (error) {
    return <h1>greska prilikom pribavljanja filtera</h1>;
  }

  if (!loaded || types.length === 0 || !urlSubject) {
    return null;
  }

  return (
    <TypeDiv>
      <FormControl size="small" fullWidth variant={'standard'}>
        <InputLabel shrink>Tip</InputLabel>
        <Select
          value={urlType ?? ''}
          label="Tip"
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value={''}>Sve</MenuItem>
          {types.length > 0
            ? types.map((type) => (
                <MenuItem key={type.name} value={type.name}>
                  {type.name}
                </MenuItem>
              ))
            : null}
        </Select>
      </FormControl>
    </TypeDiv>
  );
};

export default Type;
