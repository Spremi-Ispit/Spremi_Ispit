import React from 'react';
import { Input } from '@mui/material';
import close from '../../../../assets/close.png';
import { useApiActions } from '../../../../api/useApiActions';
import ErrorDialog from '../../../../components/dialogs/ErrorDialog';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  width: 450px;
  height: 420px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 1em;
  position: fixed;
`;

const Title = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
`;

const ButtonClose = styled.button`
  border: none;
  font-size: 25px;
  cursor: pointer;
  background-color: #fff;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
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
  margin: 2em;
`;

const Button = styled.button`
  width: 150px;
  height: 45px;
  margin: 10px;
  border: none;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  background-color: #023e8a;

  :hover {
    background-color: #03045e;
  }
`;

const Paragraph = styled(Title)`
  && {
    padding: 2em;
  }
`;
const InputEmail = styled(Input)`
  && {
    display: flex;
    justify-content: center;
    width: 200px;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
`;
function Modal({ setOpenModal }) {
  const { resetPassword } = useApiActions();

  const { action, loaded, error, setError } = resetPassword;

  const handleSubmit = () => {
    action('darjandrugarinovic@gmail.com');
  };

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  if (loaded) {
    alert('Mail with reset code has been sent');
  }

  return (
    <ModalWrapper>
      <ButtonClose onClick={() => setOpenModal(false)}>
        <img src={close} alt="close" />
      </ButtonClose>
      <Title>
        <h1>Zaboravili ste šifru?</h1>
        <Paragraph>
          Unesite e-mail kako bi smo Vam poslali kod za pristup aplikaciji
        </Paragraph>
      </Title>
      <Body>
        <InputEmail
          placeholder="E-mail"
          fullWidth
          type="email"
          margin="normal"
          variant="outlined"
          autoComplete="Email"
        />
        <Buttons>
          <Button onClick={() => setOpenModal(false)}>Odustani</Button>
          <Button onClick={handleSubmit}>Nastavi</Button>
        </Buttons>
      </Body>
    </ModalWrapper>
  );
}

export default Modal;
