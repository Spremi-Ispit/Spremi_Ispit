import styled from 'styled-components';

export const ContentContainer = styled.div`
  min-width: 230px;
  max-width: 800px;

  width: 100%;
  flex: 1;
  margin: 0px auto ;
`;

export const AddCommentContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
  margin-bottom: 40px;
  height: 50px;
  max-height: 50px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 230px;
  flex: 1;

  @media screen and (max-width: 400px) {
    justify-content: space-evenly;
  }
`;

export const StyledH1 = styled.h1`
  text-align: center;
`;
