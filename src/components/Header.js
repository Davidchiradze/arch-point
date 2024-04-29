import {
  HeaderDiv,
  MenuOptions,
  OptionsWrapper,
  Logo,
  StyledLink,
  LineAbout,
} from "../components/StyledComponent";
import Photo from "../assets/logoarch-removebg-preview.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const OptionArray = ["პროექტები", "კომპანია", "სერვისები", "კონტაქტი"];
function Header() {
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
  return (
    <>
      <HeaderDiv background={"#fff"} position={""} padding={"0 15%"}>
        <StyledLink to={"/"}>
          <Logo src={Photo} />
        </StyledLink>
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
      </HeaderDiv>
      <LineAbout />
    </>
  );
}

export default Header;
