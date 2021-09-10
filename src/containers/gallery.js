import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../actions";
import { Gallery, Header } from "../components";

export function GalleryContainer() {
  const { isMacro, isSunset, isUrban, isBnW } = useSelector(
    ({ theme }) => theme
  );
  const { photos, macro, sunset, urban, bnw } = useSelector(
    ({ imagesCollection }) => imagesCollection
  );
  const dispatch = useDispatch();
  const collection = isMacro
    ? macro
    : isSunset
    ? sunset
    : isUrban
    ? urban
    : isBnW
    ? bnw
    : photos;

  console.log(collection);

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
        <Gallery.PhotoGrid>
          {collection.map((image) => (
            <Gallery.PhotoItem key={image.id}>
              <Gallery.Photo src={image.url} />
            </Gallery.PhotoItem>
          ))}
        </Gallery.PhotoGrid>
      </Gallery>
    </>
  );
}
