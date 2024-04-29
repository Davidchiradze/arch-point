import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ProjectsData } from "../constants/projects";
// import CoverComponent from "../components/CoverComponent";
import Header from "../components/Header";
import { useState } from "react";
import { ButtonDiv, CoverDiv, StyledIcon } from "../components/StyledComponent";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const ActiveProjectData = ProjectsData.find(
    (proj) => +proj.id === +projectId.replace(":", "")
  );
  const [photoIndex, setPhotoIndex] = useState(0);
  const ProjectChange = (move) => {
    const length = ProjectsData[ActiveProjectData.id - 1].image.length;
    if (move === "next") {
      setPhotoIndex((c) => (c === length - 1 ? 0 : c + 1));
    } else if (move === "prev") {
      setPhotoIndex((c) => (c === 0 ? length - 1 : c - 1));
    }
  };

  return (
    <>
      <Header />
      <CoverDiv
        activeImage={ProjectsData[ActiveProjectData.id - 1].image[photoIndex]}
        height={"780px"}
        alignItems={"flex-start"}
      >
        <ButtonDiv>
          <StyledIcon onClick={() => ProjectChange("prev")}>
            <i className="ion-ios-arrow-back"></i>
          </StyledIcon>
          <StyledIcon onClick={() => ProjectChange("next")}>
            <i className="ion-ios-arrow-forward"></i>
          </StyledIcon>
        </ButtonDiv>
      </CoverDiv>
    </>
  );
};

export default ProjectDetails;
