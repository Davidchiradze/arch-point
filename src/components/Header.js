import {
  HeaderDiv,
  MenuOptions,
  OptionsWrapper,
  Logo,
  StyledLink,
  LineAbout,
  NavIconWrapper,
} from "../components/StyledComponent";
import Photo from "../assets/logoarch-removebg-preview.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

const OptionArray = ["პროექტები", "კომპანია", "სერვისები", "კონტაქტი"];
function Header() {
  const width = window.innerWidth;
  const history = useHistory();
  const goToComponent = (e) => {
    if (e === "პროექტები") {
      history.push("/projectpage");
    } else if (e === "კომპანია") {
      history.push("/aboutCompany");
    } else if (e === "კონტაქტი") {
      history.push("/contactinfo");
    } else if (e === "სერვისები") {
      history.push("/servicepage");
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <HeaderDiv background={"#fff"} position={""} padding={"0 15%"}>
        <StyledLink to={"/"}>
          <Logo src={Photo} />
        </StyledLink>
        {(isOpen || width > 1150) && (
          <OptionsWrapper>
            {OptionArray.map((title) => (
              <MenuOptions
                onClick={(e) => goToComponent(e.target.innerText)}
                color={"#888888"}
                fontSize={"16px"}
                hover={"#f7931d"}
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
      <LineAbout />
    </>
  );
}

export default Header;
