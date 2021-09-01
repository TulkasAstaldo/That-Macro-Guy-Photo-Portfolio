import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleDropDown,
  toggleNav,
  setMacro,
  setSunset,
  setUrban,
  setBnW,
  setDefault,
} from "../../actions";
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

Navbar.Button = function NavbarButton({ children, ...rest }) {
  const openNav = useSelector(({ toggle }) => toggle.openNav);
  const dispatch = useDispatch();

  return (
    <Button
      className={openNav ? "open" : "closed"}
      onClick={() => dispatch(toggleNav(openNav))}
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
  const openNav = useSelector(({ toggle }) => toggle.openNav);
  return (
    <Base className={openNav ? "open" : "closed"} {...rest}>
      {children}
    </Base>
  );
};

Navbar.List = function NavbarList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Navbar.Link = function NavLink({ children, ...rest }) {
  const openNav = useSelector(({ toggle }) => toggle.openNav);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleNav(openNav));

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

  const linkClassName = (children) => {
    switch (children) {
      case "Macro":
        return "macro";
      case "Sunset":
        return "sunset";
      case "Urban":
        return "urban";
      case "BnW":
        return "bnw";
      default:
        return;
    }
  };

  return (
    <Link className={linkClassName(children)} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
};

Navbar.DropDown = function NavbarDropDown({ children, ...rest }) {
  return <DropDown {...rest}>{children}</DropDown>;
};

Navbar.GalleryDropdown = function NavbarGalleryDropDown({ children, ...rest }) {
  const isOpen = useSelector(({ toggle }) => toggle.isOpen);
  const dispatch = useDispatch();

  return (
    <GalleryDropDown onClick={() => dispatch(toggleDropDown(isOpen))} {...rest}>
      {children}
    </GalleryDropDown>
  );
};

Navbar.DropDownItem = function NavbarDropDownItem({ children, ...rest }) {
  const isOpen = useSelector(({ toggle }) => toggle.isOpen);
  const openNav = useSelector(({ toggle }) => toggle.openNav);
  const dispatch = useDispatch();

  const handleGalleryClick = () => {
    dispatch(toggleDropDown(isOpen));
    setTimeout(() => dispatch(toggleNav(openNav)), 300);
  };

  return (
    <DropDownItem onClick={handleGalleryClick} {...rest}>
      {children}
    </DropDownItem>
  );
};

Navbar.DropDownList = function NavbarDropDownList({ children, ...rest }) {
  const isOpen = useSelector(({ toggle }) => toggle.isOpen);
  return (
    <DropDownList className={isOpen ? "open" : "closed"} {...rest}>
      {children}
    </DropDownList>
  );
};
