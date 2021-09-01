import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div``;

export const Button = styled.button`
  padding: 1em;
  background: transparent;
  border: 0;
  cursor: pointer;
  position: absolute;
  left: 0.5em;
  top: 1em;
  height: 3em;
  z-index: 1000;
  outline: none;

  span {
    display: block;
    position: relative;
  }

  span,
  span::before,
  span::after {
    background: white;
    margin-top: 10%;
    margin-bottom: 10%;
    width: 3em;
    height: 6px;
    border-radius: 1em;
    transition: transform 250ms ease-in-out;
  }

  span::before,
  span::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
  }

  span::before {
    top: 6px;
  }

  span::after {
    bottom: 6px;
  }

  &.open {
    position: fixed;
    
    span {
      transform: rotate(.625turn);
    }
    
    span::before {
      transform: rotate(90deg) translateX(-10px);
    }

    span::after {
      opacity: 0;
    }
  }

  }
`;

export const Base = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  color: #dbdbdb;
  background-color: #0d0d0d;
  opacity: 0.9;

  &.open {
    transform: translateX(0%);
    transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);
    }
  }

  &.closed {
    transform: translateX(-100%);
    transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);
  }

  @media (min-width: 481px) {
    width: 200px;

    }
  }
 
`;

export const List = styled.div`
  height: 80%;
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 481px) {
    width: 90%;
    height: 50%;
  }
`;

export const Link = styled(ReactRouterLink)`
  padding: 7%;
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 7px;
  }

  &:hover {
    background: rgb(33, 33, 33);
    background: radial-gradient(#0d0d0d, #212121);
  }
  &:visited {
    color: #dbdbdb;
  }

  @media (min-width: 481px) {
    font-size: 2.5em;
  }
`;

export const GalleryDropDown = styled.a`
  padding: 7%;
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 7px;
  }

  &:hover {
    background: rgb(33, 33, 33);
    background: radial-gradient(#0d0d0d, #212121);
  }
  &:visited {
    color: #dbdbdb;
  }

  @media (min-width: 481px) {
    font-size: 2.5em;
  }
`;

export const DropDownItem = styled(Link)``;

export const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const DropDownList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  overflow: hidden;
  height: auto;

  ${Link} {
    width: 100%;
    height: fit-content;
    font-size: 1.8em;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0)
    );

    &:last-of-type {
      margin-bottom: 10%;
    }
  }

  &.closed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 400ms cubic-bezier(0.5, 0, 0.1, 1);
  }
  &.open {
    max-height: 1200px;
    transition: max-height 400ms cubic-bezier(0.5, 0, 0.1, 1);

    ${Link} {
      &:hover {
        color: black;
        width: 130px;
        &.macro {
          background: radial-gradient(#009933, #212121);
        }

        &.sunset {
          background: radial-gradient(#ffa31a, #212121);
        }

        &.urban {
          background: radial-gradient(#007599, #212121);
        }

        background: radial-gradient(white, #212121);
      }
    }
  }
`;
