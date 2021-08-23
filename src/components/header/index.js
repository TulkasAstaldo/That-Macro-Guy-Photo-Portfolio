import React from "react";

import { Container, Title } from "./styles/header";

export default function Header({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Header.Title = function HeaderTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};
