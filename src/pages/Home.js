import {
  WholeWrapper,
  ProjectsDiv,
  Title,
  TitleIcon,
  TitleDiv,
  StyledLink,
} from "../components/StyledComponent";
// import ICONS from "../constants/icons";
import ProjectComponent from "../components/ProjectComponent";
import { ProjectsData } from "../constants/projects";
// import CoverComponent from "../components/CoverComponent";
import TestComponents from "../components/TestComponent";

// const ImageArr = [
//   ICONS.AfterFooterImage1,
//   ICONS.AfterFooterImage2,
//   ICONS.AfterFooterImage3,
// ];

const scrollUp = () => {
  window.scrollTo(0, 0);
};

// let component = <CoverComponent array={ImageArr} intervalTime={5000} />;
function Home() {
  return (
    <WholeWrapper>
      <TestComponents />
      <TitleDiv>
        <TitleIcon />
        <Title>პროექტები</Title>
      </TitleDiv>
      <ProjectsDiv>
        {ProjectsData.map((project) => (
          <StyledLink to={`/project/:${project.id}`}>
            <ProjectComponent
              photo={project.image[0]}
              address={project.title}
              m2={project.m2}
              onClick={() => scrollUp()}
            />
          </StyledLink>
        ))}
      </ProjectsDiv>
    </WholeWrapper>
  );
}

export default Home;
