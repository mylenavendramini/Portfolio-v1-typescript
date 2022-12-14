import {
  VerticalContainer,
  LeftContainer,
  RightContainer,
  VerticalLinks,
  VerticalLink,
  LinkedinLink,
} from "./vertical.styles";

const Vertical = () => {
  return (
    <VerticalContainer>
      <RightContainer>
        <VerticalLinks>
          <a href="/about">ABOUT</a>
          <VerticalLink to="projects" spy={true} smooth={true}>
            PROJECTS
          </VerticalLink>
        </VerticalLinks>
      </RightContainer>

      <LeftContainer>
        <VerticalLinks>
          <a href="mailto:myvendramini@gmail.com?subject=contact-for-coding-job">
            myvendramini@gmail.com
          </a>
        </VerticalLinks>
      </LeftContainer>

      <LinkedinLink
        href="https://www.linkedin.com/in/mylenavendramini/"
        target="_blank"
      >
        in
      </LinkedinLink>
    </VerticalContainer>
  );
};

export default Vertical;
