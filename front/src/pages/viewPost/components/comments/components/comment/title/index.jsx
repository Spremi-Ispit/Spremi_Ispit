import React from 'react';
import {
  PostedByContainer,
  DateIcon,
  DateContainer,
  StyledH3,
} from './styles';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { profileRoute } from '../../../../../../../app/router/routes';

const Title = (props) => {
  const { postedBy, date } = props;
  const navigate = useNavigate();

  const handleVisitUserProfile = () => {
    navigate({
      pathname: profileRoute,
      search: `username=${postedBy}`,
    });
  };

  return (
      <PostedByContainer>
        <StyledH3 onClick={handleVisitUserProfile}>{postedBy}</StyledH3>
        <DateContainer>
          <DateIcon />
          <Typography> {date}</Typography>
        </DateContainer>
      </PostedByContainer>
  );
};

export default Title;
