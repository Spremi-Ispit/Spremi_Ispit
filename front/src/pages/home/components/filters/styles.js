import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const AdditionalFiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledDivider = styled(Divider)`
  && {
    margin-top: 10px;
  }
`;

export const StyledButton = styled(Button)`
  && {
    width: 100px;
  }
`;

export const StyledButtonResize = styled(Button)`
  && {
    width: 100px;
    margin-left: -30px;
  }
`;
