import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { FormControl, MenuItem } from '@mui/material';
import styled from 'styled-components';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../../../utils/managers/UrlManager';
import { useApiActions } from '../../../../../../../api/useApiActions';

const YearOfStudyDiv = styled.div`
  margin-bottom: 10px;

  .MuiFormControl-root {
    background: white;
  }
`;

export const YearOfStudy = () => {
  const urlManager = useUrlManager();
  const { urlYearOfStudy } = urlManager.getParams();
  const [yearsOfStudy, setYearsOfStudy] = useState([]);
  const { loadYearsOfStudy } = useApiActions();
  const { response, loaded, error, action } = loadYearsOfStudy;

  useEffect(() => {
    action();
  }, []);

  useEffect(() => {
    if (response) {
      setYearsOfStudy(response);
    }
  }, [response]);

  const handleChange = (event) => {
    urlManager.updateUrlParams([
      { key: allowedUrlParams.yearOfStudy, value: event.target.value },
      { key: allowedUrlParams.department, value: null },
      { key: allowedUrlParams.subject, value: null },
      { key: allowedUrlParams.type, value: null },
      { key: allowedUrlParams.examinationPeriod, value: null },
      { key: allowedUrlParams.yearOfExam, value: null },
    ]);
  };

  if (error) {
    return <h1>greska prilikom pribavljanja filtera</h1>;
  }

  if (!loaded || yearsOfStudy.length === 0) {
    return null;
  }

  return (
    <YearOfStudyDiv>
      <FormControl size="small" fullWidth variant="standard">
        <InputLabel shrink>Godina studija</InputLabel>
        <Select
          value={urlYearOfStudy ?? ''}
          label="Godina studija"
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value={''}>Sve</MenuItem>
          {yearsOfStudy.map((urlYearOfStudy) => (
            <MenuItem key={urlYearOfStudy.name} value={urlYearOfStudy.name}>
              {urlYearOfStudy.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </YearOfStudyDiv>
  );
};

export default YearOfStudy;
