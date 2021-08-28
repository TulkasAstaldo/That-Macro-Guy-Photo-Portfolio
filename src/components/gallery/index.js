import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "./styles/gallery";

export default function Gallery({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
