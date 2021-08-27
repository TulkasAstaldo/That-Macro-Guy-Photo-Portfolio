import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  background-color: rgb(0, 0, 0, 0.5);
  padding: 2%;
`;

export const IconList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  justify-content: space-evenly;
  background-color: rgb(0, 0, 0, 0.5)
  height: 50px;
`;

export const Icon = styled.a`
  width: 48px;
  height: 48px;
  color: white;
  cursor: pointer;
`;

export const Link = styled.a``;

export const Text = styled.p`
  font-weight: bold;
  margin: 0;
`;
