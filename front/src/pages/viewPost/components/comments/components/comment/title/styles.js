import styled from 'styled-components';
import Today from '@mui/icons-material/Today';

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: fit-content;
  flex-direction: row-reverse;
  margin-left: 4px;
`;

export const PostedByContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  min-width: fit-content;
  align-items: center;
  margin-bottom: 5px;
`;

export const DateIcon = styled(Today)`
  && {
    margin-left: 2px;
    color: #808080;
  }
`;

export const StyledH3 = styled.h3`
  margin-right: 8px;
  font-size: 1rem;
  font-style: italic;
  margin-left: -5px;
  padding: 0px 5px 0px 5px;
  cursor: pointer;

  :hover {
    padding: 0px 5px 0px 5px;
    border-radius: 5px;
    color: white;
    background: var(--primary-color);
  }
`;
