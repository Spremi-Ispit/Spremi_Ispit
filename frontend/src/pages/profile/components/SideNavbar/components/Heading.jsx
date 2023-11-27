import React from 'react';
import styled from 'styled-components';
import { assets } from '../../../../../assets';

const StlyedAccountCircleIcon = styled.img`
  && {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-position: center;
    object-fit: cover;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;

  > h3 {
    font-style: italic;
    font-size: 1rem;
    margin-left: 6px;
    padding-right: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  && > svg {
    width: 30px;
    transform: rotate(-20deg);
  }
`;

const Heading = ({ urlUsername }) => {
  return (
    <StyledContainer>
      <StlyedAccountCircleIcon src={assets.userAccount.avatar} />
      <h3>{urlUsername}</h3>
    </StyledContainer>
  );
};

export default Heading;
