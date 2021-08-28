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
          <Footer.Icon>
            <FacebookSquare />
          </Footer.Icon>
          <Footer.Icon>
            <Instagram />
          </Footer.Icon>
          <Footer.Icon>
            <LinkedinSquare />
          </Footer.Icon>
          <Footer.Icon>
            <Github />
          </Footer.Icon>
          <Footer.Icon>
            <Twitter />
          </Footer.Icon>
        </Footer.IconList>
        <Footer.Text>Copyright Panagiotis Ioannou 2021 ©</Footer.Text>
      </Footer>
    </>
  );
}
