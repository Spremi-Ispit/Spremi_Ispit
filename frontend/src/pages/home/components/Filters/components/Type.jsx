import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../utils/managers/UrlManager';
import { fonts } from '../../../../../theme/fonts';
import { useFetch } from '../../../../../api/useFetch';
import { loadTypes } from '../../../../../api/actions/filters/loadTypes';

const TypeDiv = styled.div`
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

const Type = () => {
  const urlManager = useUrlManager();

  const { urlType, urlSubject } = urlManager.getParams();
  const [types, setTypes] = useState([]);
  const { data, loaded, error, fetch } = useFetch(loadTypes);

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    if (data) {
      setTypes(data);
    }
  }, [data]);

  const handleChange = (event) => {
    urlManager.updateUrlParams([
      { key: allowedUrlParams.type, value: event.target.value },
      { key: allowedUrlParams.examinationPeriod, value: null },
      { key: allowedUrlParams.yearOfExam, value: null },
    ]);
  };

  if (error) {
    return <h1>greska prilikom pribavljanja filtera</h1>;
  }

  return (
    <TypeDiv>
      <Label>Tip</Label>
      <Select value={urlType ?? ''} onChange={handleChange}>
        <option value="">Sve</option>
        {!loaded || types.length === 0 || !urlSubject
          ? null
          : types.map((type) => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
      </Select>
    </TypeDiv>
  );
};

export default Type;
