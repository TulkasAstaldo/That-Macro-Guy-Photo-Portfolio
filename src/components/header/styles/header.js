import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #dbdbdb;
  margin-top: 2em;
`;

export const Title = styled.h1`
  font-size: 3em;
  font-family: Rajdhani-Bold, Helvetica;
  text-align: center;
  text-shadow: 2px 2px 4px #000000;
  margin-bottom: 0;
`;

export const Menu = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  padding: 10px;
  width: 100%;
`;

export const NavList = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const NavItem = styled.div`
  padding: 15px;
  border-radius: 10px;
  background-color: rgb(0, 0, 0, 0.5);
  font-size: 1.4em;
  font-family: "Rajdhani-Bold";
  font-weight: bold;
  cursor: pointer;
`;
