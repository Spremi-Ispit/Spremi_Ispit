import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../../../../../../../../../utils/managers/UrlManager';
import { fonts } from '../../../../../../../../../../../../../theme/fonts';
import { useFetch } from '../../../../../../../../../../../../../api/useFetch';
import { loadYearsOfStudy } from '../../../../../../../../../../../../../api/actions/filters/loadYearsOfStudy';

const YearOfStudyDiv = styled.div`
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

export const YearOfStudy = () => {
  const urlManager = useUrlManager();
  const { urlYearOfStudy } = urlManager.getParams();
  const [yearsOfStudy, setYearsOfStudy] = useState([]);
  const { data, loaded, error, fetch } = useFetch(loadYearsOfStudy);

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    if (data) {
      setYearsOfStudy(data);
    }
  }, [data]);

  const handleChange = (event) => {
    urlManager.updateUrlParams([
      { key: allowedUrlParams.yearOfStudy, value: event.target.value },
      { key: allowedUrlParams.department, value: null },
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

  if (!loaded || yearsOfStudy.length === 0) {
    return null;
  }

  return (
    <YearOfStudyDiv>
      <Label>Godina studija </Label>
      <Select value={urlYearOfStudy ?? ''} onChange={handleChange}>
        <option value="">Sve</option>
        {yearsOfStudy.map((urlYearOfStudy) => (
          <option key={urlYearOfStudy.name} value={urlYearOfStudy.name}>
            {urlYearOfStudy.name}
          </option>
        ))}
      </Select>
    </YearOfStudyDiv>
  );
};

export default YearOfStudy;
