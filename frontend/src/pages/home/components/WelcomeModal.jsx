import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectWelcomeModalViewed } from '../../../redux/app/selectors';
import { useAppActions } from '../../../redux/useAppActions';

const ModalWrapper = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 12px;
  z-index: 1;
  border: 1px solid #00000045;
  width: fit-content;
  margin: 20%;
`;

const Title = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 20px;
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
  margin-top: 20px;
`;

const Button = styled.button`
  width: 150px;
  height: 45px;
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

const Paragraph = styled(Title)``;

const WelcomeModalDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WelcomeModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #7f7f7f;
  opacity: 0.4;
`;

const WelcomeModal = () => {
  const welcomeModalViewed = useSelector(selectWelcomeModalViewed);
  const { appActions } = useAppActions();
  const { setWelcomeModalViewed } = appActions;

  if (welcomeModalViewed) {
    return null;
  }

  return (
    <WelcomeModalDiv>
      <ModalWrapper>
        <Title>
          <h1>Dobro došli</h1>
          <Paragraph>
            Ovo je open-source projekat koji razvijaju studenti da bi olaksali
            pripremu/polaganje ispita. Cilj platforme je da olaksa deljenje
            materijala, postavljanje blanketa i resenja, beleski sa racunskih
            vezbi i predavanja kako bi svi materijali za pripremu ispita bili na
            jednom mestu.
          </Paragraph>
          <br />
          <br />
          <b>Zelis da se prikljucis razvoju?</b>
          <br />
          <a href="https://docs.google.com/document/d/1ktu2u97ZVWWkA9iWx_NgcXP7n91FJ2GnkX14wuvooW0/edit?usp=sharing">
            Rad na projektu
          </a>
        </Title>
        <Body>
          <Button onClick={() => setWelcomeModalViewed(true)}>Uredu</Button>
        </Body>
      </ModalWrapper>
      <WelcomeModalBackdrop onClick={() => setWelcomeModalViewed(true)} />
    </WelcomeModalDiv>
  );
};

export default WelcomeModal;
