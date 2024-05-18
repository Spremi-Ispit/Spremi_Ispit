import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../utils/managers/UrlManager';
import { useApiActions } from '../../../api/useApiActions';
import { fonts } from '../../../theme/fonts';

const SubjectDiv = styled.div`
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
export const Subject = ({ onSubjectChange }) => {
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

  useEffect(() => {
    urlManager.updateUrlParams([
      { key: allowedUrlParams.yearOfStudy, value: null },
      { key: allowedUrlParams.department, value: null },
      { key: allowedUrlParams.subject, value: null },
    ]);
    onSubjectChange(null);
  }, []);

  const handleChange = (event) => {
    const subjectName = event.target.value;

    const selectedSubject = subjects.find(
      (subject) => subject.name === subjectName
    );

    urlManager.updateUrlParams([
      { key: allowedUrlParams.subject, value: subjectName },
    ]);
    onSubjectChange(selectedSubject);
  };

  if (error) {
    return <h1>greska prilikom pribavljanja filtera</h1>;
  }

  return (
    <SubjectDiv>
      <Label>Predmet </Label>
      <Select value={urlSubject ?? ''} onChange={handleChange}>
        <option value="">Sve</option>
        {!loaded || subjects.length === 0 || !urlDepartment
          ? null
          : subjects.map((subject) => (
              <option key={subject.id} value={subject.name}>
                {subject.name}
              </option>
            ))}
      </Select>
    </SubjectDiv>
  );
};

export default Subject;
