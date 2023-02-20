import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const StyledText = styled(Typography)`
  && {
    white-space: pre-wrap;
  }
`;

export const StyledFilesContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-left: 8px;

  > svg {
    transform: ${({ showAttachments }) =>
      showAttachments ? 'rotate(-180deg)' : ''};
    transition: 0.05s ease-out;
  }
`;

export const StyledArrowDownIcon = styled(ExpandMoreIcon)`
  cursor: pointer;
`;
