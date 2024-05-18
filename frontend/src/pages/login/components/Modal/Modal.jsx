import React, { useState, useEffect } from 'react';
import { Input } from '@mui/material';
import close from '../../../../assets/close.png';
import { useApiActions } from '../../../../api/useApiActions';
import Error from '../../../../components/dialogs/Error';
import styled from 'styled-components';
import { validateEmail } from '../../../../utils/validation';
import Loader from '../../../../components/Loader';
import { useNavigate } from 'react-router-dom';
import { resetPasswordRoute } from '../../../../router/routes';
import Button from '../../../../components/buttons/Button';

const ModalWrapper = styled.div`
  max-width: 450px;
  width: 100%;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 1em;
  position: fixed;
`;

const TitleH1 = styled.h1`
  display: inline-block;
  text-align: center;
  font-family: Poppins;
  flex: 1;
`;

const CloseDialogButton = styled.button`
  border: none;
  font-size: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const CloseDialogDiv = styled.div`
  display: flex;
  justify-content: end;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Poppins;
  font-weight: 600;
  font-size: 24px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  gap: 10px;
`;

const Paragraph = styled.p`
  font-weight: 600;
  font-size: 16px;
  padding: 2em;
  font-family: Poppins;
`;
const InputEmail = styled(Input)`
  && {
    width: 80%;
    display: flex;
    justify-content: center;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
`;

function Modal({ setOpenModal }) {
  const [mail, setMail] = useState('');
  const [mailValid, setMailValid] = useState(false);
  const { resetPassword } = useApiActions();
  const { action, error, response, loading } = resetPassword;
  const navigate = useNavigate();

  useEffect(() => {
    if (response) {
      alert(response);
      navigate(resetPasswordRoute);
    }
  }, [response, navigate]);

  const handleSubmit = () => {
    if (mail) {
      action(mail);
    }
  };

  const handleChange = async (event) => {
    const value = event.target.value;

    const emailError = await validateEmail(value);

    if (emailError) {
      setMailValid(false);
      setMail('');
    } else {
      setMailValid(true);
      setMail(value);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      handleSubmit();
    }
  };

  return (
    <ModalWrapper>
      <CloseDialogDiv>
        <CloseDialogButton onClick={() => setOpenModal(false)}>
          <img src={close} alt="close" />
        </CloseDialogButton>
      </CloseDialogDiv>
      <TitleH1>Zaboravili ste šifru?</TitleH1>
      <Body>
        <Paragraph>
          Unesite e-mail kako bi smo Vam poslali kod za pristup aplikaciji
        </Paragraph>
        <InputEmail
          placeholder="E-mail"
          fullWidth
          type="email"
          variant="outlined"
          autoComplete="Email"
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        <Buttons>
          <Button onClick={() => setOpenModal(false)}>Odustani</Button>
          <Button onClick={handleSubmit} disable={!mailValid}>
            Nastavi
          </Button>
        </Buttons>
      </Body>
    </ModalWrapper>
  );
}

export default Modal;
