import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

// Color palette
const colors = {
  primary: "#e76621",
  primaryDark: "#d55a1a",
  primaryLight: "#f7931d",
  secondary: "#2c3e50",
  accent: "#3498db",
  text: "#333333",
  textLight: "#666666",
  textMuted: "#888888",
  background: "#ffffff",
  backgroundLight: "#f8f9fa",
  backgroundDark: "#f1f1f2",
  border: "#e1e5e9",
  success: "#27ae60",
  warning: "#f39c12",
  error: "#e74c3c",
  shadow: "rgba(0, 0, 0, 0.1)",
  shadowDark: "rgba(0, 0, 0, 0.2)",
};

// Typography
const typography = {
  fontFamily:
    "'Geo', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// Spacing
const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
  "4xl": "6rem",
  "5xl": "8rem",
};

// Breakpoints
const breakpoints = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// Media queries helper
const media = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  "2xl": `@media (min-width: ${breakpoints["2xl"]})`,
};

// Export theme for use in other components
export const theme = {
  colors,
  typography,
  spacing,
  breakpoints,
  media,
};

// ===== LAYOUT COMPONENTS =====

export const WholeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
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

export const Section = styled.section`
  padding: ${spacing["4xl"]} 0;

  ${media.lg} {
    padding: ${spacing["5xl"]} 0;
  }
`;

// ===== HEADER COMPONENTS =====

export const HeaderDiv = styled.header`
  position: ${(props) => props.position || "fixed"};
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${(props) =>
    props.scrolled ? colors.background : "transparent"};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid
    ${(props) => (props.scrolled ? colors.border : "transparent")};
  transition: all 0.3s ease;

  ${(props) =>
    props.scrolled &&
    `
    box-shadow: 0 2px 20px ${colors.shadow};
  `}
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.lg} 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: ${spacing.lg};
  padding-right: ${spacing.lg};

  ${media.lg} {
    padding-left: ${spacing["2xl"]};
    padding-right: ${spacing["2xl"]};
  }
`;

export const Logo = styled.img`
  height: 60px;
  width: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  ${media.sm} {
    height: 70px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${spacing.xl};

  ${media.lg} {
    gap: ${spacing["2xl"]};
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xl};

  ${media.lg} {
    display: ${(props) => (props.isOpen ? "flex" : "flex")};
  }

  @media (max-width: ${breakpoints.lg}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${colors.background};
    border-top: 1px solid ${colors.border};
    flex-direction: column;
    padding: ${spacing.lg};
    box-shadow: 0 4px 20px ${colors.shadow};
    transform: ${(props) =>
      props.isOpen ? "translateY(0)" : "translateY(-100%)"};
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    transition: all 0.3s ease;
  }
`;

export const MenuOptions = styled(Link)`
  color: ${(props) => props.color || colors.text};
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.lg};
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;

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

  @media (max-width: ${breakpoints.lg}) {
    padding: ${spacing.sm} 0;
    font-size: ${typography.fontSize.xl};
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: ${typography.fontSize["2xl"]};
  color: ${colors.text};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.primary};
  }

  @media (max-width: ${breakpoints.lg}) {
    display: block;
  }
`;

// ===== HERO SECTION =====

export const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.4);
  transition: all 0.5s ease;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(231, 102, 33, 0.8),
    rgba(45, 62, 80, 0.6)
  );
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: ${colors.background};
  max-width: 800px;
  padding: 0 ${spacing.lg};
`;

export const HeroTitle = styled.h1`
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

export const HeroSubtitle = styled.p`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.normal};
  line-height: ${typography.lineHeight.relaxed};
  margin-bottom: ${spacing["2xl"]};
  opacity: 0.9;
  animation: fadeInUp 0.8s ease-out 0.2s both;

  ${media.sm} {
    font-size: ${typography.fontSize.xl};
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: ${spacing.lg};
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out 0.4s both;
`;

export const Button = styled.button`
  padding: ${spacing.md} ${spacing.xl};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.semibold};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${spacing.sm};

  ${(props) =>
    props.variant === "primary" &&
    `
    background: ${colors.primary};
    color: ${colors.background};
    
    &:hover {
      background: ${colors.primaryDark};
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(231, 102, 33, 0.3);
    }
  `}

  ${(props) =>
    props.variant === "secondary" &&
    `
    background: transparent;
    color: ${colors.background};
    border: 2px solid ${colors.background};
    
    &:hover {
      background: ${colors.background};
      color: ${colors.primary};
      transform: translateY(-2px);
    }
  `}
  
  ${(props) =>
    props.variant === "outline" &&
    `
    background: transparent;
    color: ${colors.primary};
    border: 2px solid ${colors.primary};
    
    &:hover {
      background: ${colors.primary};
      color: ${colors.background};
      transform: translateY(-2px);
    }
  `}
`;

export const NavigationArrows = styled.div`
  position: absolute;
  bottom: ${spacing["2xl"]};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: ${spacing.lg};
  z-index: 2;
`;

export const ArrowButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: ${colors.background};
  font-size: ${typography.fontSize.xl};
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }
`;

// ===== PROJECTS SECTION =====

export const ProjectsSection = styled.section`
  background: ${colors.backgroundLight};
  padding: ${spacing["4xl"]} 0;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${spacing["4xl"]};
`;

export const SectionTitle = styled.h2`
  font-size: ${typography.fontSize["3xl"]};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.text};
  margin-bottom: ${spacing.lg};

  ${media.sm} {
    font-size: ${typography.fontSize["4xl"]};
  }
`;

export const SectionSubtitle = styled.p`
  font-size: ${typography.fontSize.lg};
  color: ${colors.textLight};
  max-width: 600px;
  margin: 0 auto;
`;

export const TitleIcon = styled.div`
  width: 4px;
  height: 40px;
  background: linear-gradient(
    to bottom,
    ${colors.primary},
    ${colors.primaryLight}
  );
  margin: 0 auto ${spacing.lg};
  border-radius: 2px;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing.xl};

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProjectCard = styled.div`
  background: ${colors.background};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px ${colors.shadow};
  transition: all 0.3s ease;
  cursor: pointer;
  height: 350px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px ${colors.shadowDark};
  }
`;

export const ProjectImageCard = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

export const ProjectInfoCard = styled.div`
  padding: ${spacing.lg};
`;

export const ProjectTitleCard = styled.h3`
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.text};
  margin-bottom: ${spacing.sm};
`;

export const ProjectSizeCard = styled.span`
  display: inline-block;
  background: ${colors.primary};
  color: ${colors.background};
  padding: ${spacing.xs} ${spacing.md};
  border-radius: 20px;
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
`;

// ===== ABOUT SECTION =====

export const AboutSection = styled.section`
  padding: ${spacing["4xl"]} 0;
  background: ${colors.background};
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing["3xl"]};
  align-items: center;

  ${media.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const AboutText = styled.div`
  ${media.lg} {
    order: 1;
  }
`;

export const AboutTitle = styled.h2`
  font-size: ${typography.fontSize["3xl"]};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.text};
  margin-bottom: ${spacing.lg};

  ${media.sm} {
    font-size: ${typography.fontSize["4xl"]};
  }
`;

export const AboutDescription = styled.p`
  font-size: ${typography.fontSize.lg};
  color: ${colors.textLight};
  line-height: ${typography.lineHeight.relaxed};
  margin-bottom: ${spacing.lg};
`;

export const AboutImage = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  height: 400px;
  border-radius: 12px;
  box-shadow: 0 8px 30px ${colors.shadow};

  ${media.lg} {
    order: 2;
    height: 500px;
  }
`;

// ===== SERVICES SECTION =====

export const ServicesSection = styled.section`
  background: ${colors.backgroundLight};
  padding: ${spacing["4xl"]} 0;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing.xl};

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ServiceCard = styled.div`
  background: ${colors.background};
  padding: ${spacing["2xl"]};
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px ${colors.shadow};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px ${colors.shadowDark};
  }
`;

export const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(
    135deg,
    ${colors.primary},
    ${colors.primaryLight}
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${spacing.lg};
  font-size: ${typography.fontSize["2xl"]};
  color: ${colors.background};
`;

export const ServiceTitle = styled.h3`
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.text};
  margin-bottom: ${spacing.md};
`;

export const ServiceDescription = styled.p`
  color: ${colors.textLight};
  line-height: ${typography.lineHeight.relaxed};
`;

// ===== CONTACT SECTION =====

export const ContactSection = styled.section`
  padding: ${spacing["4xl"]} 0;
  background: ${colors.background};
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing["3xl"]};

  ${media.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContactInfo = styled.div`
  ${media.lg} {
    order: 1;
  }
`;

export const ContactTitle = styled.h2`
  font-size: ${typography.fontSize["3xl"]};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.text};
  margin-bottom: ${spacing.lg};
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  margin-bottom: ${spacing.lg};
`;

export const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.background};
  font-size: ${typography.fontSize.lg};
`;

export const ContactText = styled.div`
  color: ${colors.textLight};
  font-size: ${typography.fontSize.lg};
`;

export const ContactMap = styled.div`
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px ${colors.shadow};

  ${media.lg} {
    order: 2;
    height: 500px;
  }
`;

// ===== FOOTER =====

export const Footer = styled.footer`
  background: ${colors.secondary};
  color: ${colors.background};
  padding: ${spacing["3xl"]} 0 ${spacing.xl};
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing["2xl"]};

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FooterSection = styled.div`
  text-align: center;

  ${media.sm} {
    text-align: left;
  }
`;

export const FooterTitle = styled.h3`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.semibold};
  margin-bottom: ${spacing.md};
`;

export const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: ${typography.lineHeight.relaxed};
  margin-bottom: ${spacing.sm};
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: ${spacing["2xl"]};
  padding-top: ${spacing.lg};
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`;

// ===== UTILITY COMPONENTS =====

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Divider = styled.div`
  width: 60px;
  height: 4px;
  background: linear-gradient(
    to right,
    ${colors.primary},
    ${colors.primaryLight}
  );
  margin: 0 auto;
  border-radius: 2px;
`;

// ===== LEGACY COMPONENTS (for backward compatibility) =====

export const ProjectsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing.xl};
  padding: ${spacing["4xl"]} 0;

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const MainDiv = styled.div`
  background: ${colors.background};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px ${colors.shadow};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px ${colors.shadowDark};
  }
`;

export const InformationDiv = styled.div`
  padding: ${spacing.lg};
`;

export const Address = styled.div`
  background: ${colors.textMuted};
  color: ${colors.background};
  padding: ${spacing.sm} ${spacing.md};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  margin-bottom: ${spacing.sm};
`;

export const M2 = styled.div`
  background: ${colors.primary};
  color: ${colors.background};
  padding: ${spacing.sm} ${spacing.md};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  display: inline-block;
`;

export const Title = styled.h1`
  color: ${colors.primary};
  font-size: ${typography.fontSize["3xl"]};
  font-weight: ${typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${spacing["2xl"]};

  ${media.sm} {
    font-size: ${typography.fontSize["4xl"]};
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.md};
  margin-bottom: ${spacing["2xl"]};
`;

export const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xl};

  @media (max-width: ${breakpoints.lg}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${colors.background};
    border-top: 1px solid ${colors.border};
    flex-direction: column;
    padding: ${spacing.lg};
    box-shadow: 0 4px 20px ${colors.shadow};
    transform: ${(props) =>
      props.isOpen ? "translateY(0)" : "translateY(-100%)"};
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    transition: all 0.3s ease;
  }
`;

export const NavIconWrapper = styled.div`
  display: none;

  @media (max-width: ${breakpoints.lg}) {
    display: block;
  }

  > i {
    cursor: pointer;
    font-size: ${typography.fontSize["2xl"]};
    color: ${colors.text};
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.primary};
    }
  }
`;

// Additional legacy components
export const Div = styled.div`
  background: ${colors.primary};
  color: ${colors.background};
  padding: ${spacing.md} 0;
  text-align: center;
  font-weight: ${typography.fontWeight.medium};
  letter-spacing: 2px;
`;

export const CoverDiv = styled.div`
  background-image: url(${(props) => props.activeImage});
  width: 100%;
  height: ${(props) => props.height || "100vh"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.5s ease;
`;

export const ProjectTitleDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: ${colors.background};
  padding: ${spacing["2xl"]};
  text-align: center;
  font-size: ${typography.fontSize["2xl"]};
  font-weight: ${typography.fontWeight.bold};
`;

export const ButtonDiv = styled.div`
  position: absolute;
  bottom: ${spacing["2xl"]};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: ${spacing.lg};
  z-index: 2;
`;

export const StyledIcon = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: ${colors.background};
  font-size: ${typography.fontSize.xl};
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }
`;

// About page components
export const AboutTitleIcon = styled.div`
  width: 4px;
  height: 40px;
  background: ${colors.primary};
  border-radius: 2px;
`;

export const AboutTitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  margin-bottom: ${spacing["2xl"]};
`;

export const ParagraphAbout = styled.p`
  font-size: ${typography.fontSize.lg};
  color: ${colors.textLight};
  line-height: ${typography.lineHeight.relaxed};
  margin-bottom: ${spacing.lg};
`;

export const DivWrapper = styled.div`
  padding: ${spacing["4xl"]} 0;
  background: ${colors.backgroundLight};
`;

export const Span = styled.span`
  color: ${colors.primary};
  font-weight: ${typography.fontWeight.bold};
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
`;

export const LineAbout = styled.div`
  width: 100%;
  height: 4px;
  background: linear-gradient(
    to right,
    ${colors.primary},
    ${colors.primaryLight}
  );
`;

// Contact components
export const ContactInfoCard = styled.div`
  background: ${colors.background};
  border-radius: 12px;
  box-shadow: 0 8px 30px ${colors.shadow};
  overflow: hidden;
  max-width: 400px;
  margin: 0 auto;
`;

export const ContactCardTitle = styled.div`
  background: ${colors.primary};
  color: ${colors.background};
  padding: ${spacing.lg};
  text-align: center;
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize.lg};
`;

export const ContactDetails = styled.h3`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.text};
  margin-bottom: ${spacing.sm};
`;

export const ContactDiv = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  padding: ${spacing.md} ${spacing.lg};
`;

export const ContactDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
  padding: ${spacing.lg};
`;

// Service page components
export const MarkerCheckbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.primary};
  border-radius: 4px;
  outline: none;
  margin-right: ${spacing.sm};
  cursor: pointer;
  position: relative;

  &:checked {
    background: ${colors.primary};

    &::after {
      content: "✓";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${colors.background};
      font-size: ${typography.fontSize.sm};
      font-weight: ${typography.fontWeight.bold};
    }
  }
`;

export const CheckerDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${spacing.md};
`;

export const MappedDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`;

export const InputContainer = styled.div`
  margin-bottom: ${spacing.lg};
`;

export const TitleInput = styled.label`
  display: block;
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.text};
  margin-bottom: ${spacing.sm};
`;

export const NumberInput = styled.input`
  padding: ${spacing.md};
  font-size: ${typography.fontSize.lg};
  border: 2px solid ${colors.border};
  border-radius: 8px;
  outline: none;
  width: 100%;
  max-width: 200px;
  background: ${colors.background};
  color: ${colors.text};
  transition: all 0.3s ease;

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(231, 102, 33, 0.1);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const DivSides = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing["2xl"]};

  ${media.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const BackgroundImage = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
  border-radius: 12px;
  box-shadow: 0 8px 30px ${colors.shadow};

  ${media.lg} {
    height: 600px;
  }
`;

export const Sider = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
`;

// Footer components
export const FooterDiv = styled.footer`
  background: ${colors.secondary};
  color: ${colors.background};
  padding: ${spacing["2xl"]} 0;
  text-align: center;
`;

// Additional utility components
export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Line = styled.div`
  width: ${(props) => props.width || "100"}%;
  height: 2px;
  background: ${colors.primary};
  transition: width 0.3s ease;
`;

export const LineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing.sm} 0;
`;

export const Prev = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${colors.primary};
  color: ${colors.background};
  border: none;
  font-size: ${typography.fontSize.lg};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.primaryDark};
    transform: scale(1.1);
  }
`;

export const Next = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${colors.primary};
  color: ${colors.background};
  border: none;
  font-size: ${typography.fontSize.lg};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.primaryDark};
    transform: scale(1.1);
  }
`;

// ===== PRICING SECTION =====

export const PricingSection = styled.section`
  padding: ${spacing["4xl"]} 0;
  background: ${colors.background};
`;

export const PricingCard = styled.div`
  background: ${colors.background};
  border: 2px solid ${colors.border};
  border-radius: 12px;
  padding: ${spacing["2xl"]};
  text-align: center;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    border-color: ${colors.primary};
    transform: translateY(-5px);
    box-shadow: 0 12px 40px ${colors.shadowDark};
  }

  &:nth-child(3) {
    border-color: ${colors.primary};
    background: linear-gradient(
      135deg,
      ${colors.primary}10,
      ${colors.background}
    );

    &::before {
      content: "ყველაზე პოპულარული";
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      background: ${colors.primary};
      color: ${colors.background};
      padding: ${spacing.xs} ${spacing.md};
      border-radius: 20px;
      font-size: ${typography.fontSize.sm};
      font-weight: ${typography.fontWeight.semibold};
    }
  }
`;

export const PricingTitleCard = styled.h3`
  font-size: ${typography.fontSize["2xl"]};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.text};
  margin-bottom: ${spacing.sm};
`;

export const PricingPrice = styled.div`
  font-size: ${typography.fontSize["4xl"]};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.primary};
  margin-bottom: ${spacing.sm};
`;

export const PricingFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const PricingFeature = styled.li`
  padding: ${spacing.sm} 0;
  color: ${colors.textLight};
  font-size: ${typography.fontSize.lg};
  border-bottom: 1px solid ${colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

// ===== PRICING RESULT =====

export const PricingResult = styled.div`
  background: linear-gradient(
    135deg,
    ${colors.primary},
    ${colors.primaryLight}
  );
  color: ${colors.background};
  padding: ${spacing["2xl"]};
  border-radius: 12px;
  text-align: center;
  margin-top: ${spacing.lg};
  box-shadow: 0 8px 30px rgba(231, 102, 33, 0.3);
`;

export const PricingTitle = styled.h3`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.semibold};
  margin-bottom: ${spacing.sm};
  opacity: 0.9;
`;

export const PricingAmount = styled.div`
  font-size: ${typography.fontSize["4xl"]};
  font-weight: ${typography.fontWeight.bold};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// ===== PROJECT DETAILS =====

export const ProjectDetailsSection = styled.section`
  min-height: 100vh;
  background: ${colors.background};
`;

export const ProjectHero = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ProjectImage = styled.img`
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

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3));
`;

export const ProjectContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: ${colors.background};
  max-width: 800px;
  padding: 0 ${spacing.lg};
`;

export const ProjectTitle = styled.h1`
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

export const ProjectSize = styled.div`
  display: inline-block;
  background: ${colors.primary};
  color: ${colors.background};
  padding: ${spacing.sm} ${spacing.xl};
  border-radius: 30px;
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.semibold};
  margin-bottom: ${spacing.lg};
  animation: fadeInUp 0.8s ease-out 0.2s both;
`;

export const ProjectDescription = styled.p`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.normal};
  line-height: ${typography.lineHeight.relaxed};
  opacity: 0.9;
  animation: fadeInUp 0.8s ease-out 0.4s both;

  ${media.sm} {
    font-size: ${typography.fontSize.xl};
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: ${spacing["2xl"]};
  left: ${spacing["2xl"]};
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: ${colors.background};
  padding: ${spacing.sm} ${spacing.lg};
  border-radius: 30px;
  font-size: ${typography.fontSize.lg};
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
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
`;

export const ProjectInfo = styled.div`
  padding: ${spacing.lg};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProjectSpecs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing.lg};

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SpecItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.lg};
  background: ${colors.backgroundLight};
  border-radius: 8px;
  border-left: 4px solid ${colors.primary};
`;

export const SpecLabel = styled.span`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.textLight};
`;

export const SpecValue = styled.span`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.text};
`;

export const ProjectGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${spacing.md};
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 120px;
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
    box-shadow: 0 4px 20px rgba(231, 102, 33, 0.3);
  }
`;
