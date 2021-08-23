import React from "react";
import { Gallery, Header } from "../components";

export function GalleryContainer() {
  return (
    <>
      <Header>
        <Header.Title>That Macro Guy's Gallery</Header.Title>
      </Header>
      <Gallery>
        <Gallery.Menu>
          <Gallery.NavItem>Macro</Gallery.NavItem>
          <Gallery.NavItem>Sunset</Gallery.NavItem>
          <Gallery.NavItem>Street</Gallery.NavItem>
          <Gallery.NavItem>BnW</Gallery.NavItem>
        </Gallery.Menu>
      </Gallery>
    </>
  );
}
