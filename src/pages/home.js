import React from "react";
import { Header } from "../components";

export default function Home() {
  return (
    <>
      <Header>
        <Header.Title to={"/"}>
          That Macro Guy <br /> Photography
        </Header.Title>
      </Header>
    </>
  );
}
