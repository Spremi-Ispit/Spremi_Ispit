import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import styled from 'styled-components';
import { FormControl, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../utils/managers/UrlManager';
import { filtersVariant } from '../filtersVariant';
import { useApiActions } from '../../../api/useApiActions';

const ExaminationPeriodDiv = styled.div`
  margin-bottom: 10px;

  .MuiFormControl-root {
    background: white;
  }
`;

/** @param {ExaminationPeriod.propTypes} props */
const ExaminationPeriod = ({ variant }) => {
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

  if (!loaded || examinationPeriods.length === 0 || !urlType) {
    return null;
  }

  return (
    <ExaminationPeriodDiv>
      <FormControl size="small" fullWidth variant={variant}>
        <InputLabel>Ispitni rok</InputLabel>
        <Select
          value={urlExaminationPeriod ?? ''}
          label="Ispitni rok"
          onChange={handleChange}
        >
          <MenuItem value={''}>Sve</MenuItem>
          {examinationPeriods.length > 0
            ? examinationPeriods.map((examinationPeriod) => (
                <MenuItem
                  key={examinationPeriod.name}
                  value={examinationPeriod.name}
                >
                  {examinationPeriod.name}
                </MenuItem>
              ))
            : null}
        </Select>
      </FormControl>
    </ExaminationPeriodDiv>
  );
};

ExaminationPeriod.propTypes = {
  variant: PropTypes.oneOf(Object.values(filtersVariant)),
};

ExaminationPeriod.defaultProps = {
  variant: filtersVariant.filled,
};

export default ExaminationPeriod;
