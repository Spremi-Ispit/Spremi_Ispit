import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../utils/managers/UrlManager';
import { useApiActions } from '../../../../../api/useApiActions';

const YearOfStudyDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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
      <label>Godina studija </label>
      <select value={urlYearOfStudy ?? ''} onChange={handleChange}>
        <option value="">Sve</option>
        {yearsOfStudy.map((urlYearOfStudy) => (
          <option key={urlYearOfStudy.name} value={urlYearOfStudy.name}>
            {urlYearOfStudy.name}
          </option>
        ))}
      </select>
    </YearOfStudyDiv>
  );
};

export default YearOfStudy;
