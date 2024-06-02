import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../utils/managers/UrlManager';
import { fonts } from '../../../../../theme/fonts';
import { useFetch } from '../../../../../api/useFetch';
import { loadSubjects } from '../../../../../api/actions/filters/loadSubjects';

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
export const Subject = () => {
  const urlManager = useUrlManager();
  const { urlYearOfStudy, urlDepartment, urlSubject } = urlManager.getParams();
  const [subjects, setSubjects] = useState([]);

  const { data, loaded, error, fetch } = useFetch(loadSubjects);

  useEffect(() => {
    if (urlDepartment) {
      fetch(urlYearOfStudy, urlDepartment);
    }
  }, [urlDepartment]);

  useEffect(() => {
    if (data) {
      setSubjects(data);
    }
  }, [data]);

  const handleChange = (event) => {
    urlManager.updateUrlParams([
      { key: allowedUrlParams.subject, value: event.target.value },
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
    <SubjectDiv>
      <Label>Predmet </Label>
      <Select value={urlSubject ?? ''} onChange={handleChange}>
        <option value="">Sve</option>
        {!loaded || subjects.length === 0 || !urlDepartment
          ? null
          : subjects.map((subject) => (
              <option key={subject.name} value={subject.name}>
                {subject.name}
              </option>
            ))}
      </Select>
    </SubjectDiv>
  );
};

export default Subject;
