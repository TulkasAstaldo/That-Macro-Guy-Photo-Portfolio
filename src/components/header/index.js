import React from "react";
import { useDispatch } from "react-redux";
import {
  setMacro,
  setBnW,
  setDefault,
  setUrban,
  setSunset,
} from "../../actions";

import {
  Container,
  Title,
  Menu,
  NavList,
  NavItem,
  Link,
} from "./styles/header";

export default function Header({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Header.Title = function HeaderTitle({ children, ...rest }) {
  const dispatch = useDispatch();
  return (
    <Title>
      <Link {...rest} onClick={() => dispatch(setDefault())}>
        {children}
      </Link>
    </Title>
  );
};

Header.Menu = function HeaderMenu({ children, ...rest }) {
  return <Menu {...rest}>{children}</Menu>;
};

Header.NavList = function HeaderNavList({ children, ...rest }) {
  return <NavList {...rest}>{children}</NavList>;
};

Header.NavItem = function HeaderNavItem({ children, ...rest }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    switch (children) {
      case "Macro":
        dispatch(setMacro());
        break;
      case "Sunset":
        dispatch(setSunset());
        break;
      case "Urban":
        dispatch(setUrban());
        break;
      case "BnW":
        dispatch(setBnW());
        break;
      default:
        dispatch(setDefault());
    }
  };

  return (
    <NavItem className={children} onClick={handleClick} {...rest}>
      {children}
    </NavItem>
  );
};
