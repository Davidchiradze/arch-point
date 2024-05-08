import {
  CoverDiv,
  HeaderDiv,
  Logo,
  MenuOptions,
  OptionsWrapper,
  StyledLink,
  Div,
  ProjectTitleDiv,
  ButtonDiv,
  StyledIcon,
  NavIconWrapper,
} from "./StyledComponent";
import { useEffect, useRef, useState } from "react";
import { ProjectsData } from "../constants/projects";
import Photo from "../assets/logo.png";
import { useHistory } from "react-router-dom";

const OptionArray = ["პროექტები", "კომპანია", "სერვისები", "კონტაქტი"];

const TestComponents = () => {
  const [visible, setVisible] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const width = window.innerWidth;
  const coverRef = useRef();
  const history = useHistory();

  console.log(photoIndex);
  const opacityEffect = (title) => {
    if (scrolled === true) return;
    if (title === "Cover") {
      coverRef.current.style.filter = "brightness(0.6)";
      setVisible(true);
    } else if (title === "Header") {
      coverRef.current.style.filter = "brightness()";
      setVisible(false);
    }
  };
  const goToComponent = (e) => {
    if (e === "პროექტები") {
      window.scrollTo({
        top: 1100,
        behavior: "smooth",
      });
      opacityEffect("Header");
    } else if (e === "კომპანია") {
      history.push("/aboutCompany");
    } else if (e === "კონტაქტი") {
      history.push("/contactinfo");
    } else if (e === "სერვისები") {
      history.push("/servicepage");
    }
  };

  const ProjectChange = (move) => {
    if (move === "next") {
      setPhotoIndex((c) => (c === 16 ? 0 : c + 1));
    } else if (move === "prev") {
      setPhotoIndex((c) => (c === 0 ? 16 : c - 1));
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = 100;
      console.log(window.scrollY);

      if (window.scrollY > scrollHeight && !scrolled) {
        setScrolled(true);
        setVisible(false);
      } else if (window.scrollY <= scrollHeight && scrolled) {
        setScrolled(false);
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <Div onMouseOver={() => opacityEffect("Header")}>არქ ფოინთი</Div>
      <CoverDiv
        ref={coverRef}
        activeImage={ProjectsData[photoIndex].image[0]}
        height={"100vh"}
        alignItems={"flex-start"}
        onMouseEnter={() => opacityEffect("Cover")}
      >
        <HeaderDiv
          background={"none"}
          position={"absolute"}
          margin={"40px"}
          padding={"0 5%"}
        >
          <StyledLink to={"/"}>
            <Logo src={Photo} />
          </StyledLink>
          {(isOpen || width > 1150) && (
            <OptionsWrapper>
              {OptionArray.map((title) => (
                <MenuOptions
                  onClick={(e) => goToComponent(e.target.innerText)}
                  color={"white"}
                  fontSize={"20px"}
                  hover={"rgb(231 102 33 / 59%) !important"}
                >
                  {title}
                </MenuOptions>
              ))}
            </OptionsWrapper>
          )}
          <NavIconWrapper>
            <i
              className={isOpen ? "ion-close-round" : "ion-navicon-round"}
              onClick={() => setIsOpen((prev) => !prev)}
            ></i>
          </NavIconWrapper>
        </HeaderDiv>
        <ButtonDiv>
          <StyledIcon onClick={() => ProjectChange("prev")}>
            <i className="ion-ios-arrow-back"></i>
          </StyledIcon>
          <StyledIcon onClick={() => ProjectChange("next")}>
            <i className="ion-ios-arrow-forward"></i>
          </StyledIcon>
        </ButtonDiv>
      </CoverDiv>
      {visible && (
        <ProjectTitleDiv>{ProjectsData[photoIndex].title}</ProjectTitleDiv>
      )}
    </>
  );
};

export default TestComponents;
