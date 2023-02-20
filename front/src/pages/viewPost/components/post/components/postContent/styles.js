import styled from 'styled-components';

export const PostContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

export const PostedBycontainer = styled.div`
  margin-top: 5px;
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const StyledPostedBy = styled.span`
  cursor: pointer;
  padding-left: 0px;
  padding-right: 5px;
  color: gray;
  font-size: 1.2rem;

  :hover {
    text-decoration: underline;
    text-decoration-color: gray;
  }
`;

export const StyledTimeContainer = styled.span`
  padding-left: 0px;
  padding-right: 5px;
  color: gray;

  > time {
    font-size: 1rem;
  }
`;

export const PostHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PostTitleContainer = styled.span`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-left: 5px;
`;

export const PostDescriptionContainer = styled.p`
  padding: 5px;
  width: 90%;
  flex: 1;
`;

export const StyledImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const StledAccountCircleIcon = styled.img`
  && {
    width: 35px;
    height: 35px;
    margin-right: 8px;
    border-radius: 10px;
    background-position: center;
    object-fit: cover;
  }
`;
