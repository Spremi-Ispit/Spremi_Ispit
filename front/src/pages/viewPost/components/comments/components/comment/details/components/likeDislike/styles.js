import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { commentLikeDislikeStatus } from '../../../../../../../../../utils/enums';

export const LikeIcon = styled(ThumbUpOffAltIcon)`
  color: ${({ like_dislike_status }) =>
    like_dislike_status === commentLikeDislikeStatus.liked ? 'green' : ''};
`;
export const DislikeIcon = styled(ThumbDownOffAltIcon)`
  color: ${({ like_dislike_status }) =>
    like_dislike_status === commentLikeDislikeStatus.disliked ? 'red' : ''};
`;

export const Likes = styled(Typography)`
  && {
    margin: 0px 0px -3px 5px;
  }
`;

export const StyledButton = styled(Button)`
  && {
    color: rgb(0 0 0 / 87%);
  }
`;
