import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import styled from 'styled-components';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Button from '../../../../components/buttons/Button';
import colors from '../../../../theme/colors';
import { useAppActions } from '../../../../redux/useAppActions';

const Sourvey = () => {
  const { appActions } = useAppActions();
  const { setSourveyModalViewed } = appActions;

  return (
    <SourveyDiv>
      <FollowUsDiv>
        Popuni anketu
        <ArrowRightAltIcon />
      </FollowUsDiv>
      <StyledButton onClick={() => setSourveyModalViewed(false)}>
        Anekta
        <AssignmentIcon />
      </StyledButton>
    </SourveyDiv>
  );
};

export default Sourvey;

const StyledButton = styled(Button)`
  color: #535cb5;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 18px;

  background-color: transparent;
  display: flex;
  gap: 2px;

  :hover {
    background-color: transparent;
    color: #333da8;
  }
  padding: 0;
`;

const SourveyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  padding: 5px;
  border-radius: 5px;
`;

const SourveyImg = styled.img`
  width: 20px;
`;

const FollowUsDiv = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
`;
