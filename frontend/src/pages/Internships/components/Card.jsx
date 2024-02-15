import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  gap: 10px;
  max-width: 330px;
`;

const Card = () => {
  return <CardDiv></CardDiv>;
};

export default Card;
