import styled from "styled-components";

export const Container = styled.footer`
  position: absolute;
  width: inherit;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 10px;
`;

export const IconList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  justify-content: space-evenly;
`;

export const Icon = styled.a`
  width: 40px;
  height: 40px;
  color: white;
  cursor: pointer;
`;

export const Link = styled.a``;

export const Text = styled.p`
  font-weight: bold;
  margin: 0;
  font-size: 0.9em;
`;
