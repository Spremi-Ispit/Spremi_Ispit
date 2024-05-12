import React from 'react';
import styled from 'styled-components';

const TutorPrice = ({ price, groupPrice }) => {
  return (
    <div>
      <h3>
        Cena individualnog časa: <input value={price} />
      </h3>
      <h3>
        Cena grupnog časa: <input value={groupPrice} />
      </h3>
    </div>
  );
};

export default TutorPrice;
