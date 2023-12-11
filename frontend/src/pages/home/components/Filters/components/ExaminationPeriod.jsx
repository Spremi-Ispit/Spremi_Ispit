import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../utils/managers/UrlManager';
import { useApiActions } from '../../../../../api/useApiActions';

const ExaminationPeriodDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ExaminationPeriod = () => {
  const urlManager = useUrlManager();

  const { loadExaminationPeriods } = useApiActions();
  const { response, loaded, error, action } = loadExaminationPeriods;

  const { urlExaminationPeriod, urlType } = urlManager.getParams(
    allowedUrlParams.examinationPeriod
  );
  const [examinationPeriods, setExaminationPeriods] = useState([]);

  useEffect(() => {
    action();
  }, []);

  useEffect(() => {
    if (response) {
      setExaminationPeriods(response);
    }
  }, [response]);

  const handleChange = (event) => {
    urlManager.updateUrlParam(
      allowedUrlParams.examinationPeriod,
      event.target.value
    );
  };

  if (error) {
    return <h1>greska prilikom pribavljanja filtera</h1>;
  }

  return (
    <ExaminationPeriodDiv>
      <label>Ispitni rok: </label>
      <select value={urlExaminationPeriod ?? ''} onChange={handleChange}>
        <option value="">Sve</option>
        {!loaded || examinationPeriods.length === 0 || !urlType
          ? null
          : examinationPeriods.map((examinationPeriod) => (
              <option
                key={examinationPeriod.name}
                value={examinationPeriod.name}
              >
                {examinationPeriod.name}
              </option>
            ))}
      </select>
    </ExaminationPeriodDiv>
  );
};

export default ExaminationPeriod;
