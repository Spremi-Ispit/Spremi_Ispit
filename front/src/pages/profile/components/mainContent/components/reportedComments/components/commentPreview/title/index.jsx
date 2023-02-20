import React from 'react';
import {
  Container,
  PostedByContainer,
  DateIcon,
  StyledPostedByTypography,
  DateContainer,
} from './styles';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import { profileRoute } from '../../../../../../../../../app/router/routes';

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
    <>
      <Container>
        <PostedByContainer>
          <StyledPostedByTypography variant="h6">
            Postavio/la{' '}
          </StyledPostedByTypography>
          <Button onClick={handleVisitUserProfile}>
            <AccountCircleIcon />
            {postedBy}
          </Button>
        </PostedByContainer>
        <DateContainer>
          <DateIcon />
          <Typography> {date}</Typography>
        </DateContainer>
      </Container>
    </>
  );
};

export default Title;
