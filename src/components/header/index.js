import React from "react";
import { useDispatch } from "react-redux";
import { setTheme, setDefault } from "../../actions";

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
    children ? dispatch(setTheme(children)) : dispatch(setDefault());
  };

  return (
    <NavItem className={children} onClick={handleClick} {...rest}>
      {children}
    </NavItem>
  );
};
