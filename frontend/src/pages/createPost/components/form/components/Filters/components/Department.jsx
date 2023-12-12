import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import { FormControl, MenuItem, Select } from '@mui/material';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../../../utils/managers/UrlManager';
import { useApiActions } from '../../../../../../../api/useApiActions';

const DepartmentDiv = styled.div`
  margin-bottom: 10px;

  .MuiFormControl-root {
    background: white;
  }
`;

export const Department = () => {
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
      <FormControl size="small" fullWidth variant={'standard'}>
        <InputLabel shrink>Smer</InputLabel>
        <Select
          value={urlDepartment ?? ''}
          label="Smer"
          onChange={handleChange}
          displayEmpty
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

export default Department;
