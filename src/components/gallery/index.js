import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Container, PhotoGrid, PhotoItem, Photo } from "./styles/gallery";

export default function Gallery({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Gallery.PhotoGrid = function GalleryPhotoGrid({ children, ...rest }) {
  return <PhotoGrid {...rest}>{children}</PhotoGrid>;
};

Gallery.PhotoItem = function GalleryPhotoItem({ children, ...rest }) {
  return <PhotoItem {...rest}>{children}</PhotoItem>;
};

Gallery.Photo = function GalleryPhoto({ children, ...rest }) {
  return <Photo {...rest}>{children}</Photo>;
};
