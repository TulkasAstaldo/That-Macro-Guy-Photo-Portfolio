import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle, setDefault, setTheme } from "../../actions";
import {
  Container,
  Button,
  Base,
  List,
  Link,
  GalleryDropDown,
  DropDown,
  DropDownList,
  DropDownItem,
} from "./styles/navbar";

export default function Navbar({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Navbar.Button = function NavbarButton({ nav, children, ...rest }) {
  const navOpen = useSelector(({ toggle }) => toggle.nav);
  const dispatch = useDispatch();

  return (
    <Button
      nav={nav}
      className={navOpen ? "open" : "closed"}
      onClick={() => dispatch(toggle(nav))}
      {...rest}
    >
      <span>{children}</span>
    </Button>
  );
};

Navbar.Title = function Title({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Navbar.Base = function NavbarBase({ children, ...rest }) {
  const navOpen = useSelector(({ toggle }) => toggle.nav);
  return (
    <Base className={navOpen ? "open" : "closed"} {...rest}>
      {children}
    </Base>
  );
};

Navbar.List = function NavbarList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Navbar.Link = function NavLink({ nav, children, ...rest }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggle(nav));
    children ? dispatch(setTheme(children)) : dispatch(setDefault());
  };

  return (
    <Link className={children} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
};

Navbar.DropDown = function NavbarDropDown({ children, ...rest }) {
  return <DropDown {...rest}>{children}</DropDown>;
};

Navbar.GalleryDropdown = function NavbarGalleryDropDown({
  dropdown,
  children,
  ...rest
}) {
  const dispatch = useDispatch();

  return (
    <GalleryDropDown onClick={() => dispatch(toggle(dropdown))} {...rest}>
      {children}
    </GalleryDropDown>
  );
};

Navbar.DropDownItem = function NavbarDropDownItem({
  nav,
  dropdown,
  children,
  ...rest
}) {
  const dispatch = useDispatch();

  const handleGalleryClick = () => {
    dispatch(toggle(dropdown));
    dispatch(setDefault());
    setTimeout(() => dispatch(toggle(nav)), 300);
  };

  return (
    <DropDownItem onClick={handleGalleryClick} {...rest}>
      {children}
    </DropDownItem>
  );
};

Navbar.DropDownList = function NavbarDropDownList({ children, ...rest }) {
  const dropdown = useSelector(({ toggle }) => toggle.dropdown);
  return (
    <DropDownList className={dropdown ? "open" : "closed"} {...rest}>
      {children}
    </DropDownList>
  );
};
