import React from "react";
import { Footer } from "../components";
import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";

export function FooterContainer() {
  return (
    <>
      <Footer>
        <Footer.IconList>
          <Footer.Icon url={"https://www.facebook.com/TulkasAstaldo/"}>
            <FacebookSquare />
          </Footer.Icon>
          <Footer.Icon url={"https://www.instagram.com/tulkas_astaldo"}>
            <Instagram />
          </Footer.Icon>
          <Footer.Icon url={"https://www.linkedin.com/in/p-ioan9/"}>
            <LinkedinSquare />
          </Footer.Icon>
          <Footer.Icon url={"https://github.com/TulkasAstaldo"}>
            <Github />
          </Footer.Icon>
          <Footer.Icon url={"https://twitter.com/TulkasAstaldo9"}>
            <Twitter />
          </Footer.Icon>
        </Footer.IconList>
        <Footer.Text>Copyright Panagiotis Ioannou 2021 ©</Footer.Text>
      </Footer>
    </>
  );
}
