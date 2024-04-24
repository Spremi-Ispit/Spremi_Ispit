import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Navbar from '../../components/navbar/Navbar';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';
import Footer from '../../components/Footer';
import colors from '../../theme/colors';
import Instagram from './components/Instagram';
import Tutor from './components/Tutor';
import { useApiActions } from '../../api/useApiActions';
import Loader from '../../components/Loader';
import ErrorDialog from '../../components/dialogs/ErrorDialog';
import { Card, Stack } from '@mui/material';
import YearOfStudy from '../home/components/Filters/components/YearOfStudy';
import Department from '../home/components/Filters/components/Department';
import { useUrlManager } from '../../utils/managers/UrlManager';
import Button from '../../components/buttons/Button';
import Subject from '../profile/components/privateClasses/components/TutorSettings/components/TutorDialog/components/AddSubject/components/Subject';


const Tutoring = () => {
  const [availableTutors, setAvailableTutors] = useState([]);
  const { getTutors } = useApiActions();
  const { loading, response, error, setError, action } = getTutors;
  const [lessons, setLessons] = useState([]);
  const urlManager = useUrlManager();
  const { urlYearOfStudy, urlDepartment, urlSubject } = urlManager.getParams();
  const [subject, setSubject] = useState(null);

  const addSubject = () => {
    if (urlYearOfStudy && urlDepartment && urlSubject && subject) {
      const { id } = subject;
      setAvailableTutors(response.filter((tutor) => tutor.subjects.map((subject) => subject.id).includes(id)))
      return true;
    }
  };

  useEffect(() => {
    if (response) {
      if (!addSubject()) {
        setAvailableTutors(response);
      }
    }
  }, [response]);

  useEffect(() => {
    if (urlYearOfStudy === null) {
      setAvailableTutors(response);
    }
  }, [urlYearOfStudy]);

  useEffect(() => {
    action();
  }, []);


  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  return (
    <>
      <Navbar />
      <SettingsSidePanel />
      <TutoringDiv>
        <MainDiv>
          <LessonsDiv>
            <TutoringH2>Potrebni su ti privatni časovi?</TutoringH2>
            <StyledLabel>
              Unesi predmet da bi pronašao predavača
            </StyledLabel>
            <SubjectSelectDiv >
              <YearOfStudy />
              <Department />
              <Subject onSubjectChange={setSubject} />
              <StyledButton
                onClick={addSubject}
                $disabled={!(urlYearOfStudy && urlDepartment && urlSubject)}
              >
                Pretraži
              </StyledButton>
            </SubjectSelectDiv>
            <TutorsDiv>
              {availableTutors && availableTutors.map((tutor, index) => (
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
      </TutoringDiv >
      <StyledFooter />
    </>
  );
};

export default Tutoring;

const TutorsDiv = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center;
`;

const TutoringH2 = styled.h2`
  text-align: center;
  margin-bottom: 20px;
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

const StyledAutocomplete = styled(Autocomplete)`
  background-color: white;
  margin: 10px;
`;

const LessonsDiv = styled.div`
  align-self: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80%;
`;

const StyledLabel = styled.label`
  font-weight: bold;
  display: block;
`;

const SubjectSelectDiv = styled.div`
  display: flex;
  white-space: nowrap;
  box-shadow: rgb(185, 185, 185) -1px 2px 9px 1px;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 1px 3px;
  padding: 10px;
  margin: 10px 0px 10px 0px;
  gap: 10px;
  overflow: overlay;
  background-color: white;
  max-width: 100%;
  width: 100%;
  min-width: 100%;
`;

const StyledButton = styled(Button)`
  max-height: 30px;
  align-self: end;
`;