import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #dbdbdb;
  margin-top: 1em;

  @media (min-width: 768px) {
    margin-top: 1em;
  }
  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

export const Link = styled(ReactRouterLink)`
  text-decoration: none;
  color: inherit;
`;

export const Title = styled.h1`
  font-size: 3em;
  font-family: Rajdhani-Bold, Helvetica;
  text-align: center;
  text-shadow: 2px 2px 4px #000000;
  margin-bottom: 0;

  @media (min-width: 481px) {
    margin-top: 30px;
    font-size: 3.5em;
  }

  @media (min-width: 1024px) {
    margin-top: 30px;
    font-size: 4em;
  }
`;

export const Menu = styled.div`
  margin-top: 0;
  background-color: rgb(0, 0, 0, 0.5);
  width: 100%;
  padding: 15px;

  @media (min-width: 768px) {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0)
    );
  }
`;

export const NavList = styled.nav`
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 1024px) {
    width: 1000px;
  }
`;

export const NavItem = styled.div`
  font-size: 1.4em;
  font-family: "Rajdhani-Bold";
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: transform 30ms ease-in-out;
    &.Macro {
      color: #009933;
    }

    &.Sunset {
      color: #ffa31a;
    }

    &.Urban {
      color: #007599;
    }
    &.BnW {
      -webkit-text-fill-color: black; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-stroke-color: white;
    }
  }

  @media (min-width: 1024px) {
    font-size: 2em;
  }
`;
