import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import PropTypes from 'prop-types';
import { FormControl, MenuItem, Select } from '@mui/material';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../utils/managers/UrlManager';
import { useApiActions } from '../../../api/useApiActions';
import { filtersVariant } from '../filtersVariant';

const DepartmentDiv = styled.div`
  margin-bottom: 10px;

  .MuiFormControl-root {
    background: white;
  }
`;

/** @param {Department.propTypes} props */
export const Department = ({ variant }) => {
  const urlManager = useUrlManager();
  const { urlYearOfStudy, urlDepartment } = urlManager.getParams();
  const [departments, setDepartments] = useState([]);
  const { loadDepartments } = useApiActions();
  const { response, loaded, error, action } = loadDepartments;

  useEffect(() => {
    if (urlYearOfStudy) {
      action(urlYearOfStudy);
    }
  }, [urlYearOfStudy]);

  useEffect(() => {
    if (response) {
      setDepartments(response);
    }
  }, [response]);

  const handleChange = (event) => {
    urlManager.updateUrlParams([
      { key: allowedUrlParams.department, value: event.target.value },
      { key: allowedUrlParams.subject, value: null },
      { key: allowedUrlParams.type, value: null },
      { key: allowedUrlParams.examinationPeriod, value: null },
      { key: allowedUrlParams.yearOfExam, value: null },
    ]);
  };

  if (error) {
    return <h1>greska prilikom pribavljanja filtera</h1>;
  }

  if (!loaded || departments.length === 0 || !urlYearOfStudy) {
    return null;
  }

  return (
    <DepartmentDiv>
      <FormControl size="small" fullWidth variant={variant}>
        <InputLabel>Smer</InputLabel>
        <Select
          value={urlDepartment ?? ''}
          label="Smer"
          onChange={handleChange}
        >
          <MenuItem value={''}>Sve</MenuItem>
          {departments.length > 0
            ? departments.map((department) => (
                <MenuItem key={department.name} value={department.name}>
                  {department.name}
                </MenuItem>
              ))
            : null}
        </Select>
      </FormControl>
    </DepartmentDiv>
  );
};

Department.propTypes = {
  variant: PropTypes.oneOf(Object.values(filtersVariant)),
};

Department.defaultProps = {
  variant: filtersVariant.filled,
};

export default Department;
