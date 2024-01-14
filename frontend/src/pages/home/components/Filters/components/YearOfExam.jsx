import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../utils/managers/UrlManager';
import { useApiActions } from '../../../../../api/useApiActions';
import { fonts } from '../../../../../theme/fonts';

const ExamDiv = styled.div`
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
      <Label>Godina</Label>
      <Select value={urlYearOfExam ?? ''} onChange={handleChange}>
        <option value="">Sve</option>
        {!loaded || yearsOfExam.length === 0 || !urlType
          ? null
          : yearsOfExam.reverse().map((yearOfExam) => (
              <option key={yearOfExam.name} value={yearOfExam.name}>
                {yearOfExam.name}
              </option>
            ))}
      </Select>
    </ExamDiv>
  );
};

export default YearOfExam;
