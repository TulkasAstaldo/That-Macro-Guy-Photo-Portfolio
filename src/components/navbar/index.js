import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleDropDown,
  toggleNav,
  setMacro,
  setSunset,
  setStreet,
  setBnW,
  setDefault,
} from "../../actions";
import {
  Container,
  Button,
  Base,
  List,
  Link,
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
      case "Street/ Urban":
        dispatch(setStreet());
        break;
      case "Black & White":
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
      case "Street/ Urban":
        return "street";
      case "Black & White":
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

Navbar.DropDownItem = function NavbarDropDownItem({ children, ...rest }) {
  const isOpen = useSelector(({ toggle }) => toggle.isOpen);
  const dispatch = useDispatch();

  return (
    <DropDownItem onClick={() => dispatch(toggleDropDown(isOpen))} {...rest}>
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
