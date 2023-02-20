import styled from 'styled-components';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export const StyledMenuItem = styled(MenuItem)`
  && {
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  margin-top: 20px;

  .MuiFormControl-root {
    width: 135px;
  }

  .MuiInputBase-root {
    background: white;
  }

  @media (max-width: 650px) {
    width: 100%;

    .MuiFormControl-root {
      width: 100%;
    }
    > div {
      width: 100%;
    }
  }
`;

export const StyledSelect = styled(Select)`
  .MuiSelect-select {
    display: flex;
    justify-content: space-between !important;
  }

  && {
    width: 150px;
  }
`;

export const StyledImage = styled.img`
  width: 24px;
  height: 24px;
`;
