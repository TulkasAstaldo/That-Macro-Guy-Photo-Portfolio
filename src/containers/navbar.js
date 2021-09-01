import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../components";

export function NavbarContainer() {
  const isOpen = useSelector(({ toggle }) => toggle.isOpen);
  return (
    <>
      <Navbar>
        <Navbar.Button />
        <Navbar.Base>
          <Navbar.List>
            <Navbar.Link to={"/"}>Home</Navbar.Link>
            <Navbar.DropDown>
              {!isOpen ? (
                <Navbar.GalleryDropdown>Gallery</Navbar.GalleryDropdown>
              ) : (
                <Navbar.DropDownItem to={"/gallery"}>
                  Gallery
                </Navbar.DropDownItem>
              )}
              <Navbar.DropDownList>
                <Navbar.Link to={"/gallery"}>Macro</Navbar.Link>
                <Navbar.Link to={"/gallery"}>Sunset</Navbar.Link>
                <Navbar.Link to={"/gallery"}>Urban</Navbar.Link>
                <Navbar.Link to={"/gallery"}>BnW</Navbar.Link>
              </Navbar.DropDownList>
            </Navbar.DropDown>
            <Navbar.Link to="/about">About</Navbar.Link>
          </Navbar.List>
        </Navbar.Base>
      </Navbar>
    </>
  );
}
