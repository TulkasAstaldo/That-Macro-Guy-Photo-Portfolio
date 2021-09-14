import React from "react";
import { useDispatch } from "react-redux";
import { setDefault } from "../../actions";
// import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  BackIcon,
  PhotoGrid,
  PhotoItem,
  Photo,
} from "./styles/gallery";

export default function Gallery({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Gallery.BackIcon = function GalleryBackIcon({ children, ...rest }) {
  const dispatch = useDispatch();

  return (
    <BackIcon onClick={() => dispatch(setDefault())} {...rest}>
      {children}
    </BackIcon>
  );
};

Gallery.PhotoGrid = function GalleryPhotoGrid({ children, ...rest }) {
  return <PhotoGrid {...rest}>{children}</PhotoGrid>;
};

Gallery.PhotoItem = function GalleryPhotoItem({ children, ...rest }) {
  return <PhotoItem {...rest}>{children}</PhotoItem>;
};

Gallery.Photo = function GalleryPhoto({ children, ...rest }) {
  return <Photo {...rest}>{children}</Photo>;
};
