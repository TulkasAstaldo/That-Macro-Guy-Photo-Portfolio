import styled from "styled-components";

export const Container = styled.div`
  color: white;
  margin-top: 1em;
`;

export const Category = styled.div``;

export const BackIcon = styled.div`
  width: 60px;
  margin-left: 10%;
  margin-top: -0.5em;
  cursor: pointer;
  opacity: ${({ opacityValue }) => opacityValue};
  transition: opacity 200ms ease-out;
  position: fixed;

  &:hover {
    transform: scale(1.1);
    transition: transform ease-in-out;
  }

  @media (min-width: 1260px) {
    margin-left: 4%;
  }
`;

export const BackTopIcon = styled.div`
  width: 40px;
  position: fixed;
  right: 0;
  bottom: 4em;
  opacity: ${({ offset }) => (offset >= 500 ? 1 : 0)};
  transition: opacity 200ms ease-out;
  cursor: pointer;
`;

export const PhotoGrid = styled.section`
  margin: auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: opacity 0.5s ease-in-out;

  @media (min-width: 481px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 769px) {
    width: 85%;
  }
`;

export const PhotoItem = styled.div`
  display: flex;
  width: 90%;
  height: auto;
  box-shadow: 3px 3px 3px black;
  margin: 5px;
  cursor: pointer;

  @media (min-width: 481px) {
    width: auto;
    height: 200px;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.1s ease-out;
    }
    transition: transform 0.1s ease-out;
  }
`;

export const Photo = styled.img`
  width: 100%;
  @media (min-width: 481px) {
    width: auto;
    height: 100%;
  }
`;
