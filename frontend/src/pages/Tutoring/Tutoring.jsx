import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';
import Footer from '../../components/Footer';
import Lessons from './components/Lessons/Lessons';
import Tutor from './components/Tutor/Tutor';
import colors from '../../theme/colors';

const MainDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 50px 10px;
  align-items: center;
  gap: 20px;
`;

const TutoringDiv = styled.div`
  display: flex;
  flex: 1;
`;

const TutoringDescriptionDiv = styled.div`
  background-color: ${colors.footer};
  display: block;
  padding: 10px;
  border-radius: 5px;
  max-width: 800px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  font-style: italic;
  font-weight: 500;
  text-align: center;
`;

const StyledFooter = styled(Footer)`
  margin-top: 0px;
`;

const Tutoring = () => {
  return (
    <>
      <Navbar />
      <SettingsSidePanel />
      <TutoringDiv>
        <MainDiv>
          <Lessons />
          <Tutor />
          <TutoringDescriptionDiv>
            Platforma je namenjena isključivo za uspostavljanje kontakta između
            studenata i predavača. Organizacija nastave, broj časova i cena je
            stvar dogovora između predavača i studenta, platforma nema uticaja
            na to. Ukoliko su ti potrebne dodatne informacije kontaktiraj nas!
          </TutoringDescriptionDiv>
        </MainDiv>
      </TutoringDiv>
      <StyledFooter />
    </>
  );
};

export default Tutoring;
