import {
  AboutContainer,
  Gray,
  AboutGrid,
  NavBarContainer,
  Logo,
  LinkedinLink,
  NavLinks,
  NavLink,
  FooterContainer,
  FooterLink,
  LogoFooter,
} from "./about.styles";

import {
  FadeInDiv,
  FadeIn5Div,
  PulseDiv,
  FadeIn10Div,
  SlideInUpDiv,
} from "../../animation";

import { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <NavBarContainer>
        <Logo>
          <a href="/">MV</a>
        </Logo>
      </NavBarContainer>

      <AboutContainer>
        <FadeIn5Div>
          <PulseDiv>
            {" "}
            <h2>I'm Mylena Vendramini, a </h2>
            <Gray>front-end developer</Gray>
            <h2>
              , driven by challenging work and truly passionate about what I do.
            </h2>
          </PulseDiv>
        </FadeIn5Div>

        <h1
          data-aos={"fade-up"}
          data-aos-duration={"2000"}
          data-aos-delay={"500"}
        >
          Click <a href="/">here</a> to take a look at my CV.
        </h1>
        <h6
          data-aos={"fade-up"}
          data-aos-duration={"2000"}
          data-aos-delay={"500"}
        >
          <a href="https://www.linkedin.com/in/mylena-vendramini-0ba475229/">
            in
          </a>
        </h6>

        <h4 data-aos={"fade-up"} data-aos-duration={"1000"}>
          A little more about me:
        </h4>
        <h5
          data-aos={"fade-up"}
          data-aos-duration={"1000"}
          data-aos-delay={"100"}
        >
          I'm from Brazil, currently based in London.
          <br />I graduated in Law in the year 2017 and after four years working
          in the field, I understood that I had to work with something I{" "}
          <i>truly love</i>
          .
          <br />
          That's when I discovered my passion for coding and creating custom
          websites.
          <br /> I'm also passionate about travelling, writing and a good
          coffee.
        </h5>
        <h4 data-aos={"fade-up"} data-aos-duration={"1000"}>
          Here are a few technologies I’ve been working with recently:
        </h4>
        <AboutGrid
          data-aos={"fade-up"}
          data-aos-duration={"1000"}
          data-aos-delay={"100"}
        >
          <h5>&#10143; JavaScript (ES6+)</h5>
          <h5>&#10143; React</h5>
          <h5>&#10143; Node.js</h5>
          <h5>&#10143; TypeScript</h5>
          <h5>&#10143; MongoDB</h5>
        </AboutGrid>
        <h4 data-aos={"fade-up"} data-aos-duration={"1000"}>
          Languages I speak fluent:
        </h4>
        <AboutGrid
          data-aos={"fade-up"}
          data-aos-duration={"1000"}
          data-aos-delay={"100"}
        >
          <h5>&#10143; en-US English </h5>
          <h5>&#10143; es-ES Español </h5>
          <h5>&#10143; pt-BR Português</h5>
        </AboutGrid>
        <h4 data-aos={"fade-up"} data-aos-duration={"1000"}>
          Interested in working with me?
        </h4>
        <p data-aos={"fade-up"} data-aos-duration={"1000"}>
          You can e-mail me at{" "}
          <a href="mailto:myvendramini@gmail.com?subject=travelwithme">
            myvendramini@gmail.com
          </a>
          .
        </p>
      </AboutContainer>

      <FooterContainer>
        <Logo>
          <a href="/">MV</a>
        </Logo>
      </FooterContainer>
    </Fragment>
  );
};

export default About;
