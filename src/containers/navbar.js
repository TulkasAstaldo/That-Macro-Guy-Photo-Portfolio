import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../components";

export function NavbarContainer() {
  const dropdownOpen = useSelector(({ toggle }) => toggle.dropdown);
  return (
    <>
      <Navbar>
        <Navbar.Button nav={"nav"} />
        <Navbar.Base>
          <Navbar.List>
            <Navbar.Link to={"/"} nav={"nav"}>
              Home
            </Navbar.Link>
            <Navbar.DropDown>
              {!dropdownOpen ? (
                <Navbar.GalleryDropdown dropdown={"dropdown"}>
                  Gallery
                </Navbar.GalleryDropdown>
              ) : (
                <Navbar.DropDownItem
                  nav={"nav"}
                  dropdown={"dropdown"}
                  to={"/gallery"}
                >
                  Gallery
                </Navbar.DropDownItem>
              )}
              <Navbar.DropDownList>
                <Navbar.Link nav={"nav"} to={"/gallery"}>
                  Macro
                </Navbar.Link>
                <Navbar.Link nav={"nav"} to={"/gallery"}>
                  Sunset
                </Navbar.Link>
                <Navbar.Link nav={"nav"} to={"/gallery"}>
                  Urban
                </Navbar.Link>
                <Navbar.Link nav={"nav"} to={"/gallery"}>
                  BnW
                </Navbar.Link>
              </Navbar.DropDownList>
            </Navbar.DropDown>
            <Navbar.Link to="/about" nav={"nav"}>
              About
            </Navbar.Link>
          </Navbar.List>
        </Navbar.Base>
      </Navbar>
    </>
  );
}
