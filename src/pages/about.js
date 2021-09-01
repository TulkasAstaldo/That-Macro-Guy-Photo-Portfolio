import React from "react";
import { Header } from "../components";

export default function About() {
  return (
    <>
      <Header>
        <Header.Title to={"/"}>
          Who is <br />
          That Macro Guy?
        </Header.Title>
      </Header>
    </>
  );
}
