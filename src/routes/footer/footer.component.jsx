import { Fragment } from "react";
import {
  FooterContainer,
  FooterLinks,
  FooterLink,
  Logo,
} from "./footer.styles";

const Footer = () => {
  return (
    <Fragment>
      <FooterContainer>
        <Logo>
          <a href="/">MV</a>
        </Logo>
        <FooterLinks>
          <a href="/about">About</a>
          <FooterLink to="projects" spy={true} smooth={true}>
            Projects
          </FooterLink>
          <FooterLink to="contact" spy={true} smooth={true}>
            Contact
          </FooterLink>
        </FooterLinks>
        <a href="mailto:myvendramini@gmail.com?subject=contact-for-coding-job">
          ramini@gmail.com
        </a>
      </FooterContainer>
    </Fragment>
  );
};

export default Footer;
