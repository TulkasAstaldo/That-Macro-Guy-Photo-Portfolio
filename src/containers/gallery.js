import React from "react";
import { Gallery, Header } from "../components";

export function GalleryContainer() {
  return (
    <>
      <Header>
        <Header.Title to={"/"}>
          That Macro Guy's
          <br />
          Gallery
        </Header.Title>
        <Header.Menu>
          <Header.NavList>
            <Header.NavItem>Macro</Header.NavItem>
            <Header.NavItem>Sunset</Header.NavItem>
            <Header.NavItem>Urban</Header.NavItem>
            <Header.NavItem>BnW</Header.NavItem>
          </Header.NavList>
        </Header.Menu>
      </Header>
      <Gallery></Gallery>
    </>
  );
}
