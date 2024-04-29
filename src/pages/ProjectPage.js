import Header from "../components/Header";
import ProjectComponent from "../components/ProjectComponent";
import {
  ProjectsDiv,
  StyledLink,
  Title,
  TitleDiv,
  TitleIcon,
} from "../components/StyledComponent";
import { ProjectsData } from "../constants/projects";

function ProjectPage() {
  return (
    <>
      <Header />
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
            />
          </StyledLink>
        ))}
      </ProjectsDiv>
    </>
  );
}

export default ProjectPage;
