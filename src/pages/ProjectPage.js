import React, { useState } from "react";
import { ProjectsData } from "../constants/projects";
import {
  ProjectsSection,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  TitleIcon,
  ProjectsGrid,
  LoadMoreButton,
  Container,
} from "../components/projects/ProjectGrid";
import {
  ProjectCard,
  ProjectImage,
  ProjectInfo,
  ProjectTitle,
  ProjectSize,
} from "../components/projects/ProjectCard";
import { StyledLink } from "../components/StyledComponent";

function ProjectPage() {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, ProjectsData.length));
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ProjectsSection>
      <Container>
        <SectionHeader>
          <TitleIcon />
          <SectionTitle>ჩვენი პროექტები</SectionTitle>
          <SectionSubtitle>
            ყველა პროექტი ინდივიდუალურია და შექმნილია კონკრეტული მომხარებლის
            მოთხოვნების შესაბამისად. ჩვენ ვქმნით მოდერნულ და ფუნქციონალურ
            არქიტექტურულ გადაწყვეტებებს.
          </SectionSubtitle>
        </SectionHeader>

        <ProjectsGrid>
          {ProjectsData.slice(0, visibleProjects).map((project) => (
            <StyledLink
              key={project.id}
              to={`/project/${project.id}`}
              onClick={scrollToTop}
            >
              <ProjectCard>
                <ProjectImage src={project.image[0]} alt={project.title} />
                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectSize>{project.m2}</ProjectSize>
                </ProjectInfo>
              </ProjectCard>
            </StyledLink>
          ))}
        </ProjectsGrid>

        {visibleProjects < ProjectsData.length && (
          <LoadMoreButton onClick={loadMoreProjects}>
            მეტი პროექტის ნახვა
          </LoadMoreButton>
        )}
      </Container>
    </ProjectsSection>
  );
}

export default ProjectPage;
