import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../utils/managers/UrlManager';
import { useApiActions } from '../../../../../api/useApiActions';
import { fonts } from '../../../../../theme/fonts';

const DepartmentDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Label = styled.div`
  margin-bottom: 10px;
  ${fonts(15, 600, 'italic', 'Libre Bodoni')}
`;
const Select = styled.select`
  height: 2em;
  ${fonts(15, 600, 'normal', 'Libre Bodoni')}
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
      { key: allowedUrlParams.commentedPosts, value: null },
    ]);
  };

  if (error) {
    return <h1>greska prilikom pribavljanja filtera</h1>;
  }

  return (
    <DepartmentDiv>
      <Label>Smer</Label>
      <Select value={urlDepartment ?? ''} onChange={handleChange}>
        <option value="">Sve</option>
        {!loaded || departments.length === 0 || !urlYearOfStudy
          ? null
          : departments.map((department) => (
              <option key={department.name} value={department.name}>
                {department.name}
              </option>
            ))}
      </Select>
    </DepartmentDiv>
  );
};

export default Department;
