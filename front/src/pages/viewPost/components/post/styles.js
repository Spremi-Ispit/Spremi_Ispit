// import styled from 'styled-components';
// import Paper from '@mui/material/Paper';

// export const StyledPaper = styled(Paper)`
//   padding: 10px;
//   padding-right: 15px;
//   min-height: 150px;
//   flex-grow: 1;
//   display: flex-block;

//   border: 0.5px solid #c9cace;
// `;

import styled from 'styled-components';
import Paper from '@mui/material/Paper';

export const StyledPaper = styled(Paper)`
  // padding: 10px;
  // padding-right: 15px;
  // margin-bottom: 30px;
  min-height: 150px;
  flex-grow: 1;
  display: flex;

  height: fit-content;
  width: 100%;
  padding: 5px;
  margin-bottom: 15px;
  margin-top: 8px;
`;

export const PostData = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
