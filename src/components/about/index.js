import React from "react";
import { Container, Photo } from "./styles/about";

export default function About({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

About.Photo = function AboutPhoto({ src, children, ...rest }) {
  return <Photo src={src} {...rest} />;
};
