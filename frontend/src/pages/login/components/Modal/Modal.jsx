import React, { useState } from 'react';
import { Input } from '@mui/material';
import close from '../../../../assets/close.png';
import { useApiActions } from '../../../../api/useApiActions';
import ErrorDialog from '../../../../components/dialogs/ErrorDialog';
import styled from 'styled-components';
import { validateEmail } from '../../../../utils/validation';

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
`;

const Button = styled.button`
  width: 120px;
  height: 45px;
  margin: 10px;
  border: none;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  background-color: ${({ disable }) => !disable && '#023e8a'};

  :hover {
    background-color: ${({ disable }) => !disable && '#03045e'};
  }
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
  const { action, error, setError, response } = resetPassword;

  const handleSubmit = () => {
    if (mail) {
      action(mail);
    }
  };

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  if (response) {
    alert(response);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    const valid = validateEmail(value);
    if (valid) {
      setMailValid(true);
      setMail(value);
    } else {
      setMailValid(false);
      setMail('');
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
