import React from "react";
import { Container, IconList, Icon, Text } from "./styles/footer";

export default function Footer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Footer.Text = function FooterText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Footer.IconList = function FooterIconList({ children, ...rest }) {
  return <IconList {...rest}>{children}</IconList>;
};

Footer.Icon = function FooterIcon({ url, src, children, ...rest }) {
  return (
    <Icon href={url} target="_blank" {...rest}>
      {children}
    </Icon>
  );
};
