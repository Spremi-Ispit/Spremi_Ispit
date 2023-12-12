import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { loginRoute } from '../../../../../router/routes';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectToken } from '../../../../../redux/app/selectors';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../../components/buttons/Button';

const AddCommentButton = styled(Button)`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddCommentDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const AddComment = React.forwardRef((props, ref) => {
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  const handleCreateComment = () => {
    if (token) {
      ref.current.scrollIntoView();
    } else {
      navigate(loginRoute);
    }
  };

  return (
    <AddCommentDiv>
      <AddCommentButton onClick={handleCreateComment}>
        komentar
        <ArrowDownwardIcon />
      </AddCommentButton>
    </AddCommentDiv>
  );
});
