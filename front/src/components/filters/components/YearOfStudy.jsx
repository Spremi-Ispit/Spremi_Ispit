import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { FormControl, MenuItem } from '@mui/material';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../utils/managers/UrlManager';
import { useApiActions } from '../../../api/useApiActions';
import { filtersVariant } from '../filtersVariant';

const YearOfStudyDiv = styled.div`
  margin-bottom: 10px;

  .MuiFormControl-root {
    background: white;
  }
`;

/** @param {YearOfStudy.propTypes} props */
export const YearOfStudy = ({ variant }) => {
  const urlManager = useUrlManager();
  const { urlYearOfStudy } = urlManager.getParams();
  const [yearsOfStudy, setYearsOfStudy] = useState([]);
  const { loadYearsOfStudy } = useApiActions();
  const { response, loaded, error, action } = loadYearsOfStudy;

  useEffect(() => {
    if (response) {
      setYearsOfStudy(response);
    }
  }, [response]);

  useEffect(() => {
    if (yearsOfStudy.length === 0) {
      action();
    }
  }, [yearsOfStudy]);

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
      <FormControl size="small" fullWidth variant={variant}>
        <InputLabel>Godina studija</InputLabel>
        <Select
          value={urlYearOfStudy ?? ''}
          label="Godina studija"
          onChange={handleChange}
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

YearOfStudy.propTypes = {
  variant: PropTypes.oneOf(Object.values(filtersVariant)),
};

YearOfStudy.defaultProps = {
  variant: filtersVariant.filled,
};

export default YearOfStudy;
