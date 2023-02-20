import { Divider } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /* margin-top: 10px; */
  justify-content: flex-end;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const ControllsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
`;

export const StyledDivider = styled(Divider)`
  && {
    margin-top: 8px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
`;
