import React from "react";
import { Navbar } from "../components";

export function NavbarContainer() {
  return (
    <>
      <Navbar>
        <Navbar.Button />
        <Navbar.Base>
          <Navbar.List>
            <Navbar.Link to={"/"}>Home</Navbar.Link>
            <Navbar.DropDown>
              <Navbar.DropDownItem>Gallery</Navbar.DropDownItem>
              <Navbar.DropDownList>
                <Navbar.Link to={"/gallery"}>Macro</Navbar.Link>
                <Navbar.Link to={"/gallery"}>Sunset</Navbar.Link>
                <Navbar.Link to={"/gallery"}>Street/ Urban</Navbar.Link>
                <Navbar.Link to={"/gallery"}>Black & White</Navbar.Link>
              </Navbar.DropDownList>
            </Navbar.DropDown>
            <Navbar.Link to="/about">About</Navbar.Link>
          </Navbar.List>
        </Navbar.Base>
      </Navbar>
    </>
  );
}
