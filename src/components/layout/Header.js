import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { colors, spacing, typography, media } from "../../theme";
import Photo from "../../assets/logoarch-removebg-preview.png";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${(props) =>
    props.scrolled ? colors.background : "rgba(255, 255, 255, 0.95)"};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid
    ${(props) => (props.scrolled ? colors.border : "rgba(255, 255, 255, 0.2)")};
  transition: all 0.3s ease;

  ${(props) =>
    props.scrolled &&
    `
    box-shadow: 0 2px 20px ${colors.shadow};
  `}
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.lg} ${spacing.xl};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: ${spacing.md} ${spacing.lg};
  }

  ${media.sm} {
    padding-left: ${spacing["2xl"]};
    padding-right: ${spacing["2xl"]};
  }
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    height: 45px;
  }

  ${media.sm} {
    height: 60px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xl};

  @media (max-width: 1024px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${colors.background};
    flex-direction: column;
    padding: ${spacing.lg};
    box-shadow: 0 4px 20px ${colors.shadow};
    transform: ${(props) =>
      props.isOpen ? "translateY(0)" : "translateY(-100%)"};
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    transition: all 0.3s ease;
    z-index: 1001;
  }
`;

const MenuLink = styled.div`
  color: ${(props) => props.color || colors.text};
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.lg};
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: ${spacing.sm} 0;

  &:hover {
    color: ${(props) => props.hover || colors.primary};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${colors.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 1024px) {
    padding: ${spacing.sm} 0;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid ${colors.border};

    &:last-child {
      border-bottom: none;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: ${typography.fontSize["2xl"]};
  color: ${colors.text};
  cursor: pointer;
  transition: color 0.3s ease;
  padding: ${spacing.sm};

  &:hover {
    color: ${colors.primary};
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;

const HeaderSpacer = styled.div`
  height: 80px;
`;

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
  const location = useLocation();

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

  const isHomePage = location.pathname === "/";

  return (
    <>
      <HeaderContainer scrolled={scrolled}>
        <HeaderContent>
          <Logo
            src={Photo}
            alt="არქ ფოინთი"
            onClick={() => handleNavigation("/")}
          />

          <Nav>
            <NavMenu isOpen={isOpen}>
              {navigationItems.map((item, index) => (
                <MenuLink
                  key={index}
                  onClick={() => handleNavigation(item.path)}
                  color={colors.text}
                  hover="#e76621"
                >
                  {item.label}
                </MenuLink>
              ))}
            </NavMenu>

            <MobileMenuButton onClick={toggleMenu}>
              <i
                className={isOpen ? "ion-close-round" : "ion-navicon-round"}
              ></i>
            </MobileMenuButton>
          </Nav>
        </HeaderContent>
      </HeaderContainer>
      <HeaderSpacer />
    </>
  );
}

export default Header;
