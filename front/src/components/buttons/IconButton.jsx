import styled from 'styled-components';
import IconButtonMUI from '@mui/material/IconButton';

export const IconButton = styled(IconButtonMUI)`
  && {
    background-color: var(--primary);
    color: white;

    :hover {
      background-color: var(--secondary);
    }
  }
`;

export default IconButton;
