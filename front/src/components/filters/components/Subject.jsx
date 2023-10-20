import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';
import PropTypes from 'prop-types';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../utils/managers/UrlManager';
import { filtersVariant } from '../filtersVariant';
import { useApiActions } from '../../../api/useApiActions';

const SubjectDiv = styled.div`
  margin-bottom: 10px;

  .MuiFormControl-root {
    background: white;
  }
`;

/** @param {Subject.propTypes} props */
export const Subject = ({ variant }) => {
  const urlManager = useUrlManager();
  const { urlYearOfStudy, urlDepartment, urlSubject } = urlManager.getParams();
  const [subjects, setSubjects] = useState([]);
  const { loadSubjects } = useApiActions();
  const { response, loaded, error, action } = loadSubjects;

  useEffect(() => {
    if (urlDepartment) {
      action(urlYearOfStudy, urlDepartment);
    }
  }, [urlDepartment]);

  useEffect(() => {
    if (response) {
      setSubjects(response);
    }
  }, [response]);

  const handleChange = (event) => {
    urlManager.updateUrlParams([
      { key: allowedUrlParams.subject, value: event.target.value },
      { key: allowedUrlParams.type, value: null },
      { key: allowedUrlParams.examinationPeriod, value: null },
      { key: allowedUrlParams.yearOfExam, value: null },
    ]);
  };

  if (error) {
    return <h1>greska prilikom pribavljanja filtera</h1>;
  }

  if (!loaded || subjects.length === 0 || !urlDepartment) {
    return null;
  }

  return (
    <SubjectDiv>
      <FormControl size="small" fullWidth variant={variant}>
        <InputLabel>Predmet</InputLabel>
        <Select
          value={urlSubject ?? ''}
          label="Predmet"
          onChange={handleChange}
        >
          <MenuItem value={''}>Sve</MenuItem>
          {subjects.length > 0
            ? subjects.map((subject) => (
                <MenuItem key={subject.name} value={subject.name}>
                  {subject.name}
                </MenuItem>
              ))
            : null}
        </Select>
      </FormControl>
    </SubjectDiv>
  );
};

Subject.propTypes = {
  variant: PropTypes.oneOf(Object.values(filtersVariant)),
};

Subject.defaultProps = {
  variant: filtersVariant.filled,
};

export default Subject;
