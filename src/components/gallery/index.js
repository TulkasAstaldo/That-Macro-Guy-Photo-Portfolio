import React from "react";
import { Container, Menu, NavItem } from "./styles/gallery";

export default function Gallery({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Gallery.Menu = function GalleryMenu({ children, ...rest }) {
  return <Menu {...rest}>{children}</Menu>;
};

Gallery.NavItem = function GalleryNavItem({ children, ...rest }) {
  return <NavItem {...rest}>{children}</NavItem>;
};
