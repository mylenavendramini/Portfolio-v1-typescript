import { Outlet } from "react-router-dom";
import { HomeContainer } from "./home.styles.jsx";
import Presentation from "../../components/presentation/presentation.component";
import Projects from "../../components/projects/projects.component.jsx";
import Contact from "../../components/contact/contact.component.jsx";
import Vertical from "../../components/vertical/vertical.component.jsx";

const Home = () => {
  return (
    <div>
      <Outlet />
      <HomeContainer>
        <Vertical />
        <Presentation />
        <Projects />
        <Contact />
      </HomeContainer>
    </div>
  );
};

export default Home;
