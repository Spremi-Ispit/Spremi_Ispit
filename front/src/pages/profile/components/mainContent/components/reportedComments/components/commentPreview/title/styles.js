import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Today from '@mui/icons-material/Today';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: fit-content;
`;

export const PostedByContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  min-width: fit-content;
`;

export const DateIcon = styled(Today)`
  && {
    margin-left: 10px;
  }
`;

export const StyledPostedByTypography = styled(Typography)``;
