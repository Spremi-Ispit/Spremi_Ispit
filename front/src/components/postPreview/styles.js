import styled from 'styled-components';
import Paper from '@mui/material/Paper';

export const StyledPaper = styled(Paper)`
  // padding: 10px;
  // padding-right: 15px;
  // margin-bottom: 30px;
  min-height: 150px;
  flex-grow: 1;
  display: flex;
  max-width: 650px;
  width: 100%;
  cursor: pointer;
  height: fit-content;
  padding: 5px;
  margin-bottom: 15px;
  margin-top: 8px;
`;

export const PostData = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
