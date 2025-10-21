import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  HeaderDiv,
  HeaderContent,
  Logo,
  Nav,
  NavMenu,
  MenuOptions,
  MobileMenuButton,
  LineAbout,
} from "./StyledComponent";
import Photo from "../assets/logoarch-removebg-preview.png";

const navigationItems = [
  { label: "მთავარი", path: "/" },
  { label: "პროექტები", path: "/projectpage" },
  { label: "კომპანია", path: "/aboutCompany" },
  { label: "სერვისები", path: "/servicepage" },
  { label: "კონტაქტი", path: "/contactinfo" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    history.push(path);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderDiv scrolled={scrolled}>
        <HeaderContent>
          <Logo
            src={Photo}
            alt="არქ ფოინთი"
            onClick={() => handleNavigation("/")}
          />

          <Nav>
            <NavMenu isOpen={isOpen}>
              {navigationItems.map((item, index) => (
                <MenuOptions
                  key={index}
                  to={item.path}
                  onClick={() => handleNavigation(item.path)}
                  color={scrolled ? "#333" : "#fff"}
                  hover="#e76621"
                >
                  {item.label}
                </MenuOptions>
              ))}
            </NavMenu>

            <MobileMenuButton onClick={toggleMenu}>
              <i
                className={isOpen ? "ion-close-round" : "ion-navicon-round"}
              ></i>
            </MobileMenuButton>
          </Nav>
        </HeaderContent>
      </HeaderDiv>
      <LineAbout />
    </>
  );
}

export default Header;
