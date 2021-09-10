import styled from "styled-components";

export const Container = styled.div`
  color: white;
  margin-top: 1em;
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

  @media (min-width: 481px) {
    width: auto;
    height: 200px;

    &:hover {
      transform: scale(1.2);
      transition: transform 0.1s ease-out;
    }
    transition: transform 0.1s ease-out;
  }
`;

export const Photo = styled.img`
  width: 100%;
`;
