import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { login } from '../../reduxThunk/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import * as routes from '../../../../app/router/routes';
import {
  FormContainer,
  FormHeading,
  StyledPaper,
  StyledLink,
  StyledButton,
} from './styles';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const token = useSelector((state) => state.app.token);
  const loading = useSelector((state) => state.login.loading);
  const navigate = useNavigate();
  const location = useLocation();

  const onClick = () => {
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (token !== null) {
      if (location.state ? location.state.from : false) {
        if (location.state.searchParams) {
          const { searchParams, ...state } = location.state;

          navigate(
            {
              pathname: location.state.from,
              search: searchParams,
            },
            {
              state: state,
            }
          );
        } else {
          navigate(location.state.from, { replace: true });
        }
      } else {
        navigate(routes.homeRoute, { replace: true });
      }
    }
  }, [token, navigate, location]);

  return (
    <FormContainer>
      <FormHeading variant="h4">Prijavljivanje</FormHeading>
      <StyledPaper elevation={0}>
        <TextField
          placeholder="Email"
          fullWidth
          type="email"
          margin="normal"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          placeholder="Šifra"
          type="password"
          margin="normal"
          fullWidth
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />

        <StyledButton
          fullWidth
          variant="outlined"
          size="large"
          onClick={onClick}
          disabled={loading}
        >
          Prijavi me
        </StyledButton>
        <StyledLink href="#" color="inherit" underline="always">
          Ne sećаš se lozinke?
        </StyledLink>
      </StyledPaper>
    </FormContainer>
  );
};

export default Form;
