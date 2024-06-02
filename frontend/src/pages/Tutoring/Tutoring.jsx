import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';
import Footer from '../../components/Footer';
import colors from '../../theme/colors';
import Instagram from './components/Instagram';
import Tutor from './components/Tutor';
import Loader from '../../components/Loader';
import Error from '../../components/dialogs/Error';
import { useUrlManager } from '../../utils/managers/UrlManager';
import { useFetch } from '../../api/useFetch';
import { getTutors } from '../../api/actions/tutor/getTutors';
import YearOfStudy from './components/YearOfStudy';
import Department from './components/Department';
import Subject from './components/Subject';
import TopClass from './components/TopClass/TopClass';

const Tutoring = () => {
  const [availableTutors, setAvailableTutors] = useState([]);
  const { data, error, loading, fetch } = useFetch(getTutors);
  const urlManager = useUrlManager();
  const { urlSubject } = urlManager.getParams();

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    if (data) {
      setAvailableTutors(data);
    }
  }, [data]);

  useEffect(() => {
    if (urlSubject === null && data) {
      setAvailableTutors(data);
    }
  }, [urlSubject]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const handleSubjectChange = (subject) => {
    if (!subject) return;

    if (data) {
      setAvailableTutors(
        data.filter((tutor) =>
          tutor.tutorSubjects.find(
            (tutorSubject) => tutorSubject.subject.id === subject.id
          )
        )
      );
    }
  };

  return (
    <>
      <Navbar />
      <SettingsSidePanel />
      <TutoringDiv>
        <MainDiv>
          <LessonsDiv>
            <TutoringH2>Potrebni su ti privatni časovi?</TutoringH2>
            <StyledLabel>Unesi predmet da bi pronašao predavača</StyledLabel>
            <FiltersContainerDiv>
              <YearOfStudy />
              <Department />
              <Subject onSubjectChange={handleSubjectChange} />
            </FiltersContainerDiv>
            <TopClass />
            <TutorsDiv>
              {availableTutors.map((tutor, index) => (
                <Tutor key={index} tutor={tutor} />
              ))}
            </TutorsDiv>

            <p>
              Ukoliko si uspeo/la da pronađeš predmet, piši nam da bi te
              povezali sa predavačem!
            </p>
            <Instagram />
          </LessonsDiv>
          <TutorDiv>
            <TutoringH2>Želiš da držiš časove?</TutoringH2>
            <p>
              Rado ćemo te povezati sa studentima kojima su potrebni časovi!
            </p>
            <Instagram />
          </TutorDiv>
          <Disclaimer>
            Platforma je namenjena isključivo za uspostavljanje kontakta između
            studenata i predavača. Organizacija nastave, broj časova i cena je
            stvar dogovora između predavača i studenta, platforma nema uticaja
            na to. Ukoliko su ti potrebne dodatne informacije kontaktiraj nas!
          </Disclaimer>
        </MainDiv>
      </TutoringDiv>
      <StyledFooter />
    </>
  );
};

export default Tutoring;

const TopClassDiv = styled.div``;

const FiltersContainerDiv = styled.div`
  display: grid;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 1px 3px;
  padding: 10px;

  display: grid;
  grid-template-columns: 200px 200px 200px;

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 150px 150px 150px;
  }

  @media (max-width: 560px) {
    display: grid;
    grid-template-columns: 150px 150px;
  }
`;

const TutorsDiv = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

const TutoringH2 = styled.h2`
  text-align: center;
`;

const TutorDiv = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

const Disclaimer = styled.div`
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

const LessonsDiv = styled.div`
  align-self: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 750px;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-top: 20px;
`;
