import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../actions";
import { Gallery, Header } from "../components";
import { ReturnUpBack } from "@styled-icons/ionicons-sharp/ReturnUpBack";
import { ChevronUpCircle } from "@styled-icons/boxicons-regular/ChevronUpCircle";
import { useState } from "react";

export function GalleryContainer() {
  const { Macro, Sunset, Urban, BnW } = useSelector(({ theme }) => theme);
  const { viewShots } = useSelector(({ imagesCollection }) => imagesCollection);
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);

  const backUpArrow = Macro || Sunset || Urban || BnW ? true : false;

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  useEffect(() => {
    dispatch(fetchPhotos());
    console.log("works");
  }, [dispatch]);

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
      <Gallery>
        <Gallery.BackIcon opacityValue={backUpArrow ? 1 : 0}>
          <ReturnUpBack />
        </Gallery.BackIcon>

        <Gallery.BackTopIcon offset={offset}>
          <ChevronUpCircle />
        </Gallery.BackTopIcon>

        <Gallery.PhotoGrid>
          {viewShots.map((image) => (
            <Gallery.PhotoItem key={image.id}>
              <Gallery.Photo src={image.url} />
            </Gallery.PhotoItem>
          ))}
        </Gallery.PhotoGrid>
      </Gallery>
    </>
  );
}
