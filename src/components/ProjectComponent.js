import {
  MainDiv,
  ProjectImage,
  Address,
  InformationDiv,
  M2,
} from "../components/StyledComponent";

function ProjectComponent({ photo, address, m2 }) {
  return (
    <MainDiv>
      <ProjectImage src={photo} />
      <InformationDiv>
        <Address>{address}</Address>
        <M2>{m2}</M2>
      </InformationDiv>
    </MainDiv>
  );
}

export default ProjectComponent;
