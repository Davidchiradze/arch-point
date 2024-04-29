import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const WholeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeaderDiv = styled.div`
  height: 100px;
  width: 100%;
  background-color: ${(props) => props.background};
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export const MenuOptions = styled.h1`
  color: ${(props) => props.color};
  font-weight: 500;
  font-size: ${(props) => props.fontSize};
  line-height: 1.235;
  letter-spacing: 0.00735em;
  cursor: pointer;
  font-family: "Geo";
  &:hover {
    color: ${(props) => props.hover};
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const Div = styled.div`
  width: 100%;
  height: 40px;
  background-color: rgb(231 102 33 / 109%) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.235;
  letter-spacing: 2.3px;
  font-family: "Geo";
`;

export const ProjectTitleDiv = styled.div`
  width: 100%;
  height: 252px;
  background-color: rgb(231 102 33 / 59%) !important;
  position: absolute;
  top: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 400;
  font-size: 25px;
  line-height: 1.235;
  letter-spacing: 0.00735em;
  font-family: "Geo";
`;

export const CoverDiv = styled.div`
  background-image: url(${(props) => props.activeImage});
  width: 100%;
  height: ${(props) => props.height};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  transition: 3s;
  position: relative;
  filter: brightness();
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export const Line = styled.div`
  width: ${(props) => props.width}%;
  height: 2px;
  background-color: #f7931d;
  max-width: 100%;
  transition: ${(props) => (props.width === 90 ? 0 : "1s")};
`;

export const LineWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1px;
  padding-bottom: 1px;
`;
export const ProjectsDiv = styled.div`
  width: 100%;
  background-color: #f1f1f2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 100px;
  padding-bottom: 100px;
`;
export const MainDiv = styled.div`
  padding: 14px;
  background-color: white;
  &:hover {
    background-color: #f1f1f2;
    cursor: pointer;
  }
`;

export const ProjectImage = styled.img`
  width: 400px;
  height: 250px;
`;

export const InformationDiv = styled.div``;

export const Address = styled.div`
  background-color: #888888;
  color: white;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.235;
  letter-spacing: 0.00735em;
  font-family: "Geo";
  opacity: 0.8;
  padding-top: 5px;
  padding-left: 5px;
`;

export const M2 = styled.div`
  background-color: rgb(231 102 33 / 100%) !important;
  color: white;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.235;
  letter-spacing: 0.00735em;
  font-family: "Geo";
  opacity: 0.8;
  padding-top: 5px;
  padding-left: 5px;
`;

export const Title = styled.h1`
  color: rgb(231 102 33 / 100%) !important;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.235;
  letter-spacing: 0.00735em;
  font-family: "Geo";
  opacity: 0.8;
  padding-top: 10px;
`;
export const TitleIcon = styled.div`
  background-color: rgb(231 102 33 / 100%) !important;
  height: 50px;
  width: 7px;
`;

export const TitleDiv = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 20px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const FooterDiv = styled.div`
  width: 100%;
  height: 90px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.h1`
  color: #888888;
  font-size: 16px;
  font-weight: 400;
  font-family: "Geo";
`;

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 36.3vh;
  padding: 0 5%;
`;

export const Prev = styled.button`
  width: 50px;
  height: 50px;
  font-size: 16px;
  font-weight: 400;
  font-family: "Geo";
  border: none;
  background-color: rgb(231 102 33 / 59%) !important;
  color: white;
  &:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
`;
export const Next = styled.button`
  width: 50px;
  height: 50px;
  font-size: 16px;
  font-weight: 400;
  font-family: "Geo";
  border: none;

  color: white;
  &:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
`;
export const StyledIcon = styled.button`
  font-size: 50px;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    color: rgb(231 102 33 / 59%) !important;
  }
`;

export const AboutTitle = styled.h1`
  color: #f7931d;
  font-weight: 700;
  font-size: 17px;
  line-height: 1.235;
  letter-spacing: 0.00735em;
  font-family: "Geo";
  opacity: 0.8;
  padding-top: 10px;
`;
export const AboutTitleIcon = styled.div`
  background-color: #f7931d;
  height: 35px;
  width: 7px;
`;

export const AboutTitleDiv = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 50px;
  padding-bottom: 40px;
  width: 100%;
`;

export const ParagraphAbout = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: "Geo";
`;

export const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 50px 15%;
  background-color: #f1f1f2;
  padding-bottom: 200px;
`;
export const Span = styled.span`
  color: #f7931d;
  font-size: 16px;
  font-weight: 800;
  font-family: "Geo";
`;
export const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LineAbout = styled.div`
  width: 100%;
  height: 15px;
  background: linear-gradient(to right, #fc4a1a, #f7b733);
`;

export const ContactInfoCard = styled.div`
  height: 300px;
  width: 400px;
  background-color: white;
  font-weight: 700;
  position: absolute;
  z-index: 1000;
  font-size: 1.4rem;
  top: 40%;
  left: 15%;
  transform: translateX(-50%);
  box-shadow: 2px 2px 1px 1px white;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;
export const ContactCardTitle = styled.div`
  width: 402px;
  height: 50px;
  background-color: #f7931d;
  font-size: 16px;
  font-weight: 800;
  font-family: "Geo";
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 15px;
  color: white;
`;
export const Img = styled.img``;
export const ContactDetails = styled.h2`
  font-size: 17px;
  font-weight: 700;
  line-height: 1.235;
  letter-spacing: 0.00735em;
  font-family: "Geo";
  opacity: 0.8;
`;
export const ContactDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  padding: 0 30px;
`;
export const ContactDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding-top: 20px;
`;

export const MarkerCheckbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #f7931d;
  border-radius: 50%;
  outline: none;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;

  &:checked {
    background-color: #f7931d;
  }
`;

export const CheckerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const MappedDivWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const TitleInput = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const NumberInput = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  width: 30%;
  background-color: #f7931d;
  color: white;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:hover {
    background-color: white;
    color: #f7931d;
  }
`;

export const DivSides = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BackgroundImage = styled.div`
  background-image: url(${(props) => props.image});
  width: 72%;
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Sider = styled.div``;
