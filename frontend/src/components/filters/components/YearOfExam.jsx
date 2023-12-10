import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormControl, MenuItem, Select } from '@mui/material';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../utils/managers/UrlManager';
import { filtersVariant } from '../enums';
import { useApiActions } from '../../../api/useApiActions';

const ExamDiv = styled.div`
  margin-bottom: 10px;

  .MuiFormControl-root {
    background: white;
  }
`;

/** @param {YearOfExam.propTypes} props */
export const YearOfExam = ({ variant }) => {
  const urlManager = useUrlManager();
  const [yearsOfExam, setYearsOfExam] = useState([]);
  const { urlYearOfExam, urlType } = urlManager.getParams();
  const { loadYearOfExams } = useApiActions();
  const { response, loaded, error, action } = loadYearOfExams;

  useEffect(() => {
    action();
  }, []);

  useEffect(() => {
    if (response) {
      setYearsOfExam(response);
    }
  }, [response]);

  const handleChange = (event) => {
    urlManager.updateUrlParam(allowedUrlParams.yearOfExam, event.target.value);
  };

  if (error) {
    return <h1>greska prilikom pribavljanja filtera</h1>;
  }

  if (!loaded || yearsOfExam.length === 0 || !urlType) {
    return null;
  }

  return (
    <ExamDiv>
      <FormControl size="small" fullWidth variant={variant}>
        <InputLabel shrink>Godina</InputLabel>
        <Select
          value={urlYearOfExam ?? ''}
          label="Godina"
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value={''}>Sve</MenuItem>
          {yearsOfExam.length > 0
            ? yearsOfExam.map((yearOfExam) => (
                <MenuItem key={yearOfExam.name} value={yearOfExam.name}>
                  {yearOfExam.name}
                </MenuItem>
              ))
            : null}
        </Select>
      </FormControl>
    </ExamDiv>
  );
};

YearOfExam.propTypes = {
  variant: PropTypes.oneOf(Object.values(filtersVariant)),
};

YearOfExam.defaultProps = {
  variant: filtersVariant.filled,
};

export default YearOfExam;
