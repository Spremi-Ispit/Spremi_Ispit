import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Button, Divider } from '@mui/material';

export const LikeIcon = styled(ThumbUpOffAltIcon)`
  color: grey;
`;

export const DislikeIcon = styled(ThumbDownOffAltIcon)`
  color: grey;
`;

export const ButtonText = styled(Typography)`
  && {
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: flex-end;
  margin-left: 5px;
  cursor: pointer;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const LikesWrapper = styled.div`
  display: flex;
  margin-right: 5px;
`;

export const Likes = styled(Typography)`
  && {
    margin: 0px 0px -3px 5px;
  }
`;

export const StyledDivider = styled(Divider)`
  && {
    margin-top: 8px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledButton = styled(Button)`
  && {
    margin-right: 5px;
  }
`;
