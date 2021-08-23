import styled from "styled-components";

export const Container = styled.section`
  color: white;
`;

export const Menu = styled.nav`
  background-color: rgb(0, 0, 0, 0.5);
  padding: 2%;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const NavItem = styled.div`
  padding: 3%;
  border-radius: 10px;
  background-color: rgb(0, 0, 0, 0.5);
  font-size: 1.4em;
  font-family: "Rajdhani-Bold";
  font-weight: bold;
  cursor: pointer;
`;

export const PhotoGrid = styled.section`
  display: grid;
`;

export const PhotoItem = styled.div``;
