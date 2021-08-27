import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Menu, NavItem } from "./styles/gallery";
import {
  setMacro,
  setBnW,
  setDefault,
  setStreet,
  setSunset,
} from "../../actions";

export default function Gallery({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Gallery.Menu = function GalleryMenu({ children, ...rest }) {
  return <Menu {...rest}>{children}</Menu>;
};

Gallery.NavItem = function GalleryNavItem({ children, ...rest }) {
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

  const linkClassName = (children) => {
    switch (children) {
      case "Macro":
        return "macro";
      case "Sunset":
        return "sunset";
      case "Street":
        return "street";
      case "BnW":
        return "bnw";
      default:
        return;
    }
  };

  return (
    <NavItem onClick={handleClick} {...rest}>
      {children}
    </NavItem>
  );
};
