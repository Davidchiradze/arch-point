import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ProjectsData } from "../../constants/projects";
import styled from "styled-components";
import { colors, spacing, typography, media } from "../../theme";

const ProjectDetailsContainer = styled.div`
  min-height: 100vh;
  background: ${colors.background};
`;

const ProjectHero = styled.div`
  position: relative;
  height: 70vh;
  min-height: 500px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const ProjectContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${spacing["2xl"]};
  color: ${colors.background};
  z-index: 2;
`;

const BackButton = styled.button`
  position: absolute;
  top: ${spacing.xl};
  left: ${spacing.xl};
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: ${colors.background};
  padding: ${spacing.sm} ${spacing.lg};
  border-radius: 25px;
  font-weight: ${typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  z-index: 3;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const ProjectTitle = styled.h1`
  font-size: ${typography.fontSize["4xl"]};
  font-weight: ${typography.fontWeight.bold};
  line-height: ${typography.lineHeight.tight};
  margin-bottom: ${spacing.lg};
  animation: fadeInUp 0.8s ease-out;

  ${media.sm} {
    font-size: ${typography.fontSize["5xl"]};
  }

  ${media.lg} {
    font-size: ${typography.fontSize["6xl"]};
  }
`;

const ProjectSize = styled.div`
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.medium};
  background: ${colors.primary};
  color: ${colors.background};
  padding: ${spacing.sm} ${spacing.lg};
  border-radius: 25px;
  display: inline-block;
  margin-bottom: ${spacing.lg};
`;

const ProjectDescription = styled.p`
  font-size: ${typography.fontSize.lg};
  line-height: ${typography.lineHeight.relaxed};
  opacity: 0.9;
  animation: fadeInUp 0.8s ease-out 0.4s both;
  max-width: 600px;

  ${media.sm} {
    font-size: ${typography.fontSize.xl};
  }
`;

const NavigationArrows = styled.div`
  position: absolute;
  bottom: ${spacing["2xl"]};
  right: ${spacing["2xl"]};
  display: flex;
  gap: ${spacing.lg};
  z-index: 3;
`;

const ArrowButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: ${colors.background};
  font-size: ${typography.fontSize.lg};
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const ProjectInfo = styled.div`
  padding: ${spacing["4xl"]} 0;
`;

const ProjectSpecs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing.lg};

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SpecItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.lg};
  background: ${colors.backgroundLight};
  border-radius: 8px;
  border-left: 4px solid ${colors.primary};
`;

const SpecLabel = styled.span`
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.textLight};
`;

const SpecValue = styled.span`
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.text};
`;

const ProjectGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${spacing.lg};
  margin-top: ${spacing.xl};
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 3px solid transparent;

  &:hover {
    transform: scale(1.05);
    border-color: ${colors.primary};
  }

  &.active {
    border-color: ${colors.primary};
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};

  ${media.sm} {
    padding: 0 ${spacing.xl};
  }

  ${media.lg} {
    padding: 0 ${spacing["2xl"]};
  }
`;

const ProjectDetails = () => {
  const { projectId } = useParams();
  const history = useHistory();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = ProjectsData.find((proj) => proj.id === parseInt(projectId));

  if (!project) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "4rem 2rem",
          fontSize: "1.5rem",
          color: "#666",
        }}
      >
        პროექტი ვერ მოიძებნა
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.image.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.image.length - 1 : prev - 1
    );
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <ProjectDetailsContainer>
      {/* Hero Section */}
      <ProjectHero>
        <ProjectImage
          src={project.image[currentImageIndex]}
          alt={project.title}
        />
        <ProjectOverlay />
        <BackButton onClick={goBack}>
          <i className="ion-ios-arrow-back"></i> უკან დაბრუნება
        </BackButton>
        <ProjectContent>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectSize>{project.m2}</ProjectSize>
          <ProjectDescription>
            მოდერნული არქიტექტურული გადაწყვეტა, რომელიც შექმნილია კონკრეტული
            მომხარებლის მოთხოვნების შესაბამისად.
          </ProjectDescription>
        </ProjectContent>

        {project.image.length > 1 && (
          <NavigationArrows>
            <ArrowButton onClick={prevImage}>
              <i className="ion-ios-arrow-back"></i>
            </ArrowButton>
            <ArrowButton onClick={nextImage}>
              <i className="ion-ios-arrow-forward"></i>
            </ArrowButton>
          </NavigationArrows>
        )}
      </ProjectHero>

      <Container>
        <ProjectInfo>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "#333",
                  marginBottom: "1.5rem",
                }}
              >
                პროექტის დეტალები
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  color: "#666",
                  marginBottom: "2rem",
                }}
              >
                ეს პროექტი წარმოადგენს მოდერნული არქიტექტურის ნიმუშს, სადაც
                ყურადღება ექცევა ფუნქციონალურობას, ესთეტიკასა და მდგრადობას.
                პროექტი შექმნილია ყველაზე თანამედროვე მასალებისა და
                ტექნოლოგიების გამოყენებით.
              </p>

              <ProjectSpecs>
                <SpecItem>
                  <SpecLabel>ფართი:</SpecLabel>
                  <SpecValue>{project.m2}</SpecValue>
                </SpecItem>
                <SpecItem>
                  <SpecLabel>ტიპი:</SpecLabel>
                  <SpecValue>ინდივიდუალური სახლი</SpecValue>
                </SpecItem>
                <SpecItem>
                  <SpecLabel>სტილი:</SpecLabel>
                  <SpecValue>მოდერნული</SpecValue>
                </SpecItem>
                <SpecItem>
                  <SpecLabel>წელი:</SpecLabel>
                  <SpecValue>2023</SpecValue>
                </SpecItem>
              </ProjectSpecs>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "1.5rem",
                }}
              >
                გალერეა
              </h3>
              <ProjectGallery>
                {project.image.map((image, index) => (
                  <GalleryImage
                    key={index}
                    src={image}
                    alt={`${project.title} - სურათი ${index + 1}`}
                    onClick={() => setCurrentImageIndex(index)}
                    className={index === currentImageIndex ? "active" : ""}
                  />
                ))}
              </ProjectGallery>
            </div>
          </div>
        </ProjectInfo>
      </Container>
    </ProjectDetailsContainer>
  );
};

export default ProjectDetails;
