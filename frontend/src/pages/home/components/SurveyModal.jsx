import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectSourveyModalViewed } from '../../../redux/app/selectors';
import { useAppActions } from '../../../redux/useAppActions';
import colors from '../../../theme/colors';
import { screensCSS } from '../../../utils/useScreens';
import NavLink from '../../../components/NavLink';

const SourveyModal = () => {
  const welcomeModalViewed = useSelector(selectSourveyModalViewed);
  const { appActions } = useAppActions();
  const { setSourveyModalViewed } = appActions;

  if (welcomeModalViewed) {
    return null;
  }

  return (
    <SourveyModalDiv>
      <ModalWrapper>
        <Title>
          <h2>Anketa za studente IT smerova na niškim fakultetima</h2>
          <Paragraph>
            Poštovane koleginice i kolege, molimo vas da učestvujete u kratkoj,
            petominutnoj, anonimnoj anketi na temu studiranja i zaposlenja nakon
            završenog fakulteta. Anketa se radi sa studentima IT smerova
            fakulteta u Nišu kako bi se po prvi put napravila analiza niškog IT
            ekosistema i potencijala. Rezultati ankete biće objavljeni u
            narednih par meseci.
          </Paragraph>
          <br />
          <br />
          <StyledNavlink
            as="a"
            href="https://survey.plummark.com/zs/peClsi"
            target="_blank"
          >
            Anketa
          </StyledNavlink>
          <br />
          <b>Hvala vam što doprinosite razvoju niškog IT sistema.</b>
        </Title>
        <Body>
          <Button onClick={() => setSourveyModalViewed(true)}>Zatvori</Button>
        </Body>
      </ModalWrapper>
      <SourveyModalBackdrop onClick={() => setSourveyModalViewed(true)} />
    </SourveyModalDiv>
  );
};

export default SourveyModal;

const StyledNavlink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-decoration: underline !important;

  cursor: pointer;
  font-family: Poppins;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;

  color: #535cb5;
  :hover {
    color: #333da8;
  }
`;

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
  max-width: 680px;

  @media ${screensCSS.tablet} {
    margin: 10%;
  }

  @media ${screensCSS.mobileL} {
    margin: 0;
  }
`;

const Title = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

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
  background-color: ${colors.filteri};

  :hover {
    background-color: ${colors.navbar};
  }
`;

const Paragraph = styled(Title)``;

const SourveyModalDiv = styled.div`
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

const SourveyModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #7f7f7f;
  opacity: 0.4;
`;
