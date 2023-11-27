import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { FormLabel, Link } from '@mui/material';
import Loader from '../../../components/Loader';
import ErrorDialog from '../../../components/dialogs/ErrorDialog';
import { useAuthManager } from '../../../utils/managers/AuthManager';
import { screensCSS } from '../../../utils/useScreens';
import Button from '../../../components/buttons/Button';
import eye from '../../../../src/assets/eye.png';
import eyeOff from '../../../../src/assets/eyeoff.png';
import Modal from './Modal/Modal';
import { useApiActions } from '../../../api/useApiActions';

const TextH4 = styled(Typography)`
  && {
    font-family: Poppins;
    font-weight: 600;
    font-size: 40px;
    font-style: italic;
  }
`;

const DivWrapper = styled.div`
  position: relative;
  width: 80%;
`;

const StyledButton = styled(Button)`
  && {
    margin: 10px;
    font-family: Poppins;
    font-weight: 600;
    font-size: 18px;
    width: 80%;
  }
`;

const StyledForm = styled.form`
  text-align: center;
  width: 40%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media ${screensCSS.tablet} {
    margin-top: 20px;
    width: 90%;
  }
`;

const StyledPaper = styled(Paper)`
  && {
    padding: 20px;
    margin-bottom: 30px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: none;
    box-shadow: -1px 2px 9px 1px #b9b9b9;
  }
`;

const StyledLink = styled(Link)`
  && {
    margin-top: 10px;
    text-decoration: none;
    font-family: Poppins;
    font-weight: 600;
    font-size: 20px;
    color: #000000;
  }
`;

const StyledLbl = styled(FormLabel)`
  && {
    display: flex;
    flex-direction: row;
    margin-right: auto;
    font-family: Poppins;
    font-weight: 600;
    font-size: 18px;
    color: black;
  }
`;

const InputField = styled(TextField)`
  && {
    margin: 0;
    padding: 0.8em 0em;
  }
`;

const Span = styled.span`
  position: absolute;
  bottom: 20%;
  left: 90%;
`;
const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useApiActions();
  const { loading, error, setError, response, action } = login;
  const authManager = useAuthManager();
  const [modalOpen, setModalOpen] = useState(false);

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  useEffect(() => {
    if (response) {
      authManager.login(response);
      navigate(-1);
    }
  }, [response]);

  const handleSubmit = () => {
    action(email, password);
  };

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  return (
    <>
      <StyledForm>
        <TextH4 variant="h4">Prijavljivanje</TextH4>
        <StyledPaper elevation={0}>
          <DivWrapper>
            <StyledLbl>Email</StyledLbl>
            <InputField
              placeholder="Email"
              fullWidth
              type="email"
              margin="normal"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="Email"
            />
          </DivWrapper>
          <DivWrapper>
            <StyledLbl>Šifra</StyledLbl>
            <InputField
              placeholder="Šifra"
              type={type}
              value={password}
              margin="normal"
              fullWidth
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Span onClick={handleToggle}>
              <img src={icon} />
            </Span>
          </DivWrapper>

          <StyledButton
            fullWidth
            variant="outlined"
            size="large"
            onClick={handleSubmit}
            disabled={loading}
          >
            Prijavi me
          </StyledButton>
          <StyledLink
            href="#"
            color="inherit"
            underline="always"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Ne sećаš se lozinke?
          </StyledLink>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </StyledPaper>
      </StyledForm>
      {loading ? <Loader /> : null}
    </>
  );
};

export default Form;
