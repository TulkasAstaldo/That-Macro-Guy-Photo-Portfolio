import { createGlobalStyle } from "styled-components";
import Rajdhani from "./fonts/Rajdhani-Regular.ttf";
import RajdhaniBold from "./fonts/Rajdhani-Bold.ttf";

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Rajdhani";
    src: url(${Rajdhani}) format("truetype");
  }
  @font-face {
    font-family: "Rajdhani-Bold";
    src: url(${RajdhaniBold}) format("truetype");
  }
  
  html {
    background: ${(props) =>
      props.isMacro
        ? "radial-gradient(#009933, #212121)"
        : props.isSunset
        ? "radial-gradient(#ffa31a, #212121)"
        : props.isStreet
        ? "radial-gradient(#006280, #212121)"
        : props.isBnW
        ? "radial-gradient(white, #212121)"
        : "#000000"} ;
  }

  html, body {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: "Rajdhani", "Helvetica";
    color: #333333;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
}`;
