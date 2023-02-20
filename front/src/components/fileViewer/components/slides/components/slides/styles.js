import styled from 'styled-components';

export const Slide = styled.div`
  flex: ${(props) => (props.isSelected ? '0.3' : '0.25')};
  min-width: 80px;
  height: ${(props) => (props.isSelected ? '95%' : '80%')};
  border: ${(props) => (props.isSelected ? '1px solid blue' : 'none')};
  cursor: pointer;

  margin: 5px;
  border-radius: 10px;
  background-image: ${(props) =>
    props.image ? `url(${props.image})` : 'transparent'};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
