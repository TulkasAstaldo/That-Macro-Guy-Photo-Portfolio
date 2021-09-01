import { createGlobalStyle } from "styled-components";
import Rajdhani from "./fonts/Rajdhani-Regular.ttf";
import RajdhaniBold from "./fonts/Rajdhani-Bold.ttf";
import spider from "./images/IMG_5537.jpg";
import bike from "./images/bike.jpg";
import alley from "./images/alley.jpg";
import bw from "./images/bw.jpg";
import storm from "./images/eye2.jpg";
import { useEffect } from "react";

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: Rajdhani;
    src: url(${Rajdhani}) format("truetype");
  }
  @font-face {
    font-family: "Rajdhani-Bold";
    src: url(${RajdhaniBold}) format("truetype");
  }

  html, body {
    height: 100vh;
    width: 100vw;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  body {
    position: relative;
    background: ${(props) =>
      props.isMacro
        ? `radial-gradient(rgba(0,0,0, 0.1), rgba(0,0,0,.9)), no-repeat fixed center url(${spider})`
        : props.isSunset
        ? `radial-gradient(rgba(0,0,0, 0.1), rgba(0,0,0,.4)), no-repeat fixed center url(${bike})`
        : props.isUrban
        ? `radial-gradient(rgba(0,0,0, 0.1), rgba(0,0,0,.9)), no-repeat fixed center url(${alley})`
        : props.isBnW
        ? `radial-gradient(rgba(0,0,0, 0.1), rgba(0,0,0,.9)), no-repeat fixed center url(${bw})`
        : `radial-gradient(rgba(0,0,0, 0), rgba(0,0,0,.7)), no-repeat fixed center url(${storm})`} ;
      
    font-family: Rajdhani, Arial, Helvetica, sans-serif;
    color: #333333;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;

    background-size: cover;
    
    &::after {
      background: ${(props) =>
        props.isMacro
          ? `radial-gradient(rgba(0,0,0, 0.1), rgba(0,0,0,.9)), no-repeat fixed center url(${spider})`
          : props.isSunset
          ? `radial-gradient(rgba(0,0,0, 0.1), rgba(0,0,0,.4)), no-repeat fixed center url(${bike})`
          : props.isUrban
          ? `radial-gradient(rgba(0,0,0, 0.1), rgba(0,0,0,.9)), no-repeat fixed center url(${alley})`
          : props.isBnW
          ? `radial-gradient(rgba(0,0,0, 0.1), rgba(0,0,0,.9)), no-repeat fixed center url(${bw})`
          : `radial-gradient(rgba(0,0,0, 0), rgba(0,0,0,.7)), no-repeat fixed center url(${storm})`} ;
        
          background-size: cover;
      bottom: 0;
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      opacity: 0;
      transition: opacity 3s;
      z-index: -1;
    }
    
  }

  #root {
    width: inherit;
    height: inherit;
  }
`;
