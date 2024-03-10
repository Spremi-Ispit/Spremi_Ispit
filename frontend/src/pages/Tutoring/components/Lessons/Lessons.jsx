import * as React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Instagram from '../components/Instagram';

const StyledAutocomplete = styled(Autocomplete)`
  background-color: white;
  margin-bottom: 10px;
`;

const TutoringH2 = styled.h2`
  text-align: center;
  margin-bottom: 20px;
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
  margin-bottom: 2px;
`;

const Lessons = () => {
  const handleChange = (event, value, reason) => {
    console.log(value);
  };

  return (
    <LessonsDiv>
      <TutoringH2>Potrebni su ti privatni časovi?</TutoringH2>
      <StyledLabel>
        Predmeti za koje možemo da te povežemo sa predavačima
      </StyledLabel>
      <StyledAutocomplete
        disablePortal
        options={availableLessons}
        sx={{ maxWidth: '500px', width: '100%' }}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField {...params} placeholder="Predmet" />
        )}
      />
      <p>
        Ukoliko si uspeo/la da pronađeš predmet, piši nam da bi te povezali sa
        predavačem!
      </p>
      <Instagram />
    </LessonsDiv>
  );
};

export default Lessons;

const availableLessons = [
  'Fizika',
  'Algoritmi i programiranje (C)',
  'Uvod u računarstvo',
  'Elektronske komponente',
  'Objektno orijentisano programiranje ( C++)',
  'Programski jezici ( Java, C#)',
  'Strukture podataka ( C++)',
  'Računarski sistemi',
  'Organizacija računarskog sistema',
  'Arhitektura i organizacija računara 1',
  'Diskretna matematika',
  'Baze podataka',
  'Mikroprocesorski sistemi',
  'Programiranje 1 (Python)',
  'Programiranje 2 (C)',
  'Organizacija računarske tehnike',
];
