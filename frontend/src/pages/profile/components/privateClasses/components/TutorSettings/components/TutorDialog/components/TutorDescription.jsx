import React, { useState } from 'react';
import styled from 'styled-components';

const TutorDescription = ({ description }) => {
  const [tutorDescription, setTutorDescription] = useState(description);

  const handleChange = (event) => {
    setTutorDescription(event.target.value);
  };

  return (
    <h3>
      Opis:
      <input value={tutorDescription} onChange={handleChange} />
    </h3>
  );
};

export default TutorDescription;
