import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../utils/managers/UrlManager';
import { useApiActions } from '../../../../../api/useApiActions';

const SubjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Subject = () => {
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

  return (
    <SubjectDiv>
      <label>Predmet </label>
      <select value={urlSubject ?? ''} onChange={handleChange}>
        <option value="">Sve</option>
        {!loaded || subjects.length === 0 || !urlDepartment
          ? null
          : subjects.map((subject) => (
              <option key={subject.name} value={subject.name}>
                {subject.name}
              </option>
            ))}
      </select>
    </SubjectDiv>
  );
};

export default Subject;
