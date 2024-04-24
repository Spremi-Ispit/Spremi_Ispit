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


const Tutoring = () => {
  const [availableTutors, setAvailableTutors] = useState([]);
  const { getTutors } = useApiActions();
  const { loading, response, error, setError, action } = getTutors;
  const [lessons, setLessons] = useState([]);

  const handleChange = (event, value, reason) => {
    if (!value) {
      if (response) {
        setAvailableTutors(response);
      }
    } else {
      setAvailableTutors(
        response.filter((tutor) => tutor.subjects.map((subject) => subject.id).includes(value.id))
      );
    }
  };

  useEffect(() => {
    if (response) {
      let originalArray = [];
      response.forEach((tutor) => {
        tutor.subjects.forEach((subject) => {
          originalArray.push({ id: subject.id, label: subject.name });
        })
      });
      const uniqueObjects = originalArray.filter((obj, index) => {
        return originalArray.findIndex(prevObj =>
          prevObj.id === obj.id
        ) === index;
      });
      setLessons(uniqueObjects);
      setAvailableTutors(response);
    }
  }, [response]);

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
              Unesi naziv predmeta da bi pronašao predavača
            </StyledLabel>
            <StyledAutocomplete
              disablePortal
              options={lessons}
              sx={{ maxWidth: '500px', width: '100%' }}
              onChange={handleChange}
              renderInput={(params) => (
                <TextField {...params} placeholder="Predmet" />
              )}
            />
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
`;

const StyledLabel = styled.label`
  font-weight: bold;
  display: block;
`;
