import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../utils/managers/UrlManager';
import { useApiActions } from '../../../../../api/useApiActions';

const ExamDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const YearOfExam = () => {
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

  return (
    <ExamDiv>
      <label>Godina: </label>
      <select value={urlYearOfExam ?? ''} onChange={handleChange}>
        <option value="">Sve</option>
        {!loaded || yearsOfExam.length === 0 || !urlType
          ? null
          : yearsOfExam.map((yearOfExam) => (
              <option key={yearOfExam.name} value={yearOfExam.name}>
                {yearOfExam.name}
              </option>
            ))}
      </select>
    </ExamDiv>
  );
};

export default YearOfExam;
