import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';

export const StyledPaper = styled(Paper)`
  padding: 10px;
  padding-right: 15px;
  margin-bottom: 30px;
  min-height: 150px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #c9cace;
`;

export const StyledDivider = styled(Divider)`
  && {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const CommentPreviewContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 750px;
`;
