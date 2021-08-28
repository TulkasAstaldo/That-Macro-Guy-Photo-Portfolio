import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setMacro,
  setBnW,
  setDefault,
  setStreet,
  setSunset,
} from "../../actions";

import { Container, Title, Menu, NavList, NavItem } from "./styles/header";

export default function Header({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Header.Title = function HeaderTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Header.Menu = function HeaderMenu({ children, ...rest }) {
  return <Menu {...rest}>{children}</Menu>;
};

Header.NavList = function HeaderNavList({ children, ...rest }) {
  return <NavList {...rest}>{children}</NavList>;
};

Header.NavItem = function HeaderNavItem({ children, ...rest }) {
  // const openNav = useSelector(({ toggle }) => toggle.openNav);
  const dispatch = useDispatch();

  const handleClick = () => {
    switch (children) {
      case "Macro":
        dispatch(setMacro());
        break;
      case "Sunset":
        dispatch(setSunset());
        break;
      case "Street":
        dispatch(setStreet());
        break;
      case "BnW":
        dispatch(setBnW());
        break;
      default:
        dispatch(setDefault());
    }
  };

  return (
    <NavItem onClick={handleClick} {...rest}>
      {children}
    </NavItem>
  );
};
