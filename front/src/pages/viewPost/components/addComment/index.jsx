import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { loginRoute } from '../../../../app/router/routes';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledButton } from './styles';

export const AddComment = React.forwardRef((props, ref) => {
  const token = useSelector((state) => state.app.token);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const handleCreateComment = () => {
    if (token) {
      ref.current.scrollIntoView();
    } else {
      navigate(
        {
          pathname: loginRoute,
        },
        {
          state: {
            from: location.pathname,
            searchParams: `${searchParams.toString()}`,
          },
        }
      );
    }
  };

  return (
    <StyledButton
      variant="contained"
      onClick={handleCreateComment}
      startIcon={<AddCircleIcon />}
    >
      komentar
    </StyledButton>
  );
});
